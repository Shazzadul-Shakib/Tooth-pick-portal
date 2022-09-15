import React from 'react';
import bg from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const Appointment_h = () => {
  return (
    <div className='  my-10 '>
      <div className=" flex justify-center items-center bg-no-repeat" style={{ backgroundImage: `url('${bg}')` }}>
        <div className='flex-1 hidden lg:block'>
          <img className='  mt-[-200px]' src={doctor} alt="doctor" />
        </div>
        <div className='flex-1 p-8'>
          <h5 className=' text-[#19D3AE] font-bold'>Appointment</h5>
          <h3 className=' text-white font-semibold text-2xl my-5'>Make an appointment Today</h3>
          <p className='text-white font-semibold text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <button className="btn btn-success text-white mt-8">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment_h;