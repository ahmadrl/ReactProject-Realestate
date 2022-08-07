
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import Auth from "../Services/Auth";
const initialState = [];
export const login = createAsyncThunk(
  "login",
  async ({ email,password }) => {
    const res = await Auth.Login({ email, password });
    return res.data;
  }
);
export const Register = createAsyncThunk(
  "register",
  async ({ name, email, password, role, image, confirm_password},{rejectWithValue}) => {
      try {
        const res = await Auth.Register({
          name,
          email,
          password,
          role,
          image,
          confirm_password,
        });
        return res.data;
  
      } catch (error) {
        console.error(error);
        swal.fire({
          position: "center",
          icon: "error",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        return rejectWithValue(error.message);
      }
  }
);
// export const getAll = createAsyncThunk(
//   "",
//   async () => {
//     const res = await Auth.getAll();
//     return res.data;
//   }
// );
export const updateUser = createAsyncThunk("/users/profile", async ({ id, data }) => {
  const res = await Auth.update(id, data);
  console.log(res.data);  
  return ;
});
// export const deleteUser = createAsyncThunk(
//   "",
//   async ({ id }) => {
//     await Auth.remove(id);
//     return { id };
//   }
// );
// export const deleteAllTutorials = createAsyncThunk(
//   "",
//   async () => {
//     const res = await Auth.removeAll();
//     return res.data;
//   }
// );
// export const findByTitle = createAsyncThunk(
//   "",
//   async ({ title }) => {
//     const res = await Auth.findByTitle(type);
//     return res.data;
//   }
// );
const AuthSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [Register.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    // [getAll.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
    
        state.users = state.users.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    // [deleteUser.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },

    // [findByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = AuthSlice;
export default reducer;