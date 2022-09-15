import React from 'react';
import quotation from '../../assets/icons/quote.svg';
const Testimonial = () => {
  return (
    <div className=' my-10 mx-10'>
      {/* header section */}
      <div className=' flex justify-between items-center'>
        {/* Text section */}
        <div>
          <h5 className=' text-[#19D3AE] font-bold'>Testimonial</h5>
          <h3 className='  font-semibold text-3xl my-5'>What Our Patients Says</h3>
        </div>
        {/* quotation section */}
        <div>
          <img className=' w-24 md:w-[192px]' src={quotation} alt="" />
        </div>
      </div>
      {/* Card section */}
      <div className=' grid grid-cols-1 gap-5 md:grid-cols-3'>
        {/* card-1 */}
        <div className="card w-full  bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body  justify-center items-center  ">
              <div className=' text-center my-10'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <h6 className=' text-lg font-semibold text-[#19D3AE]'>Winson Herry</h6>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        {/* card-2*/}
        <div className="card w-full  bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body  justify-center items-center  ">
              <div className=' text-center my-10'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <h6 className=' text-lg font-semibold text-[#19D3AE]'>Winson Herry</h6>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-full  bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body  justify-center items-center  ">
              <div className=' text-center my-10'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <h6 className=' text-lg font-semibold text-[#19D3AE]'>Winson Herry</h6>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;