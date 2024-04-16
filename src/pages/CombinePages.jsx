import React from 'react'
import Homepage from './Home/Homepage'
import AboutPage from './About/AboutPage'
import Navbar from '../common/Navbar'
import { Route, Routes } from 'react-router'
import Footer from '../common/Footer'

function CombinePages() {
  return (
     <>
     <Navbar/>
     <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/about' element={  <AboutPage/>}/>
     </Routes>
     <Footer/>
     
     
    
    
     </>
  )
}

export default CombinePages