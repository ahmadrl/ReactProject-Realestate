import { configureStore } from "@reduxjs/toolkit";
import adSlice from "../adSlice";
import usersReducer from "../../../Store/Reducer/SignIn";
import userSlice from "../userSlice";
import commentsSlice from "../../redux/commentsSlice";
import postSlice from "../../redux/postSlice";


export const store = configureStore({
    reducer: {
        ad: adSlice,
        user: userSlice,
        users: usersReducer,
        comments: commentsSlice,
        posts: postSlice,

    },
});
