import React from 'react';
import image from '../assets/bg4.png'; // Replace with your correct image path

const RecruitersSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Image and Heading */}
        <div className="mb-8">
          <img src={image} alt="Recruiter and AI" className="mx-auto mb-4 w-3/4 md:w-1/2" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Recruiters for what they do best, <br /> AI for the rest.
          </h2>
        </div>
        
        {/* Description Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              Our propriety software uses <strong>200+ candidate attributes</strong> and <strong>7+ years of AI data model training</strong> to find perfect-fit candidates, sourcing for complex job requirements using highly granular and industry-specific filters.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              Our tech recruiters <strong>engage 5x as many candidates in half the time.</strong> This means we focus on client and candidate experience, instead of low-value administrative stuff.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <button className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
