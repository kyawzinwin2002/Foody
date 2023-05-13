import React from "react";
import { SiIfood } from "react-icons/si";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className=" mt-auto  bg-black py-12  flex flex-col gap-8">
      <div className="  flex flex-col gap-4 md:flex-row  justify-around items-center">
        <div className="  flex flex-col items-center gap-3">
          <h1 className=" text-5xl text-[#d02a3a] ">
            <SiIfood />
          </h1>
          <h1 className=" text-3xl text-white font-semibold ">Foody</h1>
        </div>
        <div className=" flex items-center gap-9">
          <ul className=" text-white text-sm flex flex-col gap-2">
            <li>
              <a href="#">About Online Food</a>
            </li>
            <li>
              <a href="#">Read Our Blog</a>
            </li>

            <li>
              <a href="#">About Online Food</a>
            </li>
          </ul>
          <ul className=" text-white text-sm flex flex-col gap-2">
            <li>
              <a href="#">Get Help</a>
            </li>
            <li>
              <a href="#">Read FAQ</a>
            </li>

            <li>
              <a href="#">Restaurants near me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col gap-3 items-center md:flex-row md:justify-around md:items-center ">
        <div className="text-center">
          <h1 className="  text-xs text-white">
            Copyright © 2023 Foody. Proudly recreated by Kyaw.
            <br />
            Inspired from Technon Group (Group 3) ❤️
          </h1>
        </div>
        <ul className=" text-white text-sm flex items-center gap-3">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
