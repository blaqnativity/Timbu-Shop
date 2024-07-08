import React from "react";
import { Link } from "react-router-dom";

const CheckoutCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 mx-auto max-w-7xl gap-8">
      {/* details div */}
      <div className="relative col-span-4 h-20 p-4 ">
        <div className="flex items-center gap-10 md:gap-30 justify-start">
          <div className="cursor-pointer">
            <span className="text-md font-semibold text-[#121211]">
              1. Shipping Details
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="text-md text-[#121211]">2. Payment Method</span>
          </div>
          <div className="cursor-pointer">
            <span className="text-md text-[#121211]">3. Finalize</span>
          </div>
        </div>
        <div className="absolute top-[60px] rounded-full bg-gray-300 w-full left-5 h-1"></div>

        <form className="mt-10 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className=" " placeholder="First name" />
            <input type="text" className="" placeholder="Last name" />
          </div>

          <div className="my-8">
            <input type="text" placeholder="Street Address" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className=" " placeholder="City" />
            <input type="text" className="" placeholder="State" />
          </div>

          <div className="mt-8">
            <input type="text" className="w-fit" placeholder="Zipcode" />
          </div>
        </form>
      </div>

      {/* cart summary div */}
      <div className="relative col-span-3 max-md:max-w-xl mx-auto p-8">
        <div className="flex justify-start">
          <div>
            <span className="text-lg font-semibold text-[#121211]">
              Cart Summary
            </span>
          </div>
          <div className="absolute top-[60px] rounded-full bg-gray-300 w-full left-5 h-1"></div>
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
          </div>
        </div>

        <div className="flex mt-5 items-center justify-start">
          <span className="text-lg font-semibold">Order Summary</span>
        </div>

        <div className="grid gap-2 mt-2">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>$500.99</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Shipping</span>
            <span>$60.22</span>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <span>Total</span>
            <span>$560.82</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4">
          <Link
            to="/products/checkout"
            className="text-center bg-[#121211] text-white p-4 rounded-full"
          >
            Proceed to pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
