import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from '../assets/logo.png'; // Correct import path for the logo

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
          <NavLink to="/"> {/* Use NavLink to route to home */}
            <img src={logo} alt="logo" className="h-16 w-28 -ml-10" /> {/* Adjusted logo size and margin */}
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 items-center mr-4"> {/* Adjusted right margin */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-2xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-2xl px-4 py-2 rounded-md"
            }
          >
            Services
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/expertise"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-medium text-2xl px-4 py-2 rounded-md flex items-center"
                  : "text-gray-600 hover:text-gray-900 font-medium text-2xl px-4 py-2 rounded-md flex items-center"
              }
            >
              Expertise <svg className="ml-1 w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M7 7l3 3 3-3H7z" /></svg>
            </NavLink>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Startups & Scale Ups</NavLink>
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Enterprise</NavLink>
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tech</NavLink>
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sales & Marketing</NavLink>
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Finance, HR & Ops</NavLink>
            </div>
          </div>

          <div className="relative group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-medium text-2xl px-4 py-2 rounded-md flex items-center"
                  : "text-gray-600 hover:text-gray-900 font-medium text-2xl px-4 py-2 rounded-md flex items-center"
              }
            >
              About Us <svg className="ml-1 w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M7 7l3 3 3-3H7z" /></svg>
            </NavLink>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Locations</NavLink>
              <NavLink to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Who We Are</NavLink>
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium text-2xl px-4 py-2 rounded-md"
                : "text-gray-600 hover:text-gray-900 font-medium text-2xl px-4 py-2 rounded-md"
            }
          >
            Blog
          </NavLink>

          {/* Show "Contact Us" button only on desktop */}
          <NavLink
            to="/contact"
            className="bg-customBlue text-white px-5 py-2 rounded-md hover:bg-blue-600 font-medium text-lg hidden md:inline-block mr-0"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> {/* Hamburger icon */}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="w-2/3 h-full bg-white shadow-lg p-8">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> {/* Close icon */}
                </svg>
              </button>
              <nav className="flex flex-col space-y-4">
                <NavLink to="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Home</NavLink>
                <NavLink to="/services" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Services</NavLink>
                <NavLink to="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Expertise</NavLink>
                <NavLink to="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg">About Us</NavLink>
                <NavLink to="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg">Blog</NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
