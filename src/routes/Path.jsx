import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Foods from "../pages/Foods";


const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/foods" element={<Foods/>}/>
      </Routes>
    </div>
  );
};

export default Path;
