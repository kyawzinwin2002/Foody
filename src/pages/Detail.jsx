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
        item?.strIngredient1,
        item?.strIngredient2,
        item?.strIngredient3,
        item?.strIngredient4,
        item?.strIngredient5,
        item?.strIngredient6,
        item?.strIngredient7,
        item?.strIngredient8,
        item?.strIngredient9,
        item?.strIngredient10,
        item?.strIngredient11,
        item?.strIngredient12,
        item?.strIngredient13,
        item?.strIngredient14,
        item?.strIngredient15

    ]
    console.log(ingredients);
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
                    {ingredients.map(i => {
                        return(
                            <li>{i}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Detail