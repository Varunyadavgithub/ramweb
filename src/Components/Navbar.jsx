import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHandshake,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../assets/RWSlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 bg-white border-b border-gray-200 relative z-20">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Company-logo" className="h-28 w-32" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHandshake} className="text-[#034067]" />
            <Link to="/courses">
              <span className="font-semibold text-[#034067] hover:cursor-pointer">
                OUR COURSES
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-[#034067]" />
            <Link to="/about">
              <span className="font-semibold text-[#034067] hover:cursor-pointer">
                ABOUT US
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#034067]" />
            <Link to="/contect">
              <span className="font-semibold text-[#034067] hover:cursor-pointer">
                CONTACT
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pr-5 h-10">
          <FontAwesomeIcon
            icon={isMenuOpen ? faClose : faBars}
            onClick={toggleMenu}
            className="h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 w-full bg-white z-30 animate-slide-down">
            <div className="flex flex-col p-4 space-y-4 pt-20">
              <div className="absolute top-4 right-4" onClick={toggleMenu}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <div className="text-center">
                <img src={logo} alt="Company Logo" className="h-24 w-28" />
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faHandshake} />
                <span className="font-semibold">OUR COURSES</span>
              </div>

              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} />
                <span className="font-semibold">ABOUT US</span>
              </div>

              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} />
                <span className="font-semibold">CONTACT</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
