import React from 'react';
import { Link } from 'react-router-dom';
import bg_login from '../../assets/images/login.png';
const Signup = () => {
  return (
    <div
      style={{
        background: `url('${bg_login}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom-left'
      }}
      className=' h-screen flex justify-center items-center'
    >
      {/* Log In card section */}
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <div className="card-actions justify-center">
            {/* Name field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
            </div>
            {/* Email field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
            </div>
            <button className="btn w-full">Sign Up</button>
            <p><small>Already have an account? <Link to='/login' className=' text-[#19D3AE]'>Sign Up Here</Link></small></p>
          </div>
          <div className="divider">OR</div>
          <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
        </div>
      </div> 
    </div>
  );
};

export default Signup;