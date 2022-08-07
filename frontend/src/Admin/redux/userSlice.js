import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Auth from "../../Store/Services/Auth";

export const getUsers = createAsyncThunk('user/getUsers', async () => {

    const response = await fetch('http://127.0.0.1:8000/api/users');
    const result = await response.json();
    console.log(result);
    return result;

});

export const deleteUser = createAsyncThunk(
  "",
  async ({ id }) => {
    await Auth.remove(id);
    return { id };
  }
);



// export const deleteUsers = createAsyncThunk('user/deleteUsers', async (id, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//         const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`,{
//         method:'DELETE',
//         headers:{
//          'Content-type':'application/json; charset=UTF-8',
// },
        
//     });
//     const data = await response.json();
//     return data;
// }
//     catch (error) {
//         console.error(error);
//         return rejectWithValue(error.message);
//     }
// });







const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
    },
    extraReducers: {
        // Reducer for fetching Users
        [getUsers.pending]: (state, action) => { 
            state.loading = true;
            console.log(action);
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
            console.log(state.users);
        },
        [getUsers.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.users);
        },



        // Reducer for deleting Users
        // [deleteUsers.pending]: (state, action) => { 
        //     state.loading = true;
        //     console.log(action);
        // },
        // [deleteUsers.fulfilled]: (state, action) => {
   
        // },
        // [deleteUsers.rejected]: (state, action) => {
        //     state.error = action.payload;
        //     console.log(state.users);
        // },
        
     [deleteUser.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },

    }
});

export default userSlice.reducer;
