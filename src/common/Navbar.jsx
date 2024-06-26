import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav_outer">
      <div className="nav_inner">
        <div className="nav_flex">
        <div className="nav_left_section">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>logo</Link>
        </div>





        <div className="nav_right_section">
          <button className="nav-toggler" type="button" onClick={toggleMenu}>

            <span className="nav-toggler-icon"></span>
            <span className="nav-toggler-icon"></span>
            <span className="nav-toggler-icon"></span>

          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className={`navbar-nav ml-auto ${isOpen ? 'slide-down' : 'slide-up'}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>

            </ul>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
