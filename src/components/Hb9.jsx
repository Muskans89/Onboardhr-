import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          The tech recruiters of choice for high-growth companies
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Ready to supercharge your hiring?
        </p>
        <button className="bg-customBlue text-white font-semibold py-3 px-6 rounded-md w-full md:w-auto hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
