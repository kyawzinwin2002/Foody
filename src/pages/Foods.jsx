import React from "react";
import { useGetFoodQuery } from "../redux/api/foodApi";
import Food from "../components/Food";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar_components/Navbar";

const Foods = () => {
  const goToRoute = JSON.parse(Cookies.get("goToRoute"));
  const { data } = useGetFoodQuery(goToRoute);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  return (
    <div
      className={
        darkMode
          ? " flex flex-col  h-screen bg-gray-900"
          : " flex flex-col  h-screen"
      }
    >
      <Navbar />
      <div
        id="foods"
        className={
          darkMode
            ? "  mt-5 w-screen flex flex-wrap gap-11 py-9 justify-center bg-gray-900"
            : "  mt-5 w-screen flex flex-wrap gap-11 py-9 justify-center "
        }
      >
        {data?.meals?.map((item) => {
          return <Food key={item?.idMeal} {...item} />;
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

export default Foods;
