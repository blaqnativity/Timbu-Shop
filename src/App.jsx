import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/products" element={<DefaultLayout />}>
            <Route path="products" element={<ShopsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/products/checkout" element={<Checkout />} />
            <Route path="/products/cart/" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
         </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
