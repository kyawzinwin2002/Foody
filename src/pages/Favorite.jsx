import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { REMOVE_FAVORITE } from "../redux/services/foodSlice";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar'
import { useState } from "react";



const Favorite = () => {
  const favorite = useSelector(state => state.foodSlice.favorite)

  const dispatch = useDispatch();
  // console.log(favorite);

  if(favorite.length){

    return (
      <div className=" flex flex-col">
        <Navbar/>
        <div className=" flex w-screen flex-wrap h-screen gap-10">
          {favorite?.map((item) => {
            return (
              <div
                key={item?.idMeal}
                className=" p-4 shadow-md flex flex-col gap-3 relative"
              >
                <div className=""></div>
                <img src={item?.strMealThumb} className=" w-[150px]" alt="" />
                <div className="flex justify-end gap-2">
                  <Link to={`/detail/${item?.idMeal}`}>
                    <button className=" px-2 text-lg py-2 rounded-md text-white bg-[#d02a3a]">
                      <AiOutlineFileSearch />
                    </button>
                  </Link>

                  <button
                    onClick={() => {
                      dispatch(REMOVE_FAVORITE(item));
                    }}
                    className=" px-1 text-lg py-1 rounded-md border-2 text-[#d02a3a] bg-white border-[#d02a3a] "
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className=" flex flex-col ">
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className=" text-3xl font-bold text-[#d02a3a]">
            You have not added your favorites yet!
          </h1>
          <div className=" flex justify-center">
            <Link to={"/menu"}>
              <button className=" px-6 py-1 rounded-md text-white bg-[#d02a3a] text-2xl">
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

export default Favorite