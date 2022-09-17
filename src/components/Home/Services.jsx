import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import { Link } from 'react-router-dom';
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
                <p>Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades</p>
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
                <p>A filling seals a hole, or cavity, in the tooth, preventing further damage, pain, and infection.</p>
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
                <p>Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Another card */}
      <div className='  flex justify-center md:flex-col '>
      <div className="hero  min-h-full md:min-h-screen">
        <div className="hero-content flex-col md:flex-row lg:mx-40">
          <img src={treatment} className=" max-w-auto md:max-w-sm rounded-lg shadow-2xl lg:mr-10" alt='Chair'/>
          <div>
            <h1 className="text-3xl font-bold">Exceptional Dental Care, <br/> on Your Terms</h1>
            <p className="py-6">A person's smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It's our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile.</p>
            <Link to='/appointment'> <button className="btn btn-success text-white">Book Now</button></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;