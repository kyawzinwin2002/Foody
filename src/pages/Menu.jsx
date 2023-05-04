import React from 'react'
import Navbar from '../components/Navbar'
import { useGetFoodQuery } from '../redux/api/foodApi'
import Item from '../components/Item'

const Menu = () => {
  const {data} = useGetFoodQuery()
  // console.log(data.meals);
  return (
    <div>
      <Navbar/>
      <div className="flex my-5 w-screen h-screen flex-wrap justify-center gap-10">
        {data?.meals?.map(item => {
          return(
            <Item key={item.idMeal} {...item}/>
          )
        })}
      </div>

    </div>
  )
}

export default Menu