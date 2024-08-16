import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/Header';
import Hero from '../components/Herosection';
import Clients from '../components/Clients';
import Hb2 from '../components/Hb2';
import Hb3 from '../components/Hb3';
import Hb4 from '../components/Hb4';
import Hb5 from '../components/Hb5';
import Hb6 from '../components/Hb6';
import Hb7 from '../components/Hb7';
import Hb8 from '../components/Hb8';
import Hb9 from '../components/Hb9';
import Footer from '../components/Footer';
function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Hb2 />
      <Hb3 />
      <Hb4 />
      <Hb5 />
      <Hb6 />
      <Hb7 />
      <Hb8 />
      <Hb9 />
      <Footer />



     
   
      
      {/* Add more components or content here as needed */}
    </div>
  );
}

export default HomePage;
