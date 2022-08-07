import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// show comments

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const response = await fetch('http://localhost:8001/posts', {
        method: "GET",
        headers: {
          "Content-type": "application/json; charest=UTF-8",
        },
      });
      const result = await response.json();
      console.log('amal',result);

      return result;
  }
  catch{
    return rejectWithValue();
  }
  }
  );



//delete posts
export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const response = await fetch(`http://localhost:8001/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charest=UTF-8",
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
}
catch{
  return rejectWithValue();
}
}
);
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: {

        //reducer for get posts
        [getPosts.pending]: (state, action) => {
            state.loading = true;
            
        },
        [getPosts.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.loading = false;
           
        },
        [getPosts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            
        },


        //....
        // Reducer for delete posts
        
        [deletePosts.pending]: (state, action) => { 
            state.loading = true;
        },
        [deletePosts.fulfilled]: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
            ;
        },
        [deletePosts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    

    }
});

export default postSlice.reducer;