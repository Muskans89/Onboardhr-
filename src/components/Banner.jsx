import React from 'react';
import backgroundImg from '../assets/bg.png'; // Make sure this path points to your background image

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Executive Search, RPO, and Contingency Recruiting
        </h1>
        <p className="text-sm md:text-lg mb-8">
          Our unique approach and comprehensive technical recruiting services set Rocket apart from the rest.
          We combine in-house AI and expert recruiters to deliver an experience unparalleled in the industry.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-8"> 
          <button className="bg-pink-500 text-white px-6 py-4 rounded-md text-lg font-semibold w-full md:w-auto">
            Our Approach
          </button>
          <button className="bg-white text-blue-900 px-6 py-4 rounded-md text-lg font-semibold w-full md:w-auto">
            Our Offerings
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
