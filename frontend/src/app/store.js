import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../PostFeatures/api/apiSlice';
import adSlice from "../Admin/redux/adSlice";
import userSlice from "../Admin/redux/userSlice";

export const storePost = configureStore({
    
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        ad: adSlice,
        user: userSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})