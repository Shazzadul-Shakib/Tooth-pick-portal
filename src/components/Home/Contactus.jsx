import React from 'react';
import bg from '../../assets/images/appointment.png';
const Contactus = () => {
  return (
    <div>
      <div className="hero min-h-fit" style={{ backgroundImage: `url('${bg}')` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen sm:max-w-md my-8" >
            <div>
              <h5 className=' text-[#19D3AE] font-bold'>Contact Us</h5>
              <h3 className=' text-white font-semibold text-2xl my-5'>Stay connected with us</h3>
            </div> 
            <div>
              <input type="text" placeholder="Email address"
                className="input input-bordered input-info text-black w-full max-w-xs my-3" />
              <input type="text" placeholder="Subject"
                className="input input-bordered input-info text-black w-full max-w-xs my-3" />
              <textarea className="textarea textarea-info text-black w-full max-w-xs my-3" placeholder="Your message"></textarea> 
            </div>
            <button className="btn btn-success text-white mt-8">Submit</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;