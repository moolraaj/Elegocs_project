<<<<<<< HEAD
import React from 'react'
import Home from '../../components/Home/Home'
import AboutUs from "../../components/AboutUs"

function Homepage() {
  return (
     <>
     <div className="home-outer">
      <div className="home-inner">
      <Home/>
      </div>
     </div>
    
     <AboutUs/>
     </>
=======
import AboutPage from "../About/AboutPage"

function Homepage() {
  return (
    <>
    <h1>this is home page</h1>
    <AboutPage/>
    </>
>>>>>>> 0ba9b5bea47424a93008e16e852ece3053053764
  )
}

export default Homepage