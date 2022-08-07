// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// // show comments


// export const getComments = createAsyncThunk('comments/getComments', async () => {
//     const response = await fetch('http://127.0.0.1:8001/comments');
//     const data = await response.json();
//     return data;
// });




// //delete comments
// export const deleteComments = createAsyncThunk(
//   "comments/deleteComments",
//   async (id, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try{
//     const response = await fetch(`http://127.0.0.1:8001/comments/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json; charest=UTF-8",
//       },
//     });
//     const result = await response.json();
//     // console.log(result);
//     return result;
// }
// catch{
//   return rejectWithValue();
// }
// }
// );
// const commentsSlice = createSlice({
//     name: 'comments',
//     initialState: {
//         comments: [],
//         loading: false,
//     },
//     extraReducers: {

//         //reducer for get comments
//         [getComments.pending]: (state, action) => {
//             state.loading = true;
//             console.log(action);
//         },
//         [getComments.fulfilled]: (state, action) => {
//             state.comments = action.payload;
//             state.loading = false;
//             console.log(state.ads);
//         },
//         [getComments.rejected]: (state, action) => {
//             state.error = action.payload;
//             state.loading = false;
//             console.log(state.ads);
//         },

//         //....
//         // Reducer for fetching ads
        
//         [deleteComments.pending]: (state, action) => { 
//             state.loading = true;
//         },
//         [deleteComments.fulfilled]: (state, action) => {
//             state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
//             ;
//         },
//         [deleteComments.rejected]: (state, action) => {
//             state.error = action.payload;
//             state.loading = false;
//         },
    

//     }
// });

// export default commentsSlice.reducer;
