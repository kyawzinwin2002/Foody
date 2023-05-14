import React from 'react'
import { TextInput,  PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/api/authApi';
import LoginLogo from '../components/Login/LoginLogo';

const Register = () => {
const [register] = useRegisterMutation()
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
          value.length < 8
            ? "Password name must have at least 8 letters"
            : null,
        password_confirmation: (value) =>
          value.length < 8
            ? "Password name must have at least 8 letters"
            : null,
      },
    });
    const nav = useNavigate()
  return (
    <div className=" flex flex-col gap-5 w-screen h-screen justify-center    items-center">
      <div className="flex items-center justify-between w-96">
        <LoginLogo/>
        <h1 className=" text-2xl font-bold text-blue-600">Register</h1>
      </div>
      <form
        className=" flex flex-col gap-3 w-96"
        onSubmit={form.onSubmit(async(values) => {
            const {data} = await register(values)
            if(data?.success){
                nav("/login")
            }
        })}
      >
        <TextInput
          label="Full Name"
          placeholder="Enter Your Name"
          {...form.getInputProps("name")}
        />
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
        <PasswordInput
          placeholder="Confirm Password"
          label="Confirm Password"
          {...form.getInputProps("password_confirmation")}
        />
        <h1 className=" text-gray-600 text-base">
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
  );
}

export default Register