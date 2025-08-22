import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h2>My App</h2>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </nav>
  );
};

export default Navbar;
