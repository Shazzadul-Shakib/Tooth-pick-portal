import React from 'react';

const Services_ap = () => {
  return (
    <div className=' m-10'>
      <h5 className=' text-[#19D3AE] font-bold text-center' >Available Services on April 30, 2022</h5>
      <h5 className=' font-medium text-center text-[#939393]' >Please select a service.</h5>
      {/* cards section */}
      <div className=' my-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {/* card-1 */}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Teeth Orthodontics</button>
          </div>
        </div>        
        {/* card-2*/}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Cosmetic Dentistry</button>
          </div>
        </div>        
        {/* card-3 */}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Teeth Cleaning</button>
          </div>
        </div>        
        {/* card-4 */}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Cavity Protection</button>
          </div>
        </div>        
        {/* card-5 */}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Pediatric Dental</button>
          </div>
        </div>        
        {/* card-6 */}
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body justify-center items-center">
            <button className=" text-[#19D3AE] font-bold ">Oral Surgery</button>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Services_ap;