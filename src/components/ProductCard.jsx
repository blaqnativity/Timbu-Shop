import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaAngleDown,
  FaAngleUp,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";
const ProductCard = () => {
  return (
    <>
      <section>
        <div className="py-24 max-w-7xl mx-auto p-4 grid grid-cols-1 gap-8 md:grid-cols-7 justify-start">
          {/* content div */}
          <div className="grid gap-6 col-span-3">
            <Link
              to="/products"
              className="flex items-center gap-2 font-semibold"
            >
              <FaArrowLeft />
              <span>Back to lists</span>
            </Link>

            <h2 className="text-3xl md:text-5xl font-semibold w-1/3">
              The Summer Solstice
            </h2>

            <p>
              Bring the warmth and radiance of the summer solstice into your
              home with our stunning Summer Solstice Dining Stools. These
              exquisitely crafted stools feature a sun-inspired circular seat
              and gently curved backrest, evoking the sun's path across the
              summer sky.
            </p>

            <div className="colorPicker flex gap-2 items-center flex-wrap">
              <span className="text-lg font-semibold">Color:</span>
              <button className="bg-[#C66E4E] py-2 px-5 rounded-full border-2 border-gray-700 text-white">
                Terracotta
              </button>
              <button className="bg-[#2C3E50] py-2 px-5 rounded-full border-2 border-gray-700 text-white">
                Night
              </button>
              <button className="bg-[#E6BE8A] py-2 px-5 rounded-full  text-white">
                Wheat
              </button>
              <button className="bg-[#556B2F] py-2 px-5 rounded-full  text-white">
                Grove
              </button>
            </div>

            <div className="colorPicker flex gap-2 items-center">
              <span className="text-lg font-semibold">Qty:</span>
              <button className="flex items-center gap-2 bg-gray-300 py-2 px-5 rounded-full border-2 border-gray-700">
                <span>1</span>
                <div>
                  <FaAngleUp />
                  <FaAngleDown />
                </div>
              </button>
            </div>

            <div className="mt-2">
              <Link
                to={`/products/cart`}
                className="bg-[#121211] w-fit text-white font-semibold py-3 px-5 rounded-full"
              >
                Add to Cart
              </Link>
            </div>
          </div>

          {/* image div */}
          <div className="col-span-4 grid grid-cols-1 justify-start gap-6">
            <div>
              <img
                src="/images/productImage.jpg"
                alt="dining-img"
                className="md:h-[600px] w-full object-cover object-center rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/images/productImage.jpg"
                  alt="small-img"
                  className="h-[70px] w-[80px] rounded-lg border-2 border-gray-500"
                />
                <img
                  src="/images/productImage.jpg"
                  alt="small-img"
                  className="h-[70px] w-[80px] rounded-lg"
                />
                <img
                  src="/images/productImage.jpg"
                  alt="small-img"
                  className="h-[70px] w-[80px] rounded-lg"
                />
                <img
                  src="/images/productImage.jpg"
                  alt="small-img"
                  className="h-[70px] w-[80px] rounded-lg"
                />
              </div>

              <div className="flex items-center gap-4">
                <button className="p-3 rounded-full border-2">
                  <FaAngleLeft />
                </button>
                <button className="p-3 rounded-full border-2">
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
