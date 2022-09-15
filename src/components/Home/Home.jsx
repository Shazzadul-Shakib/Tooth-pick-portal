import React from 'react';
import About_h from './About_h';
import Appointment_h from './Appointment_h';
import Contactus from './Contactus';


import Hero from './Hero';
import Services from './Services';
import Testimonial from './Testimonial';
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero/>
      {/* About section */}
      <About_h />
      {/* Services section */}
      <Services />
      {/* Appointment section*/}
      <Appointment_h />
      {/* Testimonial section */}
      <Testimonial />
      {/* contact us section */}
      <Contactus/>
    </div>
  );
};

export default Home;