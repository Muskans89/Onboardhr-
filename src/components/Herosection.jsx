import React from 'react';
import backgroundImg from '../assets/bg1.PNG'; // Ensure this path is correct

const HeroSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ipsum ut ultricies malesuada.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
            Lorem Ipsum
          </button>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={backgroundImg} alt="Illustration" className="w-3/4 md:w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
