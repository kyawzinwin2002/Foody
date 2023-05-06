import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allFood:[]
}

export const foodSlice = createSlice({
    name:"foodSlice",
    initialState,
    reducers:{
        ADD_FOOD:(state,{payload}) => {
            state.allFood = [...state.allFood,payload]
        }
    }
})

export const { ADD_FOOD } = foodSlice.actions
export  default foodSlice.reducer