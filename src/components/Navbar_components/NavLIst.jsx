import React, { useState } from "react";
import { BsFillHeartFill, BsMoonStarsFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CHANGE_DARKMODE } from "../../redux/services/foodSlice";
import { FaSun } from "react-icons/fa";
import { useLogoutMutation } from "../../redux/api/authApi";
import { REMOVE_USER } from "../../redux/services/authSlice";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const NavLIst = () => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const dispatch = useDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const user = useSelector((state) => state.authSlice.user);
  const token = useSelector((state) => state.authSlice.token);

  // const user = JSON.parse(Cookies.get("user"));
  // const token = Cookies.get("token")

  const nav = useNavigate();
  const [logout] = useLogoutMutation();
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
          nav("/register")
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
    <ul className="  gap-5 items-center hidden md:flex">
      <li>
        <button
          onClick={menuHandler}
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
        </button>
      </li>

      <li>
        <button
          onClick={favoriteHandler}
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
        </button>
      </li>

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
            <FaSun size="2rem" className=" text-yellow-500 " />
          ) : (
            <BsMoonStarsFill size="1rem" className=" text-blue-500" />
          )}
        </button>
      </li>

      {token ? (
        <li className=" flex flex-col gap-5 relative">
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
                  ? " flex gap-3 flex-col rounded-md top-10 absolute z-50 bg-gray-800 border-red-500 border-2 px-3 py-3"
                  : " flex gap-3 flex-col rounded-md top-10 absolute z-50 bg-white border-2 px-3 py-3"
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
              <h1 className={darkMode && "text-yellow-500"}>{user?.email}</h1>
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
          <li className=" ">
            <button className=" px-6 py-2 bg-black text-white text-base rounded-2xl hover:bg-[#d02a3a]">
              Login/SignUp
            </button>
          </li>
        </Link>
      )}
    </ul>
  );
};

export default NavLIst;
