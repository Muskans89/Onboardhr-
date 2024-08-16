import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-18 w-28 -ml-10" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 items-center mr-4">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/expertise"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
            }
          >
            Industry Practices
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-xl px-4 py-2 rounded-md"
            }
          >
            Contact Us
          </NavLink>

          {/* Show "Contact Us" button only on desktop */}
          <NavLink
            to="/contact"
            className="bg-customBlue  hover:bg-customYellow text-white px-5 py-2 rounded-md  font-medium text-lg hidden md:inline-block mr-0"
          >
           Book a Call
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="w-2/3 h-full bg-white shadow-lg p-8">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <nav className="flex flex-col space-y-4">
                <NavLink to="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Home</NavLink>
                <NavLink to="/services" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Services</NavLink>
                <NavLink to="/expertise" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Industry Practices</NavLink>
                <NavLink to="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg">About Us</NavLink>
                <NavLink to="/contact" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Contact Us</NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
