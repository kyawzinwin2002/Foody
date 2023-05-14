import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar_components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const NoFavorite = () => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  return (
    <div
      className={
        darkMode
          ? " flex flex-col  h-screen bg-gray-800"
          : " flex flex-col  h-screen"
      }
    >
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1
            className={
              darkMode
                ? " text-xl md:text-3xl font-bold text-yellow-500"
                : " text-xl md:text-3xl font-bold text-[#d02a3a]"
            }
          >
            You have not added your favorites yet!
          </h1>
          <div className=" flex justify-center">
            <Link to={"/menu"}>
              <button className=" px-6 py-1 rounded-md text-white bg-[#d02a3a] text-lg md:text-2xl">
                Back To Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoFavorite;
