import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  allFood: [],
  favorite: [],
  goToRoute:"hi",
  favCon: false,
};

export const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    ADD_FOOD: (state, { payload }) => {
      state.allFood = [...state.allFood, payload];
    },
    ADD_FAVORITE: (state, { payload }) => {
      const isExisted = state.favorite.find((item) => item.idMeal === payload.idMeal);
      
      if (isExisted) {
        state;
      } else {
    
        state.favorite = [...state.favorite , payload];
        // Cookies.set("favorite", JSON.stringify(state.favorite));
      }

    },
    SET_ROUTE:(state,{payload}) => {
      state.goToRoute = payload

    }
  },
});

export const { ADD_FOOD, ADD_FAVORITE,SET_ROUTE } = foodSlice.actions;
export default foodSlice.reducer;
