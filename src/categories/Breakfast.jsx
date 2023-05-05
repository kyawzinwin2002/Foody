import React from 'react'
import { useGetFoodQuery } from '../redux/api/foodApi'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsCartPlus } from 'react-icons/bs';
import "../CSS/Item.css"

const Breakfast = () => {
  const {data} = useGetFoodQuery("Breakfast")
  return (
    <div className=" flex flex-col gap-5">

      <Navbar/>
      <div className=" text-center">
      <h1 className=' text-2xl font-bold text-[#d02a3a]'>Choose your love,Darling❤️</h1>
      </div>
      <div className=" flex flex-wrap gap-10 mt-5 justify-center p-2">
      {data?.meals?.map(meal => {
        return (
          <div   key={meal?.idMeal} className=' shadow-xl  item relative flex flex-col gap-3'>
            <img src={meal?.strMealThumb} className=' itemImg rounded-md w-[150px]' alt="" />
            <a href={`/detail/${meal?.idMeal}`} className=' showText w-8 h-8 absolute bottom-8 left-8 rounded-[100%] text-white flex align-middle justify-center items-center bg-[#d02a3a]'>
                <BsCartPlus />
            </a>
          </div>
        )
      })}
    </div>
      <Footer/>
    </div>
  )
}

export default Breakfast