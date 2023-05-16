import React from "react";

import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import WhyUs from "../components/WhyUs";
import GoToMenu from "../components/GoToMenu";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <WhyUs/>
      <GoToMenu/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
