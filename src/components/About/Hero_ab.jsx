import React from 'react';
import treatment from '../../assets/images/treatment.png';
import bg_hero from '../../assets/images/bg.png';

const Hero_ab = () => {
  return (
      <div
        style={{background: `url('${bg_hero}')`}}
        className="hero min-h-full md:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={treatment} className=" max-w-auto lg:max-w-sm rounded-lg shadow-2xl" alt='Chair'/>
          <div>
            <h1 className="text-5xl font-bold">Welcome to ToOOTH PICK!</h1>
            <p className="py-6">"This is the finest place for dental arts and treatment. We maintain total hygienic condition and use world class equipments and materials. Book now and get an appointment for the best comfort and service."</p>
            <button className="btn btn-success text-white">Book Now</button>
          </div>
        </div>
      </div>
  );
};

export default Hero_ab;