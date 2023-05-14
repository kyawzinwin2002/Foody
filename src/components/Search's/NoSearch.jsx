import React from 'react'
import Navbar from '../Navbar_components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useSelector } from 'react-redux';

const NoSearch = () => {
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

export default NoSearch