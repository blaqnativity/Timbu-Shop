import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <li>
      <Link
        to={`/products/${product.id}`}
        className="group block overflow-hidden"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-[357px] rounded-xl w-[319px] object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="relative pt-3">
          <h3 className="text-lg font-semibold text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>

          <p>
            <span className="tracking-wider text-md font-semibold text-[#872009]">
              {product.price}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductList;
