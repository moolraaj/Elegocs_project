import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
     <>
     <ul>
      <li>
        <Link to='/'>home</Link>  
      </li>
      <li>
      <Link to='/about'>about</Link> 
      </li>
     
     </ul>
     </>
  )
}

export default Navbar