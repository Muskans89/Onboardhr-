import React from 'react';

const HowWeWorkSection = () => {
  return (
    <section style={{ backgroundColor: '#2db6c9' }} className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">How We Work With You</h2>
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Executive Search</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contingency Recruiting</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Embedded Recruiting</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-4">
          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Executive Search</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2 text-left">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Contingency Recruiting</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2 text-left">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Embedded Recruiting</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio sit amet lorem sollicitudin facilisis.
            </p>
            <ul className="text-left space-y-2 text-left">
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem ipsum dolor sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Consectetur adipiscing elit</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Donec ac odio sit amet</span></li>
              <li className="text-green-500">✔ <span className="text-gray-600">Lorem sollicitudin facilisis</span></li>
            </ul>
          </div>
        </div>

        <button className="mt-12 bg-pink-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
