import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-18 py-3 shadow">

        {/* Logo Left */}
        <div>
          <img 
            src="/logo.png" 
            alt="logo" 
            className="w-[100px]"
          />
        </div>

        {/* Links Right */}
        <div className="flex gap-10 text-lg font-medium">
          <Link className="nav-link  hover:text-[#303983]" to="/">Home</Link>
          <Link className="nav-link  hover:text-[#303983]" to="/about">About</Link>
          <Link className="nav-link  hover:text-[#303983]" to="/product">Product</Link>
          <Link className="nav-link  hover:text-[#303983]" to="/contact">Contact</Link>
          <Link className="nav-link  hover:text-[#303983]" to="/order">Order</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
