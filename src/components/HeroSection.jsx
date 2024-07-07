import React from "react";

const HeroSection = ({
  title = "All Timbu Chairs",
  imageUrl = "./images/about-bg.png",
}) => {
  return (
    <section className="h-1/2 md:h-[60vh] w-full my-20">
      <div
        className="relative h-full max-w-7xl rounded-3xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        {/* boxed content goes in here in absolute */}
        <div className="md:absolute bottom-10 md:bottom-40 left-10 text-white">
          <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
