import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (

    <header>
      <Link to="/" className='siteName'>Portfolio 2023</Link>
      <p className='logo'>Akshay Mistry (UXay)</p>
      {/* <a href='.'>About</a> */}
    </header>
  );
};

export default Header;