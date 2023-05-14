import React from "react";

import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <WhyUs/>
      <Footer />
    </div>
  );
};

export default Home;
