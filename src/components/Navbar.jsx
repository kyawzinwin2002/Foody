import React, { useState } from "react";
import { SiIfood } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-50 py-5 px-5 flex justify-around items-center">
      <Link to={"/"}>
        <div className=" flex gap-2 items-center">
          <SiIfood className=" text-4xl text-[#d02a3a] " />
          <h1 className=" text-4xl text-[#d02a3a] font-bold">Foody</h1>
        </div>
      </Link>
      <ul className="  gap-5 items-center hidden md:flex">
        <Link to={"/menu"}>
          <li>
            <div className=" text-[#d02a3a] text-lg flex gap-1 items-center">
              <GiForkKnifeSpoon />
              <h1 className=" text-xl text-black">Menu</h1>
            </div>
          </li>
        </Link>
        <Link to={"/favorite"}>
          <li>
            <div className=" text-[#d02a3a] text-lg flex gap-1 items-center">
              <BsFillHeartFill />
              <h1 className=" text-xl text-black">Favorite</h1>
            </div>
          </li>
        </Link>
        <Link to={"/register"}>
          <li className="">
            <button
              className="  hover:bg-[#d02a3a] px-[13px] py-1 md:px-8 md:py-3 text-base  rounded-2xl shadow-sm bg-black text-white 
                "
            >
              Login/SignUp
            </button>
          </li>
        </Link>
      </ul>

      <div className=" block  md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="  block md:hidden border-2 shadow-md px-3 py-3 "
        >
          <AiOutlineMenu className=" text-lg" />
        </button>
        {isOpen && (
          <ul className=" mt-5  transition-all absolute z-50 bg-white text-black  border-2 right-5 w-60 py-4   gap-5 items-center flex flex-col md:hidden">
            <Link to={"/menu"}>
              <li>
                <div className=" flex gap-1 items-center">
                  <GiForkKnifeSpoon />
                  <h1>Menu</h1>
                </div>
              </li>
            </Link>
            <Link to={"/favorite"}>
              <li>
                <div className=" flex gap-1 items-center">
                  <BsFillHeartFill />
                  <h1>Favorite</h1>
                </div>
              </li>
            </Link>
            <Link to={"/register"}>
              <li className="">
                <button
                  className="  hover:bg-[#d02a3a] px-[13px] py-1 md:px-8 md:py-3  rounded-2xl shadow-sm bg-black text-white text-sm
              "
                >
                  Login/SignUp
                </button>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
