import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  // const favorite = JSON.parse(Cookies.get("favorite"))
  const  {favorite}  = useSelector(state => state.foodSlice)
  console.log(favorite)
  return <div>Favorite</div>;
};

export default Favorite;
