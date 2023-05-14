import React from "react";
import { useGetSingleFoodQuery } from "../../redux/api/foodApi";
import { useSelector } from "react-redux";
import { BiRightArrow } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";

const DetailBody = (props) => {
  const { id } = props;
  const { data } = useGetSingleFoodQuery(id);
  const item = data?.meals[0];
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const ingredients = [
    { id: 1, i: item?.strIngredient1 },
    { id: 2, i: item?.strIngredient2 },
    { id: 3, i: item?.strIngredient3 },
    { id: 4, i: item?.strIngredient4 },
    { id: 5, i: item?.strIngredient5 },
    { id: 6, i: item?.strIngredient6 },
    { id: 7, i: item?.strIngredient7 },
    { id: 8, i: item?.strIngredient8 },
    { id: 9, i: item?.strIngredient9 },
    { id: 10, i: item?.strIngredient10 },
    { id: 11, i: item?.strIngredient11 },
    { id: 12, i: item?.strIngredient12 },
    { id: 13, i: item?.strIngredient13 },
    { id: 14, i: item?.strIngredient14 },
    { id: 15, i: item?.strIngredient15 },
  ];
  return (
    <div className=" flex flex-col md:flex-row md:justify-center md:gap-32 md:items-center gap-10 ">
      <img
        src={item?.strMealThumb}
        className=" w-[280px] md:w-[450px] rounded-md mx-auto md:mx-0 mt-5 "
        alt=""
      />
      <div className=" flex flex-col md:items-start items-center  md:flex-row gap-24">
        <div className=" flex flex-col  gap-5">
          <h1
            className={
              darkMode
                ? " flex gap-3 items-center  text-xl font-bold text-yellow-500 "
                : " flex gap-3 items-center  text-xl font-bold text-teal-800 "
            }
          >
            Category <BiRightArrow />{" "}
            <span className=" text-[#d02a3a]">{item?.strCategory}</span>
          </h1>
          <h1
            className={
              darkMode
                ? " flex gap-3 items-center  text-xl font-bold text-yellow-500 "
                : " flex gap-3 items-center  text-xl font-bold text-teal-800 "
            }
          >
            Country <BiRightArrow />{" "}
            <span className=" text-[#d02a3a]">{item?.strArea}</span>
          </h1>
          <h1
            className={
              darkMode
                ? " flex gap-3 items-center  text-xl font-bold text-yellow-500 "
                : " flex gap-3 items-center  text-xl font-bold text-teal-800 "
            }
          >
            Watch Here <BiRightArrow />{" "}
            <a href={item?.strYoutube} className=" text-3xl text-red-500">
              <IoLogoYoutube />
            </a>
          </h1>
          <div className="  animate__animated animate__bounce">
            <a
              href="#instructions"
              className=" text-lg   px-6 py-2 rounded-md bg-[#d02a3a] text-white"
            >
              Read Instructions
            </a>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h1
            className={
              darkMode
                ? "  text-2xl font-bold text-yellow-500"
                : "  text-2xl font-bold text-teal-800"
            }
          >
            Ingredients
          </h1>
          <ul className={darkMode ? "text-white" : ""}>
            {ingredients?.map((i) => {
              return (
                <li className=" font-bold" key={i.id}>
                  {i.i}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailBody;
