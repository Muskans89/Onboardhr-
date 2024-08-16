import React, { useState } from 'react';
import contingencyImage from '../assets/bg.png'; // Adjust the path as necessary
import executiveImage from '../assets/bg.png'; // Adjust the path as necessary
import rpoImage from '../assets/bg.png'; // Adjust the path as necessary

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('contingency');

  return (
    <section className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Flexible Technical Recruiting Models</h2>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-between items-center border-b-2 pb-4 text-center"> {/* Centered text */}
        <button 
          className={`pb-2 w-1/3 ${activeTab === 'contingency' ? 'border-b-4 border-black' : ''}`} // Equal width for all buttons
          onClick={() => setActiveTab('contingency')}
        >
          Contingency Recruiting
        </button>
        <button 
          className={`pb-2 w-1/3 ${activeTab === 'executive' ? 'border-b-4 border-black' : ''}`}
          onClick={() => setActiveTab('executive')}
        >
          Executive Search
        </button>
        <button 
          className={`pb-2 w-1/3 ${activeTab === 'rpo' ? 'border-b-4 border-black' : ''}`}
          onClick={() => setActiveTab('rpo')}
        >
          RPO
        </button>
      </div>

      {/* Content */}
      <div className="mt-12"> {/* Increased margin-top for content */}
        {activeTab === 'contingency' && (
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 md:pr-16 mb-8 md:mb-0 text-left">
              <h3 className="text-2xl font-bold mb-4">Lorem Ipsum Dolor</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo, nisi a gravida tempus, nunc purus bibendum nulla, in suscipit arcu justo non est.</p>
              <ul className="list-disc list-inside mb-4">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Quisque commodo nisi a gravida tempus</li>
                <li>Nunc purus bibendum nulla</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <img src={contingencyImage} alt="Contingency Recruiting" className="w-full h-auto"/>
            </div>
          </div>
        )}
        {activeTab === 'executive' && (
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 md:pr-16 mb-8 md:mb-0 text-left">
              <h3 className="text-2xl font-bold mb-4">Lorem Ipsum Dolor</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo, nisi a gravida tempus, nunc purus bibendum nulla, in suscipit arcu justo non est.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis erat at eros tristique posuere.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, mauris eget commodo faucibus, nisi est cursus purus, eget sollicitudin augue quam eget sapien.</p>
            </div>
            <div className="md:w-1/3">
              <img src={executiveImage} alt="Executive Search" className="w-full h-auto"/>
            </div>
          </div>
        )}
        {activeTab === 'rpo' && (
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 md:pr-16 mb-8 md:mb-0 text-left">
              <h3 className="text-2xl font-bold mb-4">Lorem Ipsum Dolor</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo, nisi a gravida tempus, nunc purus bibendum nulla, in suscipit arcu justo non est.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, mauris eget commodo faucibus, nisi est cursus purus, eget sollicitudin augue quam eget sapien.</p>
            </div>
            <div className="md:w-1/3">
              <img src={rpoImage} alt="RPO" className="w-full h-auto"/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabSection;
