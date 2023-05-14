import React, { useState } from "react";
import { useSelector } from "react-redux";
import PhoneMenu from "./PhoneMenu";
import Logo from "./Logo";
import NavLIst from "./NavLIst";

const Navbar = () => {
  
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  
  

  return (
    <div
      className={
        darkMode
          ? "sticky top-0 bg-gray-800 text-white z-50 py-5 px-5 flex justify-around gap-5 items-center"
          : "sticky top-0 bg-white gap-5 z-50 py-5 px-5 flex justify-around items-center"
      }
    >
      <Logo />
      <NavLIst />      
      <PhoneMenu />
    </div>
  );
};

export default Navbar;
