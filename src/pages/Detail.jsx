import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleFoodQuery } from "../redux/api/foodApi";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar_components/Navbar";
import DetailBody from "../components/Detail's/DetailBody";
import Instructions from "../components/Detail's/Instructions";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetSingleFoodQuery(id);
  const item = data?.meals[0];
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  return (
    <div className=" flex flex-col">
      <Navbar />
      <div
        className={
          darkMode
            ? " p-2  w-screen pt-3 flex flex-col bg-gray-800  gap-5  justify-center"
            : " p-2  w-screen pt-3  flex flex-col  gap-5 justify-center"
        }
      >
        <div className=" text-center">
          <h1 className=" text-xl md:text-4xl  text-[#ffae00] font-bold">
            How To Make {item?.strMeal}
          </h1>
        </div>

        <DetailBody id={id} />

        <Instructions id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
