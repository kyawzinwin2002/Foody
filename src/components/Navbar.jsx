import React, { useState } from "react";
import { SiIfood } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillHeartFill, BsMoonStarsFill } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_DARKMODE } from "../redux/services/foodSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={
        darkMode
          ? "sticky top-0 bg-gray-800 text-white z-50 py-5 px-5 flex justify-around gap-5 items-center"
          : "sticky top-0 bg-white gap-5 z-50 py-5 px-5 flex justify-around items-center"
      }
    >
      <Link to={"/"}>
        <div className=" flex gap-2 items-center">
          <SiIfood
            className={
              darkMode
                ? " text-4xl text-red-500 font-bold"
                : " text-4xl text-[#d02a3a] font-bold"
            }
          />
          <h1
            className={
              darkMode
                ? " text-4xl text-red-500 font-bold"
                : " text-4xl text-[#d02a3a] font-bold"
            }
          >
            Foody
          </h1>
        </div>
      </Link>
      <ul className="  gap-5 items-center hidden md:flex">
        <Link to={"/menu"}>
          <li>
            <div
              className={
                darkMode
                  ? " text-white text-lg flex gap-1 items-center"
                  : " text-[#d02a3a] text-lg flex gap-1 items-center"
              }
            >
              <GiForkKnifeSpoon />
              <h1
                className={
                  darkMode ? " text-xl text-yellow-500" : " text-xl text-black"
                }
              >
                Menu
              </h1>
            </div>
          </li>
        </Link>
        <Link to={"/favorite"}>
          <li>
            <div
              className={
                darkMode
                  ? " text-white text-lg flex gap-1 items-center"
                  : " text-[#d02a3a] text-lg flex gap-1 items-center"
              }
            >
              <BsFillHeartFill />
              <h1
                className={
                  darkMode ? " text-xl text-yellow-500" : " text-xl text-black"
                }
              >
                Favorite
              </h1>
            </div>
          </li>
        </Link>
        <li>
          <button
            onClick={() => dispatch(CHANGE_DARKMODE())}
            className={
              darkMode
                ? " border-gray-500 text-sm rounded-md border-2  text-white"
                : " px-2 py-2 text-sm rounded-md border-2  text-white"
            }
          >
            {darkMode ? (
              <CiSun size="2rem" stroke={2.5} className=" text-yellow-500" />
            ) : (
              <BsMoonStarsFill
                size="1rem"
                stroke={2.5}
                className=" text-blue-500"
              />
            )}
          </button>
        </li>
        <Link to={"/register"}>
          <li className="">
            <button
              className={
                darkMode
                  ? "  hover:bg-red-500 px-[13px] py-1 md:px-8 md:py-3 text-base  rounded-2xl shadow-sm bg-black text-white"
                  : "  hover:bg-[#d02a3a] px-[13px] py-1 md:px-8 md:py-3 text-base  rounded-2xl shadow-sm bg-black text-white"
              }
            >
              Login/SignUp
            </button>
          </li>
        </Link>
      </ul>

      <div className=" block  md:hidden">
        <div className=" flex gap-3 items-center">
          <button
            onClick={() => dispatch(CHANGE_DARKMODE())}
            className={
              darkMode
                ? " border-gray-500 text-sm rounded-md border-2  text-white"
                : " px-2 py-2 text-sm rounded-md border-2  text-white"
            }
          >
            {darkMode ? (
              <CiSun size="2rem" stroke={2.5} className=" text-yellow-500" />
            ) : (
              <BsMoonStarsFill
                size="1rem"
                stroke={2.5}
                className=" text-blue-500"
              />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              darkMode
                ? "  block md:hidden border-2 border-red-500 shadow-md rounded-md px-2 py-2 "
                : "  block md:hidden border-2 shadow-md rounded-md px-2 py-2 "
            }
          >
            <AiOutlineMenu className=" text-lg" />
          </button>
        </div>
        {isOpen && (
          <ul
            className={
              darkMode
                ? " mt-5 right-5  absolute z-50 bg-gray-800 border-red-500 text-red-500  border-2 w-40 rounded-md py-4   gap-5 items-center flex flex-col md:hidden"
                : " mt-5 right-5  absolute z-50 bg-white text-black  border-2 w-40 rounded-md py-4   gap-5 items-center flex flex-col md:hidden"
            }
          >
            <Link to={"/menu"}>
              <li>
                <div className=" flex gap-1 items-center">
                  <GiForkKnifeSpoon
                    className={darkMode ? "text-red-500" : "text-[#d02a3a]"}
                  />
                  <h1 className={darkMode ? "text-white" : "text-black"}>
                    Menu
                  </h1>
                </div>
              </li>
            </Link>
            <Link to={"/favorite"}>
              <li>
                <div className=" flex gap-1 items-center">
                  <BsFillHeartFill
                    className={darkMode ? "text-red-500" : "text-[#d02a3a]"}
                  />
                  <h1 className={darkMode ? "text-white" : "text-black"}>
                    Favorite
                  </h1>
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
