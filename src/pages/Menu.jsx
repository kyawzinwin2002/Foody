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
import { Link } from 'react-router-dom'


const Menu = () => {
  const categories = [
    {id:1,food:beef,name:"Beef",path:"/beef"},
    {id:2,food:breakfast,name:"Breakfast",path:"/breakfast"},
    {id:3,food:chicken,name:"Chicken",path:"/chicken"},
    {id:4,food:dessert,name:"Dessert",path:"/dessert"},
    {id:5,food:goat,name:"Goat",path:"/goat"},
    {id:6,food:lamb,name:"Lamb",path:"/lamb"},
    {id:7,food:Miscellaneous,name:"Miscellaneous",path:"/miscellaneous"},
    {id:8,food:pasta,name:"Pasta",path:"/pasta"},
    {id:9,food:pork,name:"Pork",path:"/pork"},
    {id:10,food:seafood,name:"Seafood",path:"/seafood"},
    {id:11,food:side,name:"Side",path:"/side"},
    {id:12,food:starter,name:"Starter",path:"/starter"},
    {id:13,food:vegan,name:"Vegan",path:"/vegan"},
    {id:14,food:vegetarian,name:"Vegetarian",path:"/vegetarian"}
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
          <Link key={cat.id} to={`${cat.path}`}>
          <div  className=" flex gap-4 px-6 rounded-2xl items-center py-3 border-2 border-gray-500 ">
          <img src={cat.food} className=' w-10 h-10' alt="" />
          <h1 className=' text-lg font-bold text-[#d02a3a]'>{cat.name}</h1>
        </div>
          </Link>
        )
       })}
       
        
        
      </div>
      <Footer/>
    </div>
  )
}

export default Menu