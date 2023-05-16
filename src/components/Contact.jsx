import { TextInput } from '@mantine/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { GiRotaryPhone } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { ImAddressBook } from "react-icons/im";

const Contact = () => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

    
  return (
    <div
      className={
        darkMode
          ? " py-10 flex items-center bg-gray-900  flex-col gap-9 "
          : " py-10 flex items-center  flex-col gap-9 "
      }
    >
      <h1 className=" text-4xl  font-bold text-red-500">Contact Us</h1>
      <div className=" flex flex-col gap-10 lg:flex-row lg:gap-80">
        {/* {Contact Info} */}
        <div className="flex flex-col  gap-5">
          <h1
            className={
              darkMode
                ? "text-2xl md:text-3xl text-yellow-500 font-semibold"
                : "text-2xl md:text-3xl text-gray-600 font-semibold"
            }
          >
            Contact Info
          </h1>
          <div className="flex gap-5 items-center ">
            <h1
              className={
                darkMode
                  ? "  text-2xl text-yellow-500"
                  : " text-gray-600 text-2xl"
              }
            >
              <GiRotaryPhone />
            </h1>
            <p className={darkMode ? "text-white text-xl" : "text-xl"}>
              +959123456789
            </p>
          </div>
          <div className="flex gap-5 items-center ">
            <h1
              className={
                darkMode ? " text-2xl text-yellow-500" : "text-gray-600 text-2xl"
              }
            >
              <GrMail />
            </h1>
            <p className={darkMode ? "text-white text-xl" : "text-xl"}>
              something@gmail.com
            </p>
          </div>
          <div className="flex gap-5 items-center ">
            <h1
              className={
                darkMode ? " text-2xl text-yellow-500" : "text-gray-600 text-2xl"
              }
            >
              <ImAddressBook />
            </h1>
            <p className={darkMode ? "text-white text-xl" : "text-xl"}>
              Myanmar
            </p>
          </div>
        </div>
        {/* {Form} */}
        <div className=" flex flex-col gap-5 ">
          <h1
            className={
              darkMode
                ? "text-2xl font-semibold md:text-3xl text-yellow-500 "
                : "text-2xl font-semibold md:text-3xl text-gray-600 "
            }
          >
            Contact Form
          </h1>
          <form className="  flex flex-col gap-4 w-64 md:w-80 lg:w-96">
            <TextInput
              placeholder="Enter Your name"
              label="Full Name"
              labelProps={darkMode && { className: "text-yellow-500 " }}
              styles={
                darkMode && {
                  input: {
                    borderColor: "red",
                    color: "white",
                    backgroundColor: "#2D3748",
                  },
                }
              }
              className={
                darkMode &&
                "bg-gray-900  border border-gray-900  placeholder-gray-500"
              }
            />
            <TextInput
              placeholder="Email"
              label="Email"
              labelProps={darkMode && { className: "text-yellow-500" }}
              styles={
                darkMode && {
                  input: {
                    borderColor: "red",
                    color: "white",
                    backgroundColor: "#2D3748",
                  },
                }
              }
              className={
                darkMode &&
                "bg-gray-900  border border-gray-900  placeholder-gray-500"
              }
            />
            <TextInput
              placeholder="+959xxxxxxxxx"
              label="Phone"
              labelProps={darkMode && { className: "text-yellow-500" }}
              styles={
                darkMode && {
                  input: {
                    borderColor: "red",
                    color: "white",
                    backgroundColor: "#2D3748",
                  },
                }
              }
              className={
                darkMode &&
                "bg-gray-900  border border-gray-900  placeholder-gray-500"
              }
            />
            <TextInput
              placeholder="Address"
              label="Address"
              labelProps={darkMode && { className: "text-yellow-500" }}
              styles={
                darkMode && {
                  input: {
                    borderColor: "red",
                    color: "white",
                    backgroundColor: "#2D3748",
                  },
                }
              }
              className={
                darkMode &&
                "bg-gray-900  border border-gray-900  placeholder-gray-500"
              }
            />
            <div className=" flex justify-center">
              <button className=" bg-red-500 text-white px-6 py-1 rounded-md">
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact