import React from "react";
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import LoginLogo from "../components/Login/LoginLogo";
import Navbar from "../components/Navbar_components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Register = () => {
  const [register] = useRegisterMutation();
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password name must have at least 8 letters" : null,
      password_confirmation: (value) =>
        value.length < 8 ? "Password name must have at least 8 letters" : null,
    },
  });
  const nav = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div
        className={
          darkMode
            ? " flex flex-col gap-5 bg-gray-800 w-screen h-screen justify-center    items-center"
            : " flex flex-col gap-5 w-screen h-screen justify-center    items-center"
        }
      >
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between w-96">
          <LoginLogo />
          <h1
            className={
              darkMode
                ? " text-2xl font-bold text-yellow-500"
                : " text-2xl font-bold text-blue-600"
            }
          >
            Register
          </h1>
        </div>
        <form
          className=" flex flex-col gap-3 w-64 md:w-96"
          onSubmit={form.onSubmit(async (values) => {
            const { data } = await register(values);
            if (data?.success) {
              nav("/login");
            }
          })}
        >
          <TextInput
            label="Full Name"
            placeholder="Enter Your Name"
            {...form.getInputProps("name")}
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
              "bg-gray-800  border border-gray-800  placeholder-gray-500"
            }
            placeholderTextColor="gray"
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
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
              "bg-gray-800  border border-gray-800  placeholder-gray-500"
            }
            placeholderTextColor="gray"
          />

          <PasswordInput
            placeholder="Password"
            label="Password"
            {...form.getInputProps("password")}
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
              "bg-gray-800  border border-gray-800  placeholder-gray-500"
            }
            placeholderTextColor="gray"
          />
          <PasswordInput
            placeholder="Confirm Password"
            label="Confirm Password"
            {...form.getInputProps("password_confirmation")}
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
              "bg-gray-800  border border-gray-800  placeholder-gray-500"
            }
            placeholderTextColor="gray"
          />
          <h1
            className={
              darkMode
                ? " text-yellow-500 flex items-center gap-5 text-base"
                : " text-gray-600 flex items-center gap-5 text-base"
            }
          >
            Already have an account?
            <Link to={"/login"}>
              <span className=" text-blue-500 text-base">Login</span>
            </Link>
          </h1>
          <button
            type="submit"
            className=" px-6 py-1 rounded-md bg-blue-500 text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
