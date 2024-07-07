import React from "react";
import ProductList from "./ProductList";
import products from "../products.json";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const Favorites = products.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto my-20 p-4">
      <div className="flex justify-between items-start mb-5">
        <h2 className="text-2xl md:text-3xl font-semibold w-1/3">
          Discover Unparalled Furniture Designs
        </h2>
        <Link
          to="/products"
          className="py-2 px-5 rounded-full border-2 border-gray-500"
        >
          View All Products
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Favorites.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
