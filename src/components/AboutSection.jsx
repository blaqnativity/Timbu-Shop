import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section class="md:h-[80vh] w-full my-40">
      <div class="relative bg-[url('./images/about-bg.png')] h-full w-[80%] rounded-3xl mx-auto bg-cover bg-center">
        {/* boxed content goes in here in absolute */}
        <div className="md:absolute bottom-10 left-10 bg-[#121211] md:w-[30%] rounded-3xl text-white p-6 grid gap-2">
          <h1 className="text-2xl font-bold">About Furni</h1>
          <p className="text-sm">
            Furni redefines modern living through minimalist furniture design.
            Our collection celebrates simplicity with clean lines, premium
            natural materials, and thoughtful craftsmanship that strips away the
            unnecessary. Experience the beauty of intentional, understated
            elegance in versatile pieces made to elevate any interior space.
          </p>
          <Link
            to="#"
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
