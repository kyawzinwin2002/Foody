import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../CSS/WhyCard.css"

const WhyCard = (props) => {
  const { id, name, photo, p } = props;
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const [seeMore, setSeeMoreOne] = useState(false);

  return (
    <div
      className={
        darkMode
          ? " flex w-[320px] whyCard  md:w-[380px]  px-5 py-5 bg-gray-700   shadow-yellow-500 hover:border-red-500 rounded-md flex-col gap-3 items-center"
          : " flex w-[320px] whyCard  md:w-[380px]  px-5 py-5 border  hover:shadow-2xl shadow-gray-700 rounded-md flex-col gap-3 items-center"
      }
    >
      <h1
        className={
          darkMode
            ? " text-3xl font-semibold text-yellow-500"
            : " text-3xl font-semibold text-gray-600"
        }
      >
        {name}
      </h1>
      <img src={photo} className=" w-[250px] h-[250px] rounded-md" alt="" />
      <p className={darkMode && "text-white"}>
        {seeMore ? p : p.substring(0, 100)}...
      </p>
      <div className=" w-[100%] flex items-center justify-start">
        <button
          className={darkMode ? " text-red-500" : " text-teal-800"}
          onClick={() => setSeeMoreOne(!seeMore)}
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default WhyCard;
