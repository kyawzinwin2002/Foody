import React from "react";
import "../CSS/HomePage.css"

const HomePage = () => {
  return (
    <div  className="flex flex-col gap-5 w-screen bg-img h-[400px]  justify-center items-center">
      <form className="relative   flex items-center">
        <input type="text" placeholder="   Search Food" className="w-[470px] border-2 h-[37px] border-gray-200 rounded-2xl" />
        <button className=" hover:bg-[#d02a3a] absolute right-0 z-30 rounded-2xl bottom-[0.6px] text-sm bg-black text-white px-5  py-2">Search</button>
      </form>
      <h1 className=" text-3xl font-bold text-white">Make Your Happiness With Food!</h1>
    </div>
  );
};

export default HomePage;
