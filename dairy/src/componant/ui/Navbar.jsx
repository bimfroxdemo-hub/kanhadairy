import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        
        {/* Logo Left */}
        <div className="logo-box">
          <img src="../assets/logo.png" alt="logo" className="logo" />
        </div>

        {/* Links Right */}
        <div className="navbar">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>

          <NavLink 
            to="/product" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Product
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>

          <NavLink 
            to="/order" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Order
          </NavLink>
        </div>

      </div>
    </>
  );
};

export default Navbar;
