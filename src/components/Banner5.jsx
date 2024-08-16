import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center px-4"> {/* Added px-4 for mobile padding */}
        <h2 className="text-4xl font-bold mb-4">Lorem Ipsum Dolor Sit Amet?</h2>
        <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Lorem Ipsum
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
