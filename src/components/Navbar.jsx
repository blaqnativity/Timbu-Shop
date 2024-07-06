import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-5">
        <div className="flex items-center gap-20">
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="./images/Logo.png"
                alt="Timbu Shopper Logo"
                className="h-8"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/collections" className="hover:text-gray-300">
              Collections
            </Link>
            <Link to="/clearance" className="hover:text-gray-300">
              Clearance
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/cart" className="hover:text-gray-300">
            <FaCartShopping />
          </Link>
          <Link to="/en" className="hover:text-gray-300">
            EN
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <button
            id="nav-toggle"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="nav-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-black bg-opacity-75`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link to="/collections" className="hover:text-gray-300">
            Collections
          </Link>
          <Link to="/clearance" className="hover:text-gray-300">
            Clearance
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            <FaCartShopping />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
