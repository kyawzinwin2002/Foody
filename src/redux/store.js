import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./api/foodApi";
import foodSlice from "./services/foodSlice";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    foodSlice: foodSlice,
    authSlice:authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware, authApi.middleware),
});
