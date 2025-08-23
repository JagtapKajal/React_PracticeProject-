import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="left">
        <h2>My App</h2>
      </div>
      <div className="right">
        {isLoggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link
              to="/logout"
              style={{ fontWeight: "bold" }}
              onClick={logout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link
              to="/login"
              style={{ fontWeight: "bold" }}
              onClick={login}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
