import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

// const links = [
//   { id: 1, label: "Collections", link: "/shop" },
//   ,
//   { id: 2, label: "Clearance", link: "/shop" },
//   ,
//   { id: 3, label: "About", link: "#" },
//   ,
// ];

const Hero = () => {
  return (
    <div class="relative h-screen text-white overflow-hidden">
      <header className="text-white absolute top-0 z-50 inset-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
          <div className="flex flex-wrap items-end gap-8 text-lg">
            <div className="logo">
              <Link
                to="/"
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <img src="./images/Logo.png" alt="" />
              </Link>
            </div>
            <Link to="/shop" className="mr-5 hover:text-[whitesmoke]">
              Collections
            </Link>
            <Link to="#" className="mr-5 hover:text-[whitesmoke]">
              Clearance
            </Link>
            <Link to="#" className="mr-5 hover:text-[whitesmoke]">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/checkout" className="text-white font-semibold text-lg">
              <FaCartShopping />
            </Link>
            <Link to="/" className="text-white font-semibold text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <div class="absolute inset-0">
        <img
          src="./images/hero-main.png"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="absolute z-10 flex flex-col justify-end items-start bottom-10 md:pl-10 md:ml-40 text-center p-10">
        <h1 class="text-5xl font-bold leading-tight mb-4">
          Welcome to Timbu Shopper
        </h1>
        <p class="text-lg text-gray-300 mb-8">
          Crafting Your Perfect Haven and shopping experience
        </p>
      </div>
    </div>
  );
};

export default Hero;
