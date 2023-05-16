import React from "react";
import freeLearn from "../img/freeLearn.jpg";
import group from "../img/group.jpeg";
import technic from "../img/technic.webp";
import { useSelector } from "react-redux";
import WhyCard from "./WhyCard";

const WhyUs = () => {
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const cards = [
    {
      id: 1,
      name: "Free to Learn",
      photo: freeLearn,
      p: "Learn to cook from the comfort of your own home with our free online cooking website! Our expert instructors will guide you through everything from basic techniques to advanced recipes. Perfect for beginners and experienced home cooks alike. Sign up now to expand your culinary knowledge and create delicious meals for yourself and your loved ones.",
    },
    {
      id: 2,
      name: "Good Technic",
      photo: technic,
      p: "Our cooking website will teach you the essential techniques needed to become a skilled home cook. From knife skills and seasoning to cooking and plating techniques, we'll cover it all. With our expert instruction and guidance, you'll be able to elevate your cooking skills and take your meals to the next level. Join our website today to learn the techniques that will make you a confident and successful home cook!",
    },
    {
      id: 3,
      name: "Strong Community",
      photo: group,
      p: "Join our cooking website and become part of a community of like-minded individuals who share your passion for food and cooking! Through mutual support and encouragement, you'll be able to expand your culinary knowledge and achieve your cooking goals. Plus, with the convenience of online learning, you can participate from anywhere and still feel like you're part of a strong community. Don't miss out on the chance to connect with others who share your love of cooking. Join our community of home cooks today!",
    },
  ];
  return (
    <div
      className={
        darkMode
          ? " flex  flex-col gap-8 bg-gray-900 py-16 items-center"
          : " flex  flex-col gap-8 py-16 items-center"
      }
    >
      <h1 className=" text-4xl font-bold text-red-500">Why Us?</h1>
      <div className="flex gap-10 items-start flex-wrap justify-center">
        {/* {Card} */}
        {cards.map((card) => {
          return <WhyCard key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default WhyUs;
