import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
     <>
     <div className="nav_outer">
      <div className="nav_inner">
        <div className="nav_wrapper">
        <ul>
      <li>
        <Link to='/'>home</Link>  
      </li>
      <li>
      <Link to='/about'>about</Link> 
      </li>
     
     </ul>
        </div>
      </div>
     </div>

     
    
     </>
  )
}

export default Navbar