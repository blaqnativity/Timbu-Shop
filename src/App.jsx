import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopsPage />} />
            <Route path="singleProduct" element={<SingleProduct />} />
            <Route path="checkout" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
