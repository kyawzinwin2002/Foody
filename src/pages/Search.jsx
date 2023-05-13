import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Home from "./Home";
import { BsCartPlus } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import SearchDetail from "../components/SearchDetail";

const Search = () => {
  const { state } = useLocation();

  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  if (state?.item === null) {
    return (
      <div
        className={
          darkMode
            ? " flex flex-col  h-screen bg-gray-800"
            : " flex flex-col  h-screen"
        }
      >
        <Navbar />
        <div className=" flex flex-col gap-5 justify-center items-center w-screen h-screen">
          <h1
            className={
              darkMode
                ? " text-lg md:text-3xl font-semibold text-yellow-500"
                : " text-lg md:text-3xl font-semibold text-gray-600"
            }
          >
            Oops!We haven't that food.TT
          </h1>
          <Link to={"/menu"}>
            <button className=" px-6 py-1 rounded-md text-white bg-[#d02a3a] text-base md:text-2xl">
              Back To Menu
            </button>
          </Link>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? " flex flex-col  h-screen bg-gray-800"
          : " flex flex-col  h-screen"
      }
    >
      <Navbar />
      <div className=" text-center">
        <h1
          className={
            darkMode
              ? " text-2xl font-semibold text-yellow-500"
              : " text-2xl font-semibold text-pink-500"
          }
        >
          Excellent Choice,Honey❤️
        </h1>
      </div>
      <div
        className={
          darkMode
            ? "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center bg-gray-800"
            : "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center "
        }
      >
        {state?.item?.map((i) => {
          return <SearchDetail key={i.idMeal} {...i} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
