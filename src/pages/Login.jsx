import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from '../redux/api/authApi';
import { ADD_USER } from '../redux/services/authSlice';
import LoginLogo from '../components/Login/LoginLogo';
import Navbar from '../components/Navbar_components/Navbar';
import Footer from '../components/Footer';


const Login = () => {
    const [login] = useLoginMutation()
    const form = useForm({
      initialValues: {        
        email: "kyaw8@gmail.com",
        password: "12345678",       
      },

      validate: {     
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        password: (value) =>
          value.length < 8
            ? "Password name must have at least 8 letters"
            : null,        
      },
    });
    const dispatch = useDispatch()
    const nav = useNavigate()
    const darkMode = useSelector(state => state.foodSlice.darkMode)
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
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-96">
          <LoginLogo />
          <h1
            className={
              darkMode
                ? " text-2xl font-bold text-yellow-500"
                : " text-2xl font-bold text-blue-600"
            }
          >
            Login
          </h1>
        </div>
        <form
          className=" flex flex-col gap-3 w-64 md:w-96"
          onSubmit={form.onSubmit(async (values) => {
            const { data } = await login(values);
            dispatch(ADD_USER({ user: data?.user, token: data?.token }));
            if (data?.success) {
              nav("/menu");
            }
          })}
        >
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
              "bg-gray-800  border border-gray-800  placeholder-gray-500 "
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

          <h1
            className={
              darkMode
                ? " flex items-center gap-5 text-yellow-500 text-base"
                : " flex items-center gap-5 text-gray-600 text-base"
            }
          >
            Don't have an account?
            <Link to={"/register"}>
              <span className=" text-blue-500 text-base">Register</span>
            </Link>
          </h1>
          <button
            type="submit"
            className=" px-6 py-1 rounded-md bg-blue-500 text-white"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login