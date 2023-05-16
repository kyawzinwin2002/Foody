import React, { useState } from "react";
import "../CSS/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchFoodQuery } from "../redux/api/foodApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TextInput } from "@mantine/core";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data } = useSearchFoodQuery(search);
  const nav = useNavigate();
  const token = useSelector((state) => state.authSlice.token);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const searchHandler = async (e) => {
    e.preventDefault();
    if (token) {
      if (search) {
        nav(`/search/${search}`, { state: { item: data?.meals } });
      } else {
        nav("/");
      }
    } else {
      Swal.fire({
        title: "You don't have an account.",
        text: "Create an account to see our menu.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Register Here",
      }).then((result) => {
        if (result.isConfirmed) {
          nav("/register");
        }
      });
    }
  };
  return (
    <div className="flex text-center flex-col gap-5 w-screen bg-img h-[600px]  justify-center items-center">
      <form onSubmit={searchHandler} className="relative   flex items-center">
        {/* <TextInput
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          
          
          className= " w-[350px] md:w-[550px] "
          
          placeholderTextColor="gray"
        /> */}
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search Food"
          className="w-[280px] focus-visible:outline-none hover:border-blue-500 md:w-[470px] border-2 h-[25px] md:h-[37px] border-gray-200 rounded-2xl p-4"
        />

        <button
          type="submit"
          className=" homeInput hover:bg-[#d02a3a] absolute  h-[100%] right-0 z-30    text-sm bg-black text-white px-5  md:px-7 rounded-2xl  md:py-2"
        >
          Search
        </button>
      </form>
      <h1 className=" text-2xl md:text-4xl font-bold text-white">
        Make Your Happiness With Making Food!
      </h1>
    </div>
  );
};

export default HomePage;
