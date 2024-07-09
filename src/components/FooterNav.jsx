import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you for subscribing with ${email}!`);
    }
  };

  return (
    <footer className="w-full bg-[#121211] text-[#F3F2E8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link to="/" className="flex justify-center lg:justify-start">
              <img src="/images/Logo.png" alt="PageDone Logo" />
            </Link>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg font-medium mb-7">Quick Links</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-6">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg font-medium mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link to="/product1">Product 1</Link>
              </li>
              <li className="mb-6">
                <Link to="/product2">Product 2</Link>
              </li>
              <li>
                <Link to="/product3">Product 3</Link>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg font-medium mb-7">Support</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link to="/support">Customer Support</Link>
              </li>
              <li className="mb-6">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg font-medium mb-7">Subscribe</h4>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                aria-label="Email address"
                className="text-sm outline focus:outline-[#F3F2E8] text-[#F3F2E8] px-5 py-2 w-full mb-4"
                placeholder="Your email"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-full bg-[#F3F2E8] text-gray-800 text-sm py-2 px-4 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-7">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">© Timbu, LLC 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
