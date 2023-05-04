import React from 'react'
import { SiIfood } from 'react-icons/si';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-50 py-3 px-5 flex justify-around items-center'>
        <Link to={"/"}>
        <div className=" flex gap-2 items-center">
            <SiIfood className=' text-3xl text-[#d02a3a] '/>
            <h1 className=' text-3xl text-[#d02a3a] font-bold'>Foody</h1>
        </div>
        </Link>
        <ul className=' flex gap-5 items-center'>
            <Link to={"/menu"}>
            <li>
                <div className=" flex gap-1 items-center">
                    <GiForkKnifeSpoon/>
                    <h1>Menu</h1>
                </div>
            </li>
            </Link>
            <Link to={"/cart"}>
            <li>
                <div className=" flex gap-1 items-center">
                    <FaCartPlus/>
                    <h1>Cart</h1>
                </div>
            </li>
            </Link>
            <Link to={"/register"}>
            <li className=''>
                <button className='  hover:bg-[#d02a3a] px-6 py-1 rounded-2xl shadow-sm bg-black text-white text-sm
                '>Login/SignUp</button>
            </li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar