import React from 'react';
import Slider from 'react-slick';

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500, // Speed of transition
    slidesToShow: 3, // Show 3 slides at a time by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time between each slide
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 768, // Screen width where the layout changes
        settings: {
          slidesToShow: 1, // Show 1 slide at a time in mobile view
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 w-full">Happy Clients & Candidates</h2>
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg h-full flex flex-col justify-between" style={{ minHeight: '400px' }}>
              <div>
                <img src="https://via.placeholder.com/150" alt="Client 1" className="mx-auto rounded-full mb-4" />
                <p className="text-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-yellow-500">Alice Johnson</p>
                <p className="text-gray-700">CMO, Test Ltd</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg h-full flex flex-col justify-between" style={{ minHeight: '400px' }}>
              <div>
                <img src="https://via.placeholder.com/150" alt="Client 2" className="mx-auto rounded-full mb-4" />
                <p className="text-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-yellow-500">John Doe</p>
                <p className="text-gray-700">CEO, Example Corp</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg h-full flex flex-col justify-between" style={{ minHeight: '400px' }}>
              <div>
                <img src="https://via.placeholder.com/150" alt="Client 3" className="mx-auto rounded-full mb-4" />
                <p className="text-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-yellow-500">Jane Smith</p>
                <p className="text-gray-700">CTO, Sample Inc</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
