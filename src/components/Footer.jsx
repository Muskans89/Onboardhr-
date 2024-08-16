import React from 'react';
import backgroundImg from '../assets/logo.png'; // Correct path for the logo

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <img src={backgroundImg} alt="Logo" className="h-16 w-20" /> {/* Use the imported image path */}
          </div>
          <div className="flex space-x-16">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-500">Contact</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-500">Startups & Scale Ups</a>
              <a href="#" className="text-gray-500">Enterprise</a>
              <a href="#" className="text-gray-500">Tech</a>
              <a href="#" className="text-gray-500">Sales & Marketing</a>
              <a href="#" className="text-gray-500">Finance, HR & Ops</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-500">Locations</a>
              <a href="#" className="text-gray-500">Who We Are</a>
              <a href="#" className="text-gray-500">Blog</a>
              <a href="#" className="text-gray-500">Careers</a>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col items-center space-y-4 text-center">
          <img src={backgroundImg} alt="Logo" className="h-16 w-20 mb-4" /> {/* Use the imported image path */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-500">Sales & Marketing</a>
            <a href="#" className="text-gray-500">Finance, HR & Ops</a>
            <a href="#" className="text-gray-500">Locations</a>
            <a href="#" className="text-gray-500">Who We Are</a>
            <a href="#" className="text-gray-500">Blog</a>
            <a href="#" className="text-gray-500">Careers</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Neatly Technologies, Inc. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
