import React, { useState } from 'react';
import Hero_ap from './Hero_ap';
import Services_ap from './Services_ap';


const Appointment = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <div>
      {/* Appointment banner */}
      <Hero_ap selectedDay={selectedDay} setSelectedDay={setSelectedDay}  />
      {/* Services section */}
      <Services_ap selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
    </div>
  );
};

export default Appointment;