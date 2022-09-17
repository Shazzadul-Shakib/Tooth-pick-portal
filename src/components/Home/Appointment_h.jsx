import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const Appointment_h = () => {
  return (
    <div className='  my-10'>
      <div className=" flex justify-center items-center bg-no-repeat" style={{ backgroundImage: `url('${bg}')` }}>
        <div className='flex-1 hidden lg:block'>
          <img className='  mt-[-200px]' src={doctor} alt="doctor" />
        </div>
        <div className='flex-1 p-8'>
          <h5 className=' text-[#19D3AE] font-bold'>Appointment</h5>
          <h3 className=' text-white font-semibold text-3xl my-5'>Make an appointment Today</h3>
          <p className='text-white font-semibold text-sm my-6'>We provide sophisticated 3D Intraoral Scanning, Cosmetic Digital Smile Design, Laser dentistry along with standard services like Crowns, Bridges, Dental Implants, Braces and General Dentistry. All services are performed with precision and sophistication. The results are amazing. Thats why our clients come from as far away as USA, Canada, Switzerland, France, Germany, and many others. Dr. Shihabur Rahman is recognised by some of the nation’s top celebrities as the go-to dentist for dental beauty care.</p>
          <Link to='/appointment'> <button className="btn btn-success text-white">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment_h;