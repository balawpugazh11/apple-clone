import React, { useState } from "react";
import { FaApple, FaStore, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const AppleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <div className="font-sans text-gray-800">
      <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-sm w-full">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Left: Apple Logo */}
          <a href="#" className="hover:text-black">
            <FaApple className="h-5 w-5" />
          </a>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex space-x-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-black flex items-center gap-1"
              >
                {item === "Store" && <FaStore className="inline-block" />}
                {item}
              </a>
            ))}
          </div>

          {/* Right: Search + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-black">
              <FaSearch className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block hover:text-black border-b border-gray-200 py-1"
              >
                {item === "Store" && (
                  <span className="inline-block mr-1">
                    <FaStore className="inline-block" />
                  </span>
                )}
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default AppleNavbar;
