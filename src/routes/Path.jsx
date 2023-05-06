import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'
import Beef from '../categories/Beef'
import Breakfast from '../categories/Breakfast'
import Chicken from '../categories/Chicken'
import Dessert from '../categories/Dessert'
import Goat from '../categories/Goat'
import Lamb from '../categories/Lamb'
import Miscellaneous from '../categories/Miscellaneous'
import Pasta from '../categories/Pasta'
import Pork from '../categories/Pork'
import Seafood from '../categories/Seafood'
import Side from '../categories/Side'
import Starter from '../categories/Starter'
import Vegan from '../categories/Vegan'
import Vegetarian from '../categories/Vegetarian'

const Path = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search:name' element={<Home/>}/>

            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/beef' element={<Beef/>}/>
            <Route path='/breakfast' element={<Breakfast/>}/>
            <Route path='/chicken' element={<Chicken/>}/>
            <Route path='/dessert' element={<Dessert/>}/>
            <Route path='/goat' element={<Goat/>}/>
            <Route path='/lamb' element={<Lamb/>}/>
            <Route path='/miscellaneous' element={<Miscellaneous/>}/>
            <Route path='/pasta' element={<Pasta/>}/>
            <Route path='/pork' element={<Pork/>}/>
            <Route path='/seafood' element={<Seafood/>}/>
            <Route path='/side' element={<Side/>}/>
            <Route path='/starter' element={<Starter/>}/>
            <Route path='/vegan' element={<Vegan/>}/>
            <Route path='/vegetarian' element={<Vegetarian/>}/>
        </Routes>
    </div>
  )
}

export default Path