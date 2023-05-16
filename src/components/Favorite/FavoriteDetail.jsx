import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE } from "../../redux/services/foodSlice";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";

const FavoriteDetail = (props) => {
  const { idMeal, strMealThumb } = props;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  return (
    <div
      key={idMeal}
      className={
        darkMode
          ? " p-4 shadow-lg rounded-2xl  flex flex-col gap-3 relative bg-gray-700 "
          : " p-4 shadow-md flex rounded-2xl flex-col gap-3 border-2  relative"
      }
    >
      <img src={strMealThumb} className=" w-[150px]" alt="" />
      <div className="flex justify-end gap-2">
        <Link to={`/detail/${idMeal}`}>
          <button className=" px-2 text-lg py-2 rounded-md text-white bg-[#d02a3a]">
            <AiOutlineFileSearch />
          </button>
        </Link>

        <button
          onClick={() => {
            dispatch(REMOVE_FAVORITE(props));
          }}
          className=" px-1 text-lg py-1 rounded-md border-2 text-[#d02a3a] bg-white border-[#d02a3a] "
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default FavoriteDetail;
