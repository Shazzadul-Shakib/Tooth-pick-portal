import React from 'react';
import quotation from '../../assets/icons/quote.svg';
import img1 from '../../assets/images/people1.png';
import img2 from '../../assets/images/people2.png';
import img3 from '../../assets/images/people3.png';
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
                <p>Best Dentist and dental staff in the city ! The new office is amazing; state-of-the-art equipment & the decor rivals any high end office around. I actually look forward to going to the dentist again & again.</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img1} alt='customer-1'/>
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
                <p>Great service and care! from front desk to the Doctor and the stuff . Dr. Shihabur Rahman is an awesome Dentist, also friendly, professional, and helpful. I am very happy and pleased with his work. Highly recommend everybody to go there and take their service.</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img2} alt='customer-2'/>
                </div>
              </div>
              <div>
                <h6 className=' text-lg font-semibold text-[#19D3AE]'>Mazon Carry</h6>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-full  bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body  justify-center items-center  ">
              <div className=' text-center my-10'>
                <p>I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Shihabur Rahman and his staffs . I was always very anxious going to the dentist but this time at LASER DENTAL, my experience was so painless and relaxed their was no discomfort whatsoever.</p>
            </div>
            <div className=' flex justify-center items-center'>
              <div className="avatar mr-5">
                <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img3} alt='customer-3'/>
                </div>
              </div>
              <div>
                <h6 className=' text-lg font-semibold text-[#19D3AE]'>Misi Torentto</h6>
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