import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`w-full flex justify-between items-center px-6 py-3 fixed z-50 transition-all duration-300
          ${isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"}
        `}
      >
        {/* Logo Left */}
        <div>
          <img 
            src="/logo.png" 
            alt="logo" 
            className="w-[80px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link className="hover:text-[#303983]" to="/">Home</Link>
          <Link className="hover:text-[#303983]" to="/about">About</Link>
          <Link className="hover:text-[#303983]" to="/product">Product</Link>
          <Link className="hover:text-[#303983]" to="/contact">Contact</Link>
          <Link className="hover:text-[#303983]" to="/order">Order</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg w-full flex flex-col text-center text-lg font-medium gap-6 py-6 absolute top-[70px] transition-all duration-300
          ${open ? "left-0 opacity-100" : "-left-full opacity-0"}
        `}
      >
        <Link className="hover:text-[#303983]" to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link className="hover:text-[#303983]" to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link className="hover:text-[#303983]" to="/product" onClick={() => setOpen(false)}>Product</Link>
        <Link className="hover:text-[#303983]" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link className="hover:text-[#303983]" to="/order" onClick={() => setOpen(false)}>Order</Link>
      </div>
    </>
  );
};

export default Navbar;
