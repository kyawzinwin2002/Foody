import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useGetSingleFoodQuery } from "../redux/api/foodApi";
import { IoLogoYoutube } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE } from "../redux/services/foodSlice";
import Cookies from "js-cookie";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetSingleFoodQuery(id);
  const item = data?.meals[0];

  // console.log(item);
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
    <div>
      <Navbar />
      <div className=" p-2  w-screen mt-3 flex flex-col  gap-5 justify-center">
        <div className=" text-center">
          <h1 className=" text-4xl  text-[#ffae00] font-bold">
            How To Make {item?.strMeal}
          </h1>
        </div>

        <div className=" flex mt-7 justify-center gap-10 ">
          <img
            src={item?.strMealThumb}
            className="  w-[500px] rounded-2xl h-[500px]"
            alt=""
          />
          <div className=" flex gap-24">
            <div className=" flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <h1 className=" flex gap-3 items-center  text-xl font-bold text-gray-800 ">
                  Category <BiRightArrow />{" "}
                  <span className=" text-[#d02a3a]">{item?.strCategory}</span>
                </h1>
              </div>
              <h1 className=" flex gap-3 items-center  text-xl font-bold text-gray-800 ">
                Country <BiRightArrow />{" "}
                <span className=" text-[#d02a3a]">{item?.strArea}</span>
              </h1>
              <h1 className=" flex gap-3 items-center  text-xl font-bold text-gray-800 ">
                Watch Here <BiRightArrow />{" "}
                <a href={item?.strYoutube} className=" text-3xl text-red-500">
                  <IoLogoYoutube />
                </a>
              </h1>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className="  text-2xl font-bold text-teal-800">
                Ingredients
              </h1>
              <ul>
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
        <div className=" flex flex-col gap-5 px-10">
          <div className=" text-center">
            <h1 className=" text-3xl font-bold text-gray-600">Instructions</h1>
          </div>
          <p className=" text-lg leading-8">{item?.strInstructions}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
