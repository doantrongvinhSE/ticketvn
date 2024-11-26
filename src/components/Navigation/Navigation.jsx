import React from "react";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="mt-10  w-[1232px] h-[40px] flex justify-between items-center mx-auto px-4">
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="/" className="text-white hover:text-gray-300 font-medium">
          Home
        </a>
        <a
          href="/concerts"
          className="text-white hover:text-gray-300 font-medium"
        >
          Concerts
        </a>
        <a
          href="/singers"
          className="text-white hover:text-gray-300 font-medium"
        >
          Singers
        </a>
      </div>

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href="/">
        <img src={logo} alt="Logo" className="h-6 w-[208px] h-[40px]" />
        </a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        <button className="relative">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-white text-2xl"
          />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        
          <button className="bg-white text-indigo-900 px-5 py-2 rounded-2xl hover:bg-gray-100">            
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl text-indigo-900 mr-4"
            />
            <span>Login/Register</span>
          </button>
      </div>
    </nav>
  );
};

export default Navigation;
