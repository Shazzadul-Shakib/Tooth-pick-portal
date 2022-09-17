import React from 'react';
import chair from '../../assets/images/chair.png';
import bg_hero from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <div
        style={{background: `url('${bg_hero}')`}}
        className="hero min-h-full md:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" max-w-auto lg:max-w-xl rounded-lg shadow-2xl" alt='Chair'/>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Welcome to our ToOOTH PICK portal. We provide the best of services with a number of facilities which might the customer love to have.So why late make an appointment here and take your desire treatment now.</p>
           <Link to='/appointment'> <button className="btn btn-success text-white">Book Now</button></Link>
          </div>
        </div>
      </div>
  );
};

export default Hero;