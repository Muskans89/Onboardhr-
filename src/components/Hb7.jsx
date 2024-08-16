import React from 'react';
import Slider from 'react-slick';

const LogoSlider = () => {
  const settings = {
    dots: false, // Remove the dots
    infinite: true,
    speed: 3000, // Increase speed for slower movement
    slidesToShow: 5, // Adjust the number of logos you want to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set this to 0 for continuous movement
    cssEase: 'linear', // Ensures smooth continuous movement
    pauseOnHover: false, // Optional: to keep it moving even when hovered
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-8 md:px-12"> {/* Added padding for mobile view */}
        <h2 className="text-3xl font-bold mb-16">VC Partners</h2> 
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi vitae orci aliquet, nec faucibus urna malesuada.
        </p>
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 1" className="mx-auto h-20" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 2" className="mx-auto h-20" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 3" className="mx-auto h-20" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 1" className="mx-auto h-20" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 2" className="mx-auto h-20" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Demo Logo 3" className="mx-auto h-20" />
          </div>
          
          {/* Add more logos as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
