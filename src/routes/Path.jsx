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
import RouteGuard from "../components/RouteGuards/RouteGuard";
import GuardTwo from "../components/RouteGuards/GuardTwo";
import GuardThree from "../components/RouteGuards/GuardThree";
import GuardFour from "../components/RouteGuards/GuardFour";
import GuardFive from "../components/RouteGuards/GuardFive";
import Error from "../components/Error";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <RouteGuard>
              <Menu />
            </RouteGuard>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/detail/:id"
          element={
            <GuardFive>
              <Detail />
            </GuardFive>
          }
        />
        <Route
          path="/foods"
          element={
            <GuardFour>
              <Foods />
            </GuardFour>
          }
        />
        <Route
          path="/favorite"
          element={
            <GuardTwo>
              <Favorite />
            </GuardTwo>
          }
        />
        <Route
          path="/search/:name"
          element={
            <GuardThree>
              <Search />
            </GuardThree>
          }
        />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default Path;
