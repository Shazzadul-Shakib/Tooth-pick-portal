import React from 'react';
import About from './About';


import Hero from './Hero';
import Services from './Services';
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero/>
      {/* About section */}
      <About />
      {/* Services section */}
      <Services/>
    </div>
  );
};

export default Home;