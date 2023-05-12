import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./api/foodApi";
import foodSlice from "./services/foodSlice";

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
    foodSlice: foodSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
});
