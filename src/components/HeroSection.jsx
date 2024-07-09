import React from "react";

const HeroSection = ({
  title = "All Timbu Chairs",
  imageUrl = "./images/about-bg.png",
}) => {
  return (
    <section className="h-[50vh] w-full md:my-20">
      <div
        className="relative h-full w-full md:max-w-7xl md:rounded-3xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 md:rounded-3xl"></div>
        <div className="absolute bottom-5 left-2 md:bottom-10 md:left-10 text-white">
          <h1 className="text-6xl tracking-wide font-bold md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
