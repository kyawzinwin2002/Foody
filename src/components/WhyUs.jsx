import React from 'react'
import technic from "../img/technic.webp"
import cookClass from "../img/class.webp"
import freeLearn from "../img/freeLearn.jpg"

const WhyUs = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <div className=" text-center">
      <h1 className=' text-3xl text-[#d02a3a] font-semibold'>Why us?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae incidunt excepturi ea veritatis quod similique perspiciatis magni necessitatibus blanditiis nobis quidem nam totam voluptates ducimus ipsa aliquam voluptas doloremque? </p>
      </div>
      <div className="flex">
        <div className=' flex  flex-col gap-2'>
            <img src={technic} className=' ' alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyUs