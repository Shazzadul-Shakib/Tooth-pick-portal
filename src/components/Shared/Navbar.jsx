import React from 'react';

const Navbar = () => {
  return (
  <div className="navbar bg-base-100 justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* Mobile menu bar */}
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-[#3A4256] text-white rounded-box w-52">
          <li className=' mx-3'><a>Home</a></li>
          <li className=' mx-3'><a className="justify-between"> Appointment </a></li>
          <li className=' mx-3'><a>About</a></li>
        </ul>
      </div>
      <h1 className="btn btn-ghost normal-case text-xl">ToOOTH PICK</h1>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li className=' mx-3'><a>Home</a></li>
        <li className=' mx-3'><a className="justify-between"> Appointment </a></li>
        <li className=' mx-3'><a>About</a></li>
      </ul>
    </div>
      {/* <div className="navbar-end"> */}
        <a className="btn">Log In</a>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#3A4256] text-white rounded-box w-52 ">
          <li><a className="justify-end">Profile</a></li>
          <li><a className="justify-end">Logout</a></li>
        </ul>
      </div>
    </div>
  // </div>
  );
};

export default Navbar;

