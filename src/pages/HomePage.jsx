import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import TrustedBrands from "../components/TrustedBrands";
import Team from "../components/Team";
import CtaSection from "../components/CtaSection";
import ViewAllButton from "../components/ViewAllButton";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ViewAllButton />
      <CtaSection />
      <TrustedBrands />
      <Team />
    </>
  );
};

export default HomePage;
