import React, { useState } from "react";
import products from "../products.json";
import ProductList from "../components/ProductList";
import FilterNav from "../components/FilterNav";

const ProductsList = () => {
  const [activeButton, setActiveButton] = useState("Date");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const linkClass = (buttonName) =>
    buttonName === activeButton
      ? "bg-[#121211] text-white rounded-full px-3 py-2"
      : "hover:text-gray-300";

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="flex justify-between">
            <p className="mt-4 max-w-md text-gray-800 text-lg font-semibold">
              Showing 112 Results
            </p>

            <div className="flex items-center gap-8">
              <span className="text-lg">Sort by:</span>
              <button
                className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
                  "Date"
                )}`}
                onClick={() => handleButtonClick("Date")}
              >
                Date
              </button>
              <button
                className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
                  "Price"
                )}`}
                onClick={() => handleButtonClick("Price")}
              >
                Price
              </button>
              <button
                className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
                  "Relevance"
                )}`}
                onClick={() => handleButtonClick("Relevance")}
              >
                Relevance
              </button>
              <button
                className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
                  "Reset Filters"
                )}`}
                onClick={() => handleButtonClick("Reset Filters")}
              >
                Reset Filters
              </button>
            </div>
          </header>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <FilterNav />

            <div className="lg:col-span-3">
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductList key={product.id} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
