import React from 'react'
import Navbar from '../components/Navbar'

import beef from "../img/beef.png"
import breakfast from "../img/breakfast.png"
import chicken from "../img/chicken.png"
import dessert from "../img/dessert.png"
import goat from "../img/goat.png"
import lamb from "../img/lamb.png"
import Miscellaneous from "../img/Miscellaneous.png"
import pasta from "../img/pasta.png"
import pork from "../img/pork.png"
import seafood from "../img/seafood.png"
import side from "../img/side.png"
import starter from "../img/starter.png"
import vegan from "../img/vegan.png"
import vegetarian from "../img/vegetarian.png"
import "../CSS/Menu.css"
import 'animate.css';
import Footer from '../components/Footer'


const Menu = () => {
  const categories = [
    {id:1,food:beef,name:"Beef"},
    {id:2,food:breakfast,name:"Breakfast"},
    {id:3,food:chicken,name:"Chicken"},
    {id:4,food:dessert,name:"Dessert"},
    {id:5,food:goat,name:"Goat"},
    {id:6,food:lamb,name:"Lamb"},
    {id:7,food:Miscellaneous,name:"Miscellaneous"},
    {id:8,food:pasta,name:"Pasta"},
    {id:9,food:pork,name:"Pork"},
    {id:10,food:seafood,name:"Seafood"},
    {id:11,food:side,name:"Side"},
    {id:12,food:starter,name:"Starter"},
    {id:13,food:vegan,name:"Vegan"},
    {id:14,food:vegetarian,name:"Vegetarian"}
  ]
  return (
    <div className=' flex flex-col  gap-5 '>
      <Navbar />
      <div className=" text-center">
      <h1 className=' font-semibold text-gray-700 text-xl'>Easy to Search by Categories</h1>
      </div>
      <div className=" flex  flex-wrap gap-10 mt-5 justify-center">
       {categories.map(cat => {
        return (
          <div key={cat.id} className=" flex gap-4 px-6 rounded-2xl items-center py-3 border-2 border-gray-500 ">
          <img src={cat.food} className=' w-10 h-10' alt="" />
          <h1 className=' text-lg font-bold text-[#d02a3a]'>{cat.name}</h1>
        </div>
        )
       })}
       
        
        
      </div>
      <Footer/>
    </div>
  )
}

export default Menu