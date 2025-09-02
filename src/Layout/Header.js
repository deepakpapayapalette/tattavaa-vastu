import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png"; // Ensure you have a logo image at this path
import  "../assets/css/Header.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-2.5">
      <div className="container mx-auto  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="" style={{ maxWidth: '138px' }}
          /> 
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="text-yellow-600 font-semibold">
            Home
          </a>
          <a href="#">About Us</a>
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Service</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
            </div>
          </div>
          <a href="#">Shop</a>
          <a href="#">Training Classes</a>
          <a href="#">News & Article</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block login-btn" >
          <button className="px-5 py-1.5  text-[#cda202] rounded-md hover:bg-[#cda202] hover:text-white transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700">
            <a href="#" className="text-yellow-600 font-semibold">Home</a>
            <a href="#">About Us</a>
            <a href="#">Service</a>
            <a href="#">Shop</a>
            <a href="#">Training Classes</a>
            <a href="#">News & Article</a>
            <a href="#">Contact Us</a>
            <button className="mt-2 px-5 py-1.5 border border-[#cda202] text-[#cda202] rounded-md hover:bg-[#cda202] hover:text-white transition">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
