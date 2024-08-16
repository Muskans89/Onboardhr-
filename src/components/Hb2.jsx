import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-12" style={{ backgroundColor: '#2db6c9' }}>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get better candidates, faster, with higher close rates.
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 md:p-6 px-10 md:rounded-lg shadow-md w-full md:w-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">2X</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-white p-6 md:p-6 px-10 md:rounded-lg shadow-md w-full md:w-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">40,000+</h3>
          <p className="text-gray-600">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-white p-6 md:p-6 px-10 md:rounded-lg shadow-md w-full md:w-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">80%</h3>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
