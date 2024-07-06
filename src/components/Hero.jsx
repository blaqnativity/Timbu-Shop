import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <div class="relative h-screen text-white overflow-hidden">
      {/* header menu */}
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
