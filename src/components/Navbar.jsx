import React from 'react';
import logo from '../assets/images/airbnb-logo.png';
const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" className="nav-logo" />
      </nav>
    </>
  );
};

export default Navbar;
