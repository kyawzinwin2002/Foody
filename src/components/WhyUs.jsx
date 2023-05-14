import React, { useState } from 'react'
import freeLearn from "../img/freeLearn.jpg";
import group from "../img/group.jpeg";
import technic from "../img/technic.webp";
import { useSelector } from 'react-redux';
const WhyUs = () => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);
    const [seeMore1,setSeeMoreOne] = useState(false)
  return (
    <div className=" flex flex-col gap-5 my-9 items-center">
      <h1 className=" text-4xl font-bold text-red-500">Why Us?</h1>
      <div className="flex gap-5 items-center flex-wrap justify-center">

        <div className=" flex w-[320px] md:w-[380px]  px-5 py-5 border-2  hover:shadow-2xl shadow-gray-700 rounded-md flex-col gap-3 items-center">
          <h1 className=" text-3xl font-semibold text-gray-600">
            Free to Learn
          </h1>
          <img
            src={freeLearn}
            className=" w-[250px] h-[250px] rounded-md"
            alt=""
          />
          <p>
            Learn to cook from the comfort of your own home with our free online
            cooking class! Our expert instructors will guide you through
            everything from basic techniques to advanced recipes. Perfect for
            beginners and experienced home cooks alike. Sign up now to expand
            your culinary knowledge and create delicious meals for yourself and
            your loved ones.
          </p>
          <button onClick={() => setSeeMoreOne(!seeMore1)}>See More</button>
        </div>

       
      </div>
    </div>
  );
}

export default WhyUs