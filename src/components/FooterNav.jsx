import React from "react";

const FooterNav = () => {
  return (
    <footer className="w-full bg-[#121211] text-[#F3F2E8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              <img src="./images/Logo.png" alt="" />
            </a>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg  font-medium mb-7">Quick Links</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="#" className=" ">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="  ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="  ">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg  font-medium mb-7">Products</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="#" className=" ">
                  Products
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="  ">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="  ">
                  Products
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg  font-medium mb-7">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="#" className=" ">
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="  ">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="  ">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg  font-medium mb-7">Subscribe</h4>
            <p className="text-sm text-gray-500 leading-6 mb-7">
              Subscribe to get the latest news from us
            </p>
          </div>
        </div>
        <div className="py-7">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">©Timbu, LLC 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
