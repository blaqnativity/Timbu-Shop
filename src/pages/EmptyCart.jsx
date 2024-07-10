import React from "react";
import { Link } from "react-router-dom";

import { FaXmark, FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const EmptyCart = () => {
  return (
    <>
      <div className="my-20 font-sans max-w-3xl rounded-3xl max-md:max-w-xl mx-auto bg-[#f3f2e8] border shadow p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Cart</h1>

          <div className="bg-red-500 text-white p-4 rounded-full text-xl">
            <FaXmark />
          </div>
        </div>

        <div className="mt-5">
          <div className="md:col-span-2 space-y-4">
            <div className="grid items-start gap-4">
              <div className="mt-4 flex flex-col justify-center items-center w-[80%] mx-auto gap-8">
                <p className="text-3xl text-gray-400">
                  There are no items in your cart
                </p>
                <Link
                  to="/products/"
                  className="text-center bg-transparent text-gray-900 border-2 border-gray-900 p-4 rounded-full flex items-center justify-center gap-4"
                >
                  <FaArrowLeft />
                  <span>Go back to product listings</span>
                </Link>
              </div>
            </div>

            <hr className="border-gray-300" />
          </div>
        </div>

        <div className="flex mt-5 items-center justify-between">
          <span className="text-lg font-semibold">Sub Total</span>
          <span className="text-lg font-semibold">$0</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-80% border p-4 rounded-full"
          />

          <Link
            to="#"
            className="flex items-center justify-center gap-4text-center bg-[#121211] text-white p-4 rounded-full"
          >
            <span>Proceed to Checkout</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
