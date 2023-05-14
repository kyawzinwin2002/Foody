import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user:null,
  token:null
};

const userInfo = "user"
const tokenInfo = "token";
const storeUser = Cookies.get(userInfo);
const storeToken = Cookies.get(tokenInfo);
if(storeUser){
  initialState.user = JSON.parse(storeUser)
}
if (storeToken) {
  initialState.token = storeToken
}


export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    ADD_USER:(state,{payload}) => {
        state.user = payload.user
        state.token = payload.token
        Cookies.set("user",JSON.stringify(state.user))
        Cookies.set("token", state.token);
    },
    REMOVE_USER:(state) => {
        state.user= null
        state.token = null;
        Cookies.remove("user");
        Cookies.remove("token");
    }
  },
});

export const {
  ADD_USER,REMOVE_USER
} = authSlice.actions;
export default authSlice.reducer;
