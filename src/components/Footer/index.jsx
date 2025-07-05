import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Disclaimer */}
        <p className="mb-4 border-b border-gray-300 pb-4">
          * Listed pricing is for illustrative purposes only. Final pricing may vary.
        </p>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          <div>
            <h3 className="text-black font-semibold mb-2">Shop and Learn</h3>
            <ul className="space-y-1">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple One</li>
              <li>Apple Books</li>
              <li>Apple Podcasts</li>
              <li>App Store</li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-2">Apple Store</h3>
            <ul className="space-y-1">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Camp</li>
              <li>Ways to Buy</li>
              <li>Recycling</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-2">For Business</h3>
            <ul className="space-y-1">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
            <h3 className="text-black font-semibold mt-4 mb-2">For Education</h3>
            <ul className="space-y-1">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-2">Apple Values</h3>
            <ul className="space-y-1">
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supplier Responsibility</li>
            </ul>
            <h3 className="text-black font-semibold mt-4 mb-2">About Apple</h3>
            <ul className="space-y-1">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-4 text-xs text-[#6e6e73] flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Location */}
          <p className="mb-2 md:mb-0">India</p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales Policy</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-xs">&copy; 2025 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
