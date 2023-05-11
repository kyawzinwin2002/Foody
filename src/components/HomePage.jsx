import React, { useState } from "react";
import "../CSS/HomePage.css"
import { useDispatch } from "react-redux";
import { useSearchFoodQuery } from "../redux/api/foodApi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [search,setSearch] = useState("")
  const {data} = useSearchFoodQuery(search)
  const nav = useNavigate()
  // console.log(data?.meals);
  const searchHandler = async (e) => {
    e.preventDefault()
   if(search){
    nav(`/search/${search}`,{state:{item:data?.meals}})
   }else{
    nav("/")
   }

  
  }
  return (
    <div  className="flex text-center flex-col gap-5 w-screen bg-img h-[600px]  justify-center items-center">
      <form onSubmit={searchHandler}  className="relative   flex items-center">
        <input value={search} onChange={e => {setSearch(e.target.value)}} type="text" placeholder="   Search Food" className="w-[280px] md:w-[470px] border-2 h-[25px] md:h-[37px] border-gray-200 rounded-2xl" />
        <button type="submit" className=" hover:bg-[#d02a3a] absolute right-0 z-30 rounded-2xl bottom-[0.6px] text-sm bg-black text-white px-4 py-[2.2px]  md:px-5  md:py-2">Search</button>
      </form>
      <h1 className=" text-2xl md:text-4xl font-bold text-white">Make Your Happiness With Making Food!</h1>
    </div>
  );
};

export default HomePage;
