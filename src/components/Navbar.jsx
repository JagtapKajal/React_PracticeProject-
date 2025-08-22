import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left"></div>
      <div className="right">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link> 
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
