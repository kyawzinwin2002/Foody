import React from "react";
import { useGetFoodQuery } from "../redux/api/foodApi";
import Food from "../components/Food";

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
          ? " flex flex-col  h-screen bg-gray-800"
          : " flex flex-col  h-screen"
      }
    >
      <Navbar />
      <div
        className={
          darkMode
            ? "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center bg-gray-800"
            : "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center "
        }
      >
        {data?.meals?.map((item) => {
          return <Food key={item?.idMeal} {...item} />;
        })}
      </div>
      <div className=" mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Foods;
