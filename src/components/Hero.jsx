import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import heroMainImage from "/images/hero-main.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Header Menu */}
      <div className="absolute w-full top-0 left-0 z-20">
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-5 bg-transparent">
          <div className="flex items-end gap-20">
            <div className="text-2xl font-bold">
              <Link to="/">
                <img src="./images/Logo.png" alt="Timbu Shopper Logo" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link
                to="/collections"
                className="text-white hover:text-gray-300"
              >
                Collections
              </Link>
              <Link to="/clearance" className="text-white hover:text-gray-300">
                Clearance
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <Link to="/cart" className="text-white hover:text-gray-300">
              <FaCartShopping />
            </Link>
            <Link to="#" className="text-white hover:text-gray-300">
              EN
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              id="nav-toggle"
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <FaBars className="w-6 h-6 text-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="nav-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-75 z-10`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link to="#" className="text-white hover:text-gray-300">
            Collections
          </Link>
          <Link to="#" className="text-white hover:text-gray-300">
            Clearance
          </Link>
          <Link to="#" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-300">
            <FaCartShopping />
          </Link>
        </div>
      </div>

      {/* Background Image and Overlay */}
      <div
        className="relative h-full w-full mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMainImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 flex flex-col justify-end items-start bottom-10 md:pl-10 md:ml-60 p-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 md:w-3/5">
          Crafting Your Perfect Haven
        </h1>
        <p className="text-lg text-gray-300 mb-8"></p>
      </div>
    </div>
  );
};

export default Hero;
