import React from "react";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faHeadphones,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import ConcertList from "./ConcertList";
const Navigation = () => {
  return (
    <nav className=" bg-[#5327C2] w-full h-[656px]">
      {/* Navigation Links */}
      <div className="w-[1298px] flex justify-between mx-auto py-10">
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
      </div>

      {/* text banner */}
      <div className="mt-10">
        <p className="text-white text-5xl">
          Book Tickets Of Your Favorite Singers!
        </p>
        <p className="text-white text-2xl mt-2">
          Make Sure Don’t Miss These 5 Up Coming's Concerts!
        </p>
      </div>

      <div className="mt-20 ">
        <div className="flex space-x-2 justify-center">
          {/* Input: Singer Name */}
          <div className="flex items-center bg-white rounded-xl px-4 py-4 shadow">
            <FontAwesomeIcon
              icon={faHeadphones}
              className="text-gray-500 text-xl"
            />
            <input
              type="text"
              placeholder="Type a singer name"
              className="ml-2 focus:outline-none placeholder:text-base placeholder-gray-400 text-sm w-40"
            />
            <button className="text-gray-400 hover:text-gray-600 ml-2">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Input: Date */}
          <div className="flex items-center bg-white rounded-xl px-4 py-4 shadow">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-gray-500 text-xl"
            />
            <select className="ml-2 focus:outline-none text-base text-gray-400 placeholder-gray-400  w-28">
              <option>Date</option>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
          </div>

          {/* Input: Location */}
          <div className="flex items-center bg-white rounded-xl px-4 py-4 shadow">
          <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gray-500 text-xl"
            />
            <select className="ml-2 focus:outline-none text-gray-400 placeholder-gray-400 text-base w-30">
              <option>Location</option>
              <option>Hanoi</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>

          {/* Button: Find Ticket */}
          <button className="bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl shadow hover:bg-blue-700">
            Find Ticket
          </button>
        </div>
      </div>

      {/* concert list */}
      <ConcertList/>

      <div>
        <h3>AAA</h3>
      </div>
    </nav>
  );
};

export default Navigation;
