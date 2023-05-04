import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import "../CSS/Item.css"
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {idMeal,strMeal,strMealThumb} = props
    // console.log(strMealThumb);
  return ( 
    <div className='relative item rounded-md shadow-md'>
       <img src={strMealThumb} className='rounded-md w-[200px]' alt="" />
       <div className="flex showText bottom-16 left-16  items-center justify-center flex-col gap-3 absolute">
        <h1 className=' p-0 m-0 text-white'>{strMeal.substring(0,10)}...</h1>
        <Link to={`/detail/${idMeal}`}>
        <span className=' bg-[#d02a3a] text-white w-10 h-10 rounded-[100%] flex align-middle justify-center items-center'>

        <BiSearchAlt className=' text-lg'/>
        </span>
        </Link>
       </div>
    </div>
  )
}

export default Item