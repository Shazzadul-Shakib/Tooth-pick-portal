import React from 'react';
import About from './About';
import Appointment_h from './Appointment_h';


import Hero from './Hero';
import Services from './Services';
import Testimonial from './Testimonial';
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero/>
      {/* About section */}
      <About />
      {/* Services section */}
      <Services />
      {/* Appointment section*/}
      <Appointment_h />
      {/* Testimonial section */}
      <Testimonial/>
    </div>
  );
};

export default Home;