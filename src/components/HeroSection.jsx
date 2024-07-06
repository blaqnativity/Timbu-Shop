import React from "react";

const HeroSection = () => {
  return (
    <section class="md:h-[80vh] w-full my-20">
      <div class="relative bg-[url('./images/about-bg.png')] h-full w-[80%] rounded-3xl mx-auto bg-cover bg-center">
        {/* boxed content goes in here in absolute */}
        <div className="md:absolute bottom-10 left-10 text-white">
          <h1 className="text-2xl font-bold">Heading</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
