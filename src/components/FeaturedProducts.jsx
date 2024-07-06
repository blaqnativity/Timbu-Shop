import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="w-2/5 text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Discover Unparalleled Furniture Designs
          </h2>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Link to="/singleProduct" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3">
                <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider font-semibold text-red-500">
                    $200
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/singleProduct" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3">
                <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider font-semibold text-red-500">
                    $200
                  </span>
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/singleProduct" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3">
                <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider font-semibold text-red-500">
                    $200
                  </span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProducts;
