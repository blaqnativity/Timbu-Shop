import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Preloader from "/images/Preloader.png";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="flex h-[100vh] w-[100vw] bg-cover bg-center object-fit"
        style={{
          backgroundImage: `url(${Preloader})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/products" element={<DefaultLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path=":id" element={<ProductPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
