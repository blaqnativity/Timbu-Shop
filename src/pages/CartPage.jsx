import React from "react";
import { Link } from "react-router-dom";
import { FaXmark, FaArrowRight } from "react-icons/fa6";

const CartPage = () => {
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
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-1 rounded-md">
                  <img
                    src="../images/thumbnail-1.png"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>

                  <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                    $20.00
                  </h4>
                </div>
              </div>

              <div className="ml-auto">
                <button
                  type="button"
                  className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  REMOVE
                </button>
              </div>
            </div>

            <hr className="border-gray-300" />
          </div>
        </div>

        <div className="flex mt-5 items-center justify-between">
          <span className="text-lg font-semibold">Sub Total</span>
          <span className="text-lg font-semibold">$499</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-80% border p-4 rounded-full"
          />

          <Link
            to="/products/checkout"
            className="flex items-center gap-4 justify-center text-center bg-[#121211] text-white p-4 rounded-full"
          >
            <span>Proceed to Checkout</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
