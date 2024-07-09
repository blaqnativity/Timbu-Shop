import ProductCard from "../components/ProductCard";
import FeaturedProducts from "../components/FeaturedProducts";

const ProductPage = () => {
  return (
    <>
      <ProductCard />
      <FeaturedProducts title="Other products you might like" />
    </>
  );
};

export default ProductPage;
