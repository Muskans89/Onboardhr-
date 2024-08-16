import React from 'react';
import logo from '../assets/logo.png'; // Ensure this path is correct

const LogosSection = () => {
  // Here we're using the same logo file path for all logos
  const logos = new Array(10).fill(logo); // Array with 10 elements, all pointing to the same logo

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logoSrc, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logoSrc}
                alt={`Logo ${index + 1}`}
                className="max-h-16 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
