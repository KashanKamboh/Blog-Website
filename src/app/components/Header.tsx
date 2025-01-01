"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for open/close menu

const Header = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md font-sans tracking-wide bg-green-900 relative z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 min-h-[70px]">
        {/* Logo Section */}
        <h1 className="font-bold text-white text-2xl md:text-3xl">Travel Blog</h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 font-medium">
            Home
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300 font-medium">
            Blogs
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-green-950 shadow-lg z-50 overflow-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Logo in Mobile Menu */}
          <h1 className="font-bold text-white text-3xl mb-8">Travel Blog</h1>
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className="block text-white font-medium hover:text-gray-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-white font-medium hover:text-gray-300"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-white font-medium hover:text-gray-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-white font-medium hover:text-gray-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
