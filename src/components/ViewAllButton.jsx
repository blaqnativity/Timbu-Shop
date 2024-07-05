import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ViewAllButton = () => {
  return (
    <Link
      to="/shop"
      className="w-fit flex items-center gap-3 mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      <p>View Products</p>
      <FaArrowRight />
    </Link>
  );
};

export default ViewAllButton;
