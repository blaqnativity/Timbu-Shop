import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <li>
      <Link
        to={`/products/${product.index}`}
        className="group block overflow-hidden"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-[350px] rounded-xl w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>

          <p className="mt-2">
            <span className="tracking-wider text-gray-900">
              {product.price}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductList;
