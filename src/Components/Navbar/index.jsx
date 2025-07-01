import React, { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch",
  "AirPods", "TV & Home", "Entertainment",
  "Accessories", "Support"
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 bg-[#f5f5f7] text-[#1d1d1f] z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center h-12">
          {/* Apple Logo */}
          <div className="text-[18px]">
            <FaApple />
          </div>

          {/* Nav Items */}
          <ul className="hidden md:flex space-x-6 text-[12px] font-normal items-center justify-center">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black">{item}</a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-[14px]">
            <FaSearch className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-[18px]">
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {isMobileOpen && (
          <ul className="md:hidden flex flex-col py-4 space-y-3 text-[13px] border-t border-gray-300">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block py-1 hover:text-black">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
