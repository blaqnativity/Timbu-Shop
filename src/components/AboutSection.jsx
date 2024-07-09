import React from "react";
import { Link } from "react-router-dom";
import aboutMain from "/images/about-bg.png";

const AboutSection = () => {
  return (
    <section className="h-[80vh] w-full my-20 md:my-40">
      <div
        className="relative h-full w-full md:w-[80%] md:rounded-3xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutMain})` }}
      >
        {/* boxed content goes in here in absolute */}
        <div className="absolute bottom-20 left-4 right-4 md:bottom-10 md:left-10 md:right-auto bg-[#121211] w-[90%] md:w-[50%] rounded-3xl text-white p-8 md:p-6 grid gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">About Furni</h1>
          <p className="text-base md:text-base">
            Furni redefines modern living through minimalist furniture design.
            Our collection celebrates simplicity with clean lines, premium
            natural materials, and thoughtful craftsmanship that strips away the
            unnecessary. Experience the beauty of intentional, understated
            elegance in versatile pieces made to elevate any interior space.
          </p>
          <Link
            to="/contact"
            className="w-fit bg-[#F3F2E8] rounded-full py-2 px-5 text-[#121211] font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
