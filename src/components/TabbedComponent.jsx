import React from "react";
import { FaStar, FaShield, FaAward, FaGlobe } from "react-icons/fa6";

const tabbedComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto  p-4">
        <div className="flex items-center flex-wrap gap-20">
          <span className="text-md fontsemibold">Details</span>
          <span className="text-md fontsemibold">Product Specs</span>
          <span className="text-md fontsemibold">Reviews</span>
          <span className="text-md fontsemibold">Warranty Info</span>
        </div>

        <div className="relative bg-gray-300 w-full h-1 rounded-full my-4">
          <div className="bg-red-500 absolute h-1 left-0 top-0 w-28"></div>
        </div>
        <div className="flex flex-wrap md:flex-row items-start">
          <span className="md:flex-1 p-2">
            Bring the warmth and radiance of the summer solstice into your home
            with our stunning Summer Solstice Dining Stools. These exquisitely
            crafted stools feature a sun-inspired circular seat and gently
            curved backrest, evoking the sun's path across the summer sky.
          </span>
          <span className="md:flex-1 p-2">
            Available in a range of warm, sunlit hues with a subtle shimmer
            effect, these 24-inch high stools are perfect for kitchen islands
            and bar-height tables. Crafted from sustainable hardwood, they offer
            both durability and eco-conscious appeal, while their ergonomic
            design ensures comfort during long, leisurely summer meals.
          </span>
          <div className="grid gap-2 md:flex-1 p-2">
            <div className="flex items-center gap-3">
              <FaStar />
              <span>Over 10,000 five-star reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShield />
              <span>Lifetime warranty included</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe />
              <span>Sustainably sourced materials</span>
            </div>
            <div className="flex items-center gap-3">
              <FaAward />
              <span>Award winning Design</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default tabbedComponent;
