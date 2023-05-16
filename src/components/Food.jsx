import React, { useState } from "react";
import { AiFillStar, AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE } from "../redux/services/foodSlice";
import { Link } from "react-router-dom";
import "../CSS/Food.css";

const Food = (props) => {
  const { idMeal, strMealThumb } = props;
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const favorite = useSelector((state) => state.foodSlice.favorite);

  const sameItemFromFav = favorite?.find((item) => item.idMeal === idMeal);

  const dispatch = useDispatch();

  return (
    <div
      className={
        darkMode
          ? " p-4 shadow-lg  flex flex-col gap-3 relative rounded-2xl bg-gray-700  "
          : " p-4 shadow-md flex flex-col gap-3 border-2 rounded-2xl  relative"
      }
    >
      {sameItemFromFav ? (
        <div className="favTag">
          <AiFillStar className="absolute text-xl bottom-[1px] text-white bg-[#d02a3a]" />
        </div>
      ) : null}
      <img src={strMealThumb} className="  w-[150px]" alt="" />
      <div className="flex justify-end gap-2">
        <Link to={`/detail/${idMeal}`}>
          <button className=" px-2 text-lg py-2 rounded-md text-white bg-[#d02a3a]">
            <AiOutlineFileSearch />
          </button>
        </Link>

        <button
          onClick={() => {
            dispatch(ADD_FAVORITE(props));
          }}
          className={
            sameItemFromFav
              ? " px-1 text-lg py-1 rounded-md border-2 text-white bg-[#d02a3a] border-[#d02a3a] "
              : " px-1 text-lg py-1 rounded-md border-2 text-[#d02a3a] bg-white border-[#d02a3a] "
          }
        >
          <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
};

export default Food;
