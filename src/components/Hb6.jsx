import React, { useState } from 'react';
import image1 from '../assets/bg6.png'; // Replace with your correct image paths
import image2 from '../assets/bg5.png'; // Replace with your correct image paths
import rightImage from '../assets/bg7.jpg'; // Add your right-side image path

const RolesSection = () => {
  const [selectedTab, setSelectedTab] = useState('Engineering');

  const tabs = ['Engineering', 'AI/ML & Data', 'Product & Design', 'Sales & Marketing', 'Executive Search', 'Finance & Operations', 'Gaming'];

  const roles = {
    Engineering: ['Frontend Engineer', 'Backend Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Software Architect'],
    'AI/ML & Data': ['ML Research Engineer', 'ML Research Scientist', 'AI Engineer', 'Deep Learning Engineer', 'Data Scientist'],
    'Product & Design': ['Product Manager', 'UI/UX Designer', 'Graphic Designer', 'Creative Director'],
    'Sales & Marketing': ['Sales Manager', 'Marketing Specialist', 'Brand Strategist'],
    'Executive Search': ['Executive Assistant', 'Chief of Staff'],
    'Finance & Operations': ['Finance Manager', 'Operations Director'],
    Gaming: ['Game Developer', 'Game Designer', 'Character Artist'],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto text-center px-4 md:px-0"> {/* Added padding for mobile view */}
        <div className="flex justify-center mb-6">
          <img src={image1} alt="Space 1" className="h-24 hidden md:block" />
          <h2 className="text-3xl md:text-4xl font-bold mx-4">
            Roles Placed From A to Z
          </h2>
          <img src={image2} alt="Space 2" className="h-24 hidden md:block" />
        </div>

        {/* Desktop Tab Navigation */}
        <div className="hidden md:flex justify-center space-x-12 mb-4 border-b-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-bold text-black ${selectedTab === tab ? 'border-b-2 border-black' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden flex overflow-x-scroll space-x-4 pb-2 mb-4 border-b-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 whitespace-nowrap font-bold text-black ${selectedTab === tab ? 'border-b-2 border-black' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Roles List with Image on Right */}
        <div className="md:flex justify-between items-start">
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-left">
              {roles[selectedTab].slice(0, Math.ceil(roles[selectedTab].length / 2)).map((role, index) => (
                <li key={index} className="text-gray-700 list-disc ml-5">{role}</li>
              ))}
            </ul>
            <ul className="text-left">
              {roles[selectedTab].slice(Math.ceil(roles[selectedTab].length / 2)).map((role, index) => (
                <li key={index} className="text-gray-700 list-disc ml-5">{role}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-end mt-12 md:mt-0 hidden md:block">
            <img src={rightImage} alt="Illustration" className="w-64 h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
