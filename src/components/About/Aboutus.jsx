import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Aboutus = () => {
  return (
    <div className=' grid grid-cols-1 gap-5 m-5 md:grid-cols-3 '>
      {/* Card-1 */}
      <div className="card w-full bg-success text-primary-content">
        <div className="card-body justify-center ">
          <div className=' flex items-center'>
            <img className=' w-24 mr-5' src={clock} alt="clock" />
            <div>
              <h2 className="card-title mb-2">Opening Hours</h2>
              <p>Mon-fri -- 8 AM-10 PM</p>
            </div>
          </div>
        </div>
      </div>
      {/* Card-2 */}
      <div className="card w-full bg-[#3A4256] text-primary-content">
        <div className="card-body justify-center ">
          <div className=' flex items-center'>
            <img className=' w-24 mr-5' src={marker} alt="clock" />
            <div>
              <h2 className="card-title mb-2">Visit our location</h2>
              <p>Brooklyn, NY 10036, United States</p>
            </div>
          </div>
        </div>
      </div>
      {/* Card-3 */}
      <div className="card w-full bg-[#19D3AE] text-primary-content">
        <div className="card-body justify-center ">
          <div className=' flex items-center'>
            <img className=' w-24 mr-5' src={phone} alt="clock" />
            <div>
              <h2 className="card-title mb-2">Contact us now</h2>
              <p>+000 123 456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;