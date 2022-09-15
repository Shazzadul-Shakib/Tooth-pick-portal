import React from 'react';
import Hero_ap from './Hero_ap';
import Services_ap from './Services_ap';


const Appointment = () => {
  return (
    <div>
      {/* Appointment banner */}
      <Hero_ap />
      {/* Services section */}
      <Services_ap/>
    </div>
  );
};

export default Appointment;