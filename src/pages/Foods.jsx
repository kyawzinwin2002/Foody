import React, { useEffect } from "react";
import { useGetFoodQuery } from "../redux/api/foodApi";
import Food from "../components/Food";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { ADD_FOOD } from "../redux/services/foodSlice";

const Foods = () => {
  const goToRoute = JSON.parse(Cookies.get("goToRoute"));
  const { data } = useGetFoodQuery(goToRoute);
  // console.log(data?.meals);
 
  return (
    <div className=" flex flex-col gap-5 h-screen">
      <Navbar />
      <div className="  mt-5 w-screen flex flex-wrap gap-11 justify-center ">
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
