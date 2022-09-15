import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
const Services = () => {
  return (
    <div className=' my-32'>
      <h6 className=' text-center text-xl text-[#19D3AE]'>Our Services</h6>
      <h5 className=' text-center text-2xl text-[#3A4256]'>Services We Provide</h5>
        <div className=' grid grid-cols-1 gap-5 m-5 md:grid-cols-3 '>
        {/* Card-1 */}
        <div className="card w-full bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body justify-center items-center ">
            <div className='flex flex-col items-center'>
              <img className='  mb-8' src={fluoride} alt="clock" />
              <div className=' text-center'>
                <h2 className=" text-xl mb-2">Fluoride Treatment</h2>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card-2 */}
        <div className="card w-full bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body justify-center items-center ">
            <div className=' flex flex-col items-center'>
              <img className=' mb-8' src={cavity} alt="clock" />
              <div className=' text-center'>
                <h2 className=" text-xl mb-2">Cavity Filling</h2>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card-3 */}
        <div className="card w-full  bg-white text-[#3A4256] drop-shadow-xl">
          <div className="card-body  justify-center items-center  ">
            <div className=' flex flex-col items-center'>
              <img className=' mb-8' src={whitening} alt="clock" />
              <div className=' text-center'>
                <h2 className="text-xl mb-2">Teeth Whitening</h2>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Another card */}
      <div className='  flex justify-center md:flex-col '>
      <div className="hero  min-h-full md:min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <img src={treatment} className=" max-w-auto md:max-w-sm rounded-lg shadow-2xl lg:mr-10" alt='Chair'/>
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, <br/> on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-success text-white">Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;