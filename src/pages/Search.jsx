import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Home from "./Home";
import { BsCartPlus } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineFileSearch, AiOutlineHeart } from "react-icons/ai";
import { ADD_FAVORITE } from "../redux/services/foodSlice";
import SearchDetail from "../components/SearchDetail";

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
            <SearchDetail key={i.idMeal} {...i}/>
          );
        })}
      </div>
      <Footer/>
      </div>
      
    );
      }

export default Search;
