import React from 'react';
import sitelogo from '../assets/headerAssets/sitelogo.png';
import openMenu from '../assets/headerAssets/openMenu.png';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
     <>
     <div className="nav_outer">
      <div className="nav_inner">
        <div className="nav_wrapper">
          <div className='logo-section'>
            <img src={sitelogo} alt="sitelogo" style={{width:'148px', height: '57px',objectFit: 'cover'}} />
          </div>
          <div className='menu-section'>
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
     </div>

     
    
     </>
  )
}

export default Navbar