import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Timbu Shop</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/shop" className="mr-5 hover:text-gray-900">
            Products
          </Link>
        </nav>
        <Link
          to="/checkout"
          className="text-white inline-flex items-center bg-indigo-500 border-0 py-2 px-4 font-semibold focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 gap-2"
        >
          <FaCartShopping />
          Your Cart
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
