import React from "react";
import { useSelector } from "react-redux";
import { useGetSingleFoodQuery } from "../../redux/api/foodApi";

const Instructions = (props) => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const { id } = props;
  const { data } = useGetSingleFoodQuery(id);
  const item = data?.meals[0];
  return (
    <div id="instructions" className=" py-20  flex flex-col gap-5 px-10">
      <div className=" text-center">
        <h1
          className={
            darkMode
              ? " text-3xl font-bold text-yellow-500"
              : " text-3xl font-bold text-gray-600"
          }
        >
          Instructions
        </h1>
      </div>
      <p
        className={
          darkMode ? " text-lg leading-8 text-white" : " text-lg leading-8"
        }
      >
        {item?.strInstructions}
      </p>
    </div>
  );
};

export default Instructions;
