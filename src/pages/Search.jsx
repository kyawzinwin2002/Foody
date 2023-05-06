import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import Home from "./Home";
import { BsCartPlus } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Search = () => {
  const { state } = useLocation();
  // const nav = useNavigate()
  console.log(state?.item);

  if(state?.item === null){
    return(
      <div className="flex h-screen  flex-col gap-5">
        <Navbar/>
        <div className=" text-center">
          <h1 className=" text-2xl font-semibold text-gray-600">Oops!We haven't that food.TT</h1>
        </div>
        <div className="mt-auto">
        <Footer/>
        </div>
      </div>
    )
  }
  
    return (
      <div className=" flex flex-col gap-5">
        <Navbar/>
        <div className=" text-center">
          <h1 className=" text-2xl font-semibold text-pink-500">Excellent Choice,Honey❤️</h1>
        </div>
        <div className=" flex flex-wrap gap-10 mt-5 justify-center p-2">
        {state?.item?.map((i) => {
          return (
            <div
              key={i?.idMeal}
              className=" shadow-xl  item relative flex flex-col gap-3"
            >
              <img
                src={i?.strMealThumb}
                className=" itemImg rounded-md w-[150px]"
                alt=""
              />
              <a
                href={`/detail/${i?.idMeal}`}
                className=" flex justify-center items-center align-middle bottom-11 left-11 showText  absolute w-14 h-14 rounded-[100%] bg-[#d02a3a] text-white"
              >
                <BsCartPlus className=" text-2xl" />
              </a>
            </div>
          );
        })}
      </div>
      <Footer/>
      </div>
      
    );
      }

export default Search;
