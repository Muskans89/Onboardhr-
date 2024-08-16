import React from 'react';
import image1 from '../assets/bg3.png'; // Image used in both desktop and mobile view (left side for desktop)
import image2 from '../assets/bg2.png'; // Image used in both desktop and mobile view (right side for desktop)

const ModernRecruitingSection = () => {
  return (
    <section className="py-4"> {/* Reduced padding at the top to bring the heading closer to the top */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mt-8 text-center">Our Modern Recruiting Approach</h2> {/* Adjusted margin-top */}
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center mt-8"> {/* Added margin-top */}
          <div className="w-1/2 pr-8">
            <p className="text-m text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
            <img src={image1} alt="Typical Agencies" className="w-full h-auto" />
          </div>
          <div className="w-1/2 pl-8">
            <img src={image2} alt="Modern Approach" className="w-full h-auto mb-6" />
            <p className="text-m text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center mt-4"> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-600 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <img src={image1} alt="Typical Agencies" className="w-3/4 h-auto mb-6" />
          <p className="text-lg text-gray-600 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <img src={image2} alt="Modern Approach" className="w-3/4 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ModernRecruitingSection;
