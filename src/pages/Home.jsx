import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
import ToMenu from '../components/ToMenu'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <ToMenu/>
        <Footer/>
    </div>
  )
}

export default Home