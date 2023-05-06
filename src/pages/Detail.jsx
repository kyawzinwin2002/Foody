import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useGetSingleFoodQuery } from '../redux/api/foodApi'
import { IoLogoYoutube } from 'react-icons/io';

const Detail = () => {
    const {id} = useParams()
    const {data} = useGetSingleFoodQuery(id)
    const item = data?.meals[0]
    // console.log(item);
    const ingredients = [
        {id:1,i:item?.strIngredient1},
        {id:2,i:item?.strIngredient2},
        {id:3,i:item?.strIngredient3},
        {id:4,i:item?.strIngredient4},
        {id:5,i:item?.strIngredient5},
        {id:6,i:item?.strIngredient6},
        {id:7,i:item?.strIngredient7},
        {id:8,i:item?.strIngredient8},
        {id:9,i:item?.strIngredient9},
        {id:10,i:item?.strIngredient10},
        {id:11,i:item?.strIngredient11},
        {id:12,i:item?.strIngredient12},
        {id:13,i:item?.strIngredient13},
        {id:14,i:item?.strIngredient14},
        {id:15,i:item?.strIngredient15}

    ]
    // console.log(ingredients);
  return (
    <div>
        <Navbar/>
        <div className=" p-2  w-screen mt-3 flex gap-5 justify-center">
            <img src={item?.strMealThumb} className=' rounded-2xl w-[450px]' alt="" />
            <div className=" flex flex-col gap-3">
                <h1 className=' text-2xl text-gray-500 font-bold'>{item?.strMeal}</h1>
                <h2 className=' text-xl text-gray-400 font-bold'>{item?.strCategory}</h2>
                <h2 className=' font-bold text-gray-400'>{item?.strArea}</h2>
                <p className=' leading-7'>{item?.strInstructions}</p>
                <a href={item?.strYoutube} className=' text-3xl text-red-500'>
                <IoLogoYoutube/>
                </a>
                <h1 className=' text-lg text-gray-500'>Ingredients</h1>
                <ul>
                    {ingredients?.map(i => {
                        return(
                            <li key={i.id}>{i.i}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Detail