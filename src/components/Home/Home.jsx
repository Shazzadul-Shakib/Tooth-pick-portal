import React from 'react';
import chair from '../../assets/images/chair.png';
import bg_hero from '../../assets/images/bg.png';
const Home = () => {
  return (
    <div>
      <div
        style={{background: `url('${bg_hero}')`}}
        className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" max-w-auto lg:max-w-xl rounded-lg shadow-2xl" alt='Chair'/>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className="btn btn-success text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;