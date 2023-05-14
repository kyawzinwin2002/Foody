import React from 'react'
import { useDispatch } from 'react-redux';
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from '../redux/api/authApi';
import { ADD_USER } from '../redux/services/authSlice';
import LoginLogo from '../components/Login/LoginLogo';


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
  return (
    <div className=" flex flex-col gap-5 w-screen h-screen justify-center    items-center">
      <div className="flex items-center justify-between w-96">
        <LoginLogo/>
        <h1 className=" text-2xl font-bold text-blue-600">Login</h1>
      </div>
      <form
        className=" flex flex-col gap-3 w-96"
        onSubmit={form.onSubmit(async(values) => {
            const {data} = await login(values)
            dispatch(ADD_USER({user:data?.user,token:data?.token}))
            if(data?.success){
                nav("/menu")
            }
        })}
      >
        
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
        
        <h1 className=" text-gray-600 text-base">
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
  );
}

export default Login