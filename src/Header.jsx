import React from "react";
import { Link } from "react-router-dom";
import Logo2 from './assets/header-logo2.png'

const Header = () => {
  return (
    <div className="header">
        <div></div>
        <div><img src={Logo2}/></div>
      <div className="header_links">
        <Link to='/list'><p >List</p></Link>
        <Link to='/slide'><p >SlideShow</p></Link>
      </div>
    </div>
  );
};

export default Header;
