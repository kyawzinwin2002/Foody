import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsCartPlus } from "react-icons/bs";
import "../CSS/Item.css";
import chicken from "../img/chicken.png"
import { useGetFoodQuery } from '../redux/api/foodApi';

const Chicken = () => {
  const { data } = useGetFoodQuery("Chicken");

  return (
    <div>
      <div className=" flex flex-col gap-5">
      <Navbar />
      <div className=" flex justify-between px-7 items-center">
      <div  className=" flex gap-4 px-6 py-1 rounded-2xl items-center ">
          <img src={chicken} className=' w-10 h-10' alt="" />
          <h1 className=' text-lg font-bold text-[#d02a3a]'>Chicken</h1>
        </div>
      <h1 className=' text-2xl font-bold text-[#d02a3a]'>Choose your love,Darling❤️</h1>
      </div>
      <div className=" flex flex-wrap gap-10 mt-5 justify-center p-2">
        {data?.meals?.map((meal) => {
          return (
            <div
              key={meal?.idMeal}
              className=" shadow-xl  item relative flex flex-col gap-3"
            >
              <img
                src={meal?.strMealThumb}
                className=" itemImg rounded-md w-[150px]"
                alt=""
              />
              <a
                href={`/detail/${meal?.idMeal}`}
                className=" flex justify-center items-center align-middle bottom-11 left-11 showText  absolute w-14 h-14 rounded-[100%] bg-[#d02a3a] text-white"
              >
                <BsCartPlus className=" text-2xl" />
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Chicken