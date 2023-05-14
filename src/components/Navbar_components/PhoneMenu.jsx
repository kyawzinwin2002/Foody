import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_DARKMODE } from "../../redux/services/foodSlice";
import { FaSun } from "react-icons/fa";
import { BsFillHeartFill, BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Swal from "sweetalert2";
import { useLogoutMutation } from "../../redux/api/authApi";
import { REMOVE_USER } from "../../redux/services/authSlice";

const PhoneMenu = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.authSlice.user);
  const token = useSelector((state) => state.authSlice.token);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(REMOVE_USER());
    if (data?.success) {
      nav("/");
    }
  };

  const menuHandler = () => {
    if (token) {
      nav("/menu");
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

  const favoriteHandler = () => {
    if (token) {
      nav("/favorite");
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
            <FaSun size="2rem" stroke={2.5} className=" text-yellow-500" />
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
          <li>
            <button onClick={menuHandler} className=" flex gap-1 items-center">
              <GiForkKnifeSpoon
                className={darkMode ? "text-red-500" : "text-[#d02a3a]"}
              />
              <h1 className={darkMode ? "text-white" : "text-black"}>Menu</h1>
            </button>
          </li>

          <li>
            <button
              onClick={favoriteHandler}
              className=" flex gap-1 items-center"
            >
              <BsFillHeartFill
                className={darkMode ? "text-red-500" : "text-[#d02a3a]"}
              />
              <h1 className={darkMode ? "text-white" : "text-black"}>
                Favorite
              </h1>
            </button>
          </li>

          {token ? (
            <li className=" flex flex-col  gap-5 relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className=" px-5 py-1 bg-teal-500 text-white rounded-md"
              >
                Profile
              </button>
              {isProfileOpen && (
                <div
                  className={
                    darkMode
                      ? " flex gap-3 flex-col right-[1px] rounded-md top-10 absolute z-50 bg-gray-800 border-red-500 border-2 px-3 py-3"
                      : " flex gap-3 flex-col right-[1px] rounded-md top-10 absolute z-50 bg-white border-2 px-3 py-3"
                  }
                >
                  <div className=" flex gap-5 items-center ">
                    <img
                      className=" w-10"
                      src="https://media.istockphoto.com/id/1337144146/sv/vektor/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=GXVOqN9-6nUrgmK2thaQuTtf1bpxUMCEUvNlun-uX7g="
                      alt=""
                    />
                    <h1>{user?.name}</h1>
                  </div>
                  <h1 className={darkMode && "text-yellow-500"}>
                    {user?.email}
                  </h1>
                  <button
                    onClick={logoutHandler}
                    className=" bg-red-500 text-white py-1 rounded-md"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </li>
          ) : (
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
          )}
        </ul>
      )}
    </div>
  );
};

export default PhoneMenu;
