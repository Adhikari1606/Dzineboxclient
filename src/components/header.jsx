import React, { useState } from "react";
import { Link, useLocation } from "react-router";

import ContactFormPopover from "./contact";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    /*[#62ABAB]*/
      <header className="bg-gradient-to-r from-[#01C2CC] from-40% via-sky-500 via-60% to-indigo-500 to-90% ... text-white sticky top-0 z-100 ">
        <div className="max-w-7xl  ">
          <div className="flex items-center justify-between py-2 px-4 sm:px-6 lg:px-10 w-[100vw]">
            {/* Logo Section */}
            <div className="">
              <Link to={"/"} className="text-2xl font-bold">
                <img
                  src="/logo_nobg.png"
                  alt="Logo"
                  className="h-[8vh] w-auto object-contain"
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                />
              </Link>
            </div>

            {/* Navigation Menu (Desktop) */}
            <nav className="hidden md:flex space-x-10 text-md tracking-wider font-[600]">
              <Link
                to="/"
                className={`hover:underline underline-offset-3 transition-all ${
                  path === "/" ? "text-white underline" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:underline underline-offset-3 transition-all ${
                  path === "/about" ? "text-white underline" : ""
                }`}
              >
                About us
              </Link>
              <Link
                to="/services"
                className={`hover:underline underline-offset-3 transition-all ${
                  path === "/services" ? "text-white underline" : ""
                }`}
              >
                Our Services
              </Link>
              <Link
                to="/portfolio"
                className={`hover:underline underline-offset-3 transition-all ${
                  path === "/portfolio" ? "text-white underline" : ""
                }`}
              >
                Portfolio
              </Link>
            </nav>

            {/* Call-to-Action Button (Desktop) */}
            <div className="hidden md:block space-x-2">
              <a
                href="/careers"
                className="bg-transparent outline  text-white py-3  px-6 rounded-full text-sm transition-all"
              >
                Careers
              </a>
              <ContactFormPopover />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                id="menu-button"
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden space-y-4 overflow-hidden px-4 bg-gradient-to-r from-[#01C2CC] from-40% via-sky-500 via-60% to-indigo-500 to-90% ...  sm:px-6 lg:px-8  ${
            isMobileMenuOpen
              ? "h-48 transition-all ease-in-out duration-100"
              : "h-0 transition-all ease-in-out duration-100"
          }`}
        >
          <a
            href="/"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
