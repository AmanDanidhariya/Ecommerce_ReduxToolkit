import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons/NavigateButtons'
import ProductSection from '../productSection/ProductSection'
import Footer from "../Footer/Footer"
import Login from "../Login/Login"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <NavigateButtons/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Main