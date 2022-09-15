import React from 'react';
import chair from '../../assets/images/chair.png';
import bg_hero from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Hero_ap = ({selectedDay, setSelectedDay}) => {
  return (
    <div>
      <div
        style={{background: `url('${bg_hero}')`}}
        className="hero min-h-full md:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" max-w-auto lg:max-w-xl rounded-lg shadow-2xl" alt='Chair'/>
          <div className='mr-10 drop-shadow-2xl'>
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_ap;