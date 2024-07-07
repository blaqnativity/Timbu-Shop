import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ShopsPage />} />
            <Route path="/products/id" element={<SingleProduct />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
