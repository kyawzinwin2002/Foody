import React from "react";
import {
  AiFillStar,
  AiOutlineFileSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_FAVORITE } from "../redux/services/foodSlice";

const SearchDetail = (props) => {
  const { idMeal, strMealThumb } = props;
  const favorite = useSelector((state) => state.foodSlice.favorite);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const sameItemFromFav = favorite?.find((item) => item.idMeal === idMeal);

  const dispatch = useDispatch();
  return (
    <div
      className={
        darkMode
          ? " p-4 shadow-lg rounded-2xl  flex flex-col gap-3 relative border-yellow-700 shadow-red-500  border-2"
          : " p-4 shadow-md rounded-2xl flex flex-col gap-3 border-2  relative"
      }
    >
      {sameItemFromFav ? (
        <div className="favTag">
          <AiFillStar className="absolute text-xl bottom-[1px] text-white bg-[#d02a3a]" />
        </div>
      ) : null}
      <img src={strMealThumb} className=" w-[150px]" alt="" />
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

export default SearchDetail;
