import React, { useState } from "react";
import classPhoto from "../img/class.webp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const GoToMenu = () => {
  const nav = useNavigate();
  const token = useSelector((state) => state.authSlice.token);
  const darkMode = useSelector(state => state.foodSlice.darkMode)
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
  return (
    <div
      className={
        darkMode
          ? " px-8 py-14 flex flex-col gap-7  lg:flex-row items-start justify-between  bg-gray-800 "
          : " px-8 py-14 flex flex-col gap-7  lg:flex-row items-start justify-between   "
      }
    >
      <img src={classPhoto} className=" w-[100%] lg:w-[600px]  rounded-lg" alt="" />
      <div className=" flex flex-col gap-3">
        <h1
          className={
            darkMode
              ? " text-yellow-500 font-bold text-3xl"
              : " text-gray-600 font-bold text-3xl"
          }
        >
          Let's Cook with Us
        </h1>
        <p
          className={
            darkMode
              ? " text-lg text-white leading-7"
              : " text-lg leading-7"
          }
        >
          Ready to unleash your inner chef? Let's cook with us and embark on a
          gastronomic adventure filled with mouthwatering recipes, expert tips,
          and kitchen inspiration.Discover the joy of cooking with us! Join our
          food community and unlock endless culinary possibilities that will
          tantalize your taste buds.Calling all food enthusiasts! Get ready to
          elevate your cooking skills with our step-by-step recipes and
          interactive cooking classes. Let's cook together and create
          unforgettable culinary masterpieces.
        </p>
        <div className="">
          <button onClick={menuHandler} className=" px-8 rounded-md py-2 text-lg text-white bg-[#d02a3a]">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToMenu;
