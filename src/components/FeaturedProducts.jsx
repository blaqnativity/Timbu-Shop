import React from "react";
import { Link } from "react-router-dom";

const products = [];

const FeaturedProducts = () => {
  return (
    <div class="font-[sans-serif] my-20">
      <div class="px-4 py-10 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="flex flex-wrap gap-6 items-center justify-between">
          <h2 class="md:w-1/2 text-4xl font-extrabold text-gray-800 mb-12">
            Discover Unparalleled Furniture Designs
          </h2>

          <div className="buttons flex gap-6 items-center">
            <Link className="py-2 px-5 rounded-full bg-black text-white text-sm">
              All Products
            </Link>
            <Link className="py-2 px-5 rounded-full bg-black text-white text-sm">
              Living Room
            </Link>
            <Link className="py-2 px-5 rounded-full bg-black text-white text-sm">
              Bed Room
            </Link>
            <Link className="py-2 px-5 rounded-full bg-black text-white text-sm">
              Outdooor
            </Link>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-xl:gap-4 gap-6">
          <div class=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-1.png"
                alt="Product 1"
                class="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 class="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
          <div class=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-2.png"
                alt="Product 1"
                class="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 class="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
          <div class=" rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-full h-full overflow-hidden mx-auto">
              <img
                src="./images/thumbnail-3.png"
                alt="Product 1"
                class="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">
                Sole Elegance
              </h3>
              <h4 class="text-lg text-red-500 font-bold mt-1">$10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
