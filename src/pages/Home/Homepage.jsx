import React from 'react'
import Home from '../../components/Home/Home'
import AboutUs from "../../components/About/AboutUs"

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
  )
}

export default Homepage