import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';
import Banner3 from '../components/Banner3';
import Banner4 from '../components/Banner4';
import Banner5 from '../components/Banner5';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Footer />

      {/* Add more components or content here as needed */}
    </div>
  );
}

export default HomePage;
