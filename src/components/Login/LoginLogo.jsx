import React from 'react'
import { SiIfood } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginLogo = () => {
    const darkMode = useSelector((state) => state.foodSlice.darkMode);

  return (
    <Link to={"/"}>
      <div className=" flex gap-2 items-center">
        <SiIfood
          className={
            darkMode
              ? " text-4xl text-red-500 font-bold"
              : " text-4xl text-[#d02a3a] font-bold"
          }
        />
        <h1
          className={
            darkMode
              ? " text-4xl text-red-500 font-bold"
              : " text-4xl text-[#d02a3a] font-bold"
          }
        >
          Foody
        </h1>
      </div>
    </Link>
  );
}

export default LoginLogo