import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  allFood: [],
  favorite: [],  
  goToRoute: "",
  
};

const STORE_WORD = "favorite"
const storedItem = Cookies.get(STORE_WORD)
if(storedItem){
    initialState.favorite = JSON.parse(storedItem)
}

export const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    ADD_FOOD: (state, { payload }) => {
      state.allFood = [...state.allFood,  ...payload ];
      
    },
    ADD_FAVORITE: (state, { payload }) => {
      const isExisted = state.favorite.find(
        (item) => item.idMeal === payload.idMeal
      );

      if (isExisted) {
        state;
      } else {
        state.favorite = [...state.favorite,  payload];
        Cookies.set(STORE_WORD, JSON.stringify(state.favorite));
        
      }
    },
    REMOVE_FAVORITE: (state, { payload }) => {
      state.favorite = state.favorite.filter(item => item.idMeal !== payload.idMeal )
      Cookies.set(STORE_WORD, JSON.stringify(state.favorite));
    },
    SET_ROUTE: (state, { payload }) => {
      state.goToRoute = payload;
      Cookies.set("goToRoute", JSON.stringify(state.goToRoute));
    },
  },
});

export const { ADD_FOOD, ADD_FAVORITE,REMOVE_FAVORITE, SET_ROUTE } = foodSlice.actions;
export default foodSlice.reducer;
