import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Detail from "../pages/Detail";
import Foods from "../pages/Foods";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";
import Register from "../pages/Register";
import Login from "../pages/Login";


const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Path;
