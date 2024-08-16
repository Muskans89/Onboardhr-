import React from 'react';
import backgroundImg from '../assets/bg.png'; // Make sure this path points to your background image

const BeyondLinkedInSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Content */}
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-9">We Go Beyond LinkedIn</h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur metus ut est facilisis, non interdum metus ultrices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at sagittis massa.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Dolor Sit Amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at sagittis massa.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Consectetur Adipiscing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at sagittis massa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondLinkedInSection;
