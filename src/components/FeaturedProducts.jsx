import React from "react";
import { Link } from "react-router-dom";

const products = [];

const FeaturedProducts = () => {
  return (
    <div className="font-[sans-serif] my-20">
      <div className="px-4 py-10 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="flex flex-wrap gap-6 items-center justify-between">
          <h2 className="md:w-1/2 text-4xl font-extrabold text-gray-800 mb-12">
            Discover Unparalleled Furniture Designs
          </h2>

          <div className="buttons flex gap-6 items-center">
            <Link
              to="#"
              className="py-2 px-5 rounded-full bg-black text-white text-sm"
            >
              All Products
            </Link>
            <Link
              to="#"
              className="py-2 px-5 rounded-full bg-black text-white text-sm"
            >
              Living Room
            </Link>
            <Link
              to="#"
              className="py-2 px-5 rounded-full bg-black text-white text-sm"
            >
              Bed Room
            </Link>
            <Link
              to="#"
              className="py-2 px-5 rounded-full bg-black text-white text-sm"
            >
              Outdooor
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-xl:gap-4 gap-6">
          <div className=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-1.png"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 className="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
          <div className=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-2.png"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 className="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
          <div className=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-3.png"
                alt="Product 1"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 className="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
