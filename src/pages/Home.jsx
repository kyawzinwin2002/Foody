import React from "react";

import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
