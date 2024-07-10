import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#121211] text-white rounded-md px-3 py-2"
      : "hover:text-gray-300";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-[#121211]">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-5">
        <div className="flex items-center gap-20">
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="/images/logoBlack.png"
                alt="Timbu Shopper Logo"
                className="h-8"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/collections" className={linkClass}>
              Collections
            </NavLink>
            <NavLink to="/clearance" className={linkClass}>
              Clearance
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/products/empty" className="hover:text-gray-300">
            <FaCartShopping />
          </NavLink>
          <NavLink to="/en" className="hover:text-gray-300">
            EN
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            id="nav-toggle"
            aria-label="Toggle menu"
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
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-opacity-75`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <NavLink to="/collections" className="hover:text-gray-300">
            Collections
          </NavLink>
          <NavLink to="/clearance" className="hover:text-gray-300">
            Clearance
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/products/empty" className="hover:text-gray-300">
            <FaCartShopping />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
