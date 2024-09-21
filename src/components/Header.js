import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

 const Header = () => {
  const cartItems = useSelector((store) => store.Cart.items);
  const isOnline = navigator.onLine;


  return (
    <div className=" bg-gradient-to-r from-blue-500 to-purple-600 flex flex-wrap justify-between items-center py-2 h-10 md:h-16  px-4 md:px-10 shadow-lg border-b border-gray-300 mb-1">
      <img className=" cursor-not-allowed w-auto md:h-14 max-sm:h-8" id="logo" src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" alt="Logo" />

      <ul className="flex items-center space-x-2 md:space-x-4">
        <li>
          <Link to="/" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200 max-lg:hidden">Home</Link>
        </li>
        <li>
          <Link to="/aboutme" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200 max-lg:hidden">About Me</Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="relative block">
            <img className="h-7 w-7 md:h-9 md:w-9" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
       
        <li>
        <button
      className={`m-1 p-2 rounded-lg transition duration-200 text-xs md:text-base max-lg:hidden  ${
        isOnline ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
      }`}
    >
      {isOnline ? 'Online' : 'Offline'}
    </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;