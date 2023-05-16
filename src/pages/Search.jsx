import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import SearchDetail from "../components/Search's/SearchDetail";
import Navbar from "../components/Navbar_components/Navbar";
import NoSearch from "../components/Search's/NoSearch";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Search = () => {
  const { state } = useLocation();

  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  if (state?.item === null) {
    return <NoSearch />;
  }

  return (
    <div
      className={
        darkMode
          ? " flex flex-col  h-screen bg-gray-900"
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
            ? "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center bg-gray-900"
            : "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center "
        }
      >
        {state?.item?.map((i) => {
          return <SearchDetail key={i.idMeal} {...i} />;
        })}
      </div>
      <div className=" mt-auto relative">
        <a
          href="#foods"
          className={
            darkMode
              ? " btn animate-bounce  absolute text-4xl text-white  right-7 top-[-70px]"
              : " btn animate-bounce  absolute text-4xl text-[#d02a3a] right-7 top-[-70px]"
          }
        >
          <BsFillArrowUpSquareFill />
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
