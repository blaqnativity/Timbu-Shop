import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full top-0 left-0 z-20">
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-5 bg-transparent">
          <div className="text-2xl font-bold">Timbu Shopper</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Collections
            </Link>
            <Link to="/shop" className="text-white hover:text-gray-300">
              Clearance
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              <FaCartShopping />
            </Link>
          </div>
          <div className="md:hidden">
            <button id="nav-toggle" className="focus:outline-none">
              <FaBars onClick={toggleMenu} />
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div
        id="nav-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-75 z-10`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Collections
          </Link>
          <Link to="/shop" className="text-white hover:text-gray-300">
            Clearance
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            <FaCartShopping />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
