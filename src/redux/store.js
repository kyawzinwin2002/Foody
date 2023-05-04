import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./api/foodApi";

export const store = configureStore({
    reducer:{
        [foodApi.reducerPath]: foodApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})