import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from './Spinner';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logout = () => {
  signOut(auth);
  };
  if (loading) {
    return <Spinner />;
  }
  // let profileName =;

  return (
  <div className="navbar bg-base-100 justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* Mobile menu bar */}
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-[#3A4256] text-white rounded-box w-52">
          <li className=' mx-3'><Link to='/'>Home</Link></li>
          <li className=' mx-3'><Link to='/appointment'>Appointment</Link></li>
          <li className=' mx-3'><Link to='/about'>About</Link></li>
        </ul>
      </div>
      <h1 className="btn btn-ghost normal-case text-xl text-[#19D3AE]">ToOOTH PICK</h1>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li className=' mx-3'><Link to='/'>Home</Link></li>
        <li className=' mx-3'><Link to='/appointment'>Appointment</Link></li>
        <li className=' mx-3'><Link to='/about'>About</Link></li>
      </ul>
    </div>
      {/* <div className="navbar-end"> */}
      
      {user?<div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user.photoURL ? <img src={user.photoURL} alt='profile' />
              : <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-xl">{ user.displayName.split(' ')[0].split('')[0]}</span>
                </div>
              </div> }
          </div>
        </label>
        {/* Profile card  */}
          <div className=" dropdown-content card w-72 md:w-96 bg-[#3A4256] text-white shadow-xl">
          <div className="card-body">
            {/* Avatar section in card */}
            <div className="avatar justify-center my-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user.photoURL ? <img src={user.photoURL} alt='profile' />
              : <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                  <span className="text-3xl uppercase">{ user.displayName.split(' ')[0].split('')[0]}</span>
                </div>
              </div> }
              </div>
            </div>            
              <h2 className="card-title justify-center">{user.displayName}</h2>
              <p className=' text-center'>{user.email}</p>
            <div className=' flex justify-center'>
              <Link to='/yourappointment'><button className="btn btn-outline btn-accent  ">My Appointments</button></Link>
            </div>
            <div className="divider"></div> 
            <div className=' flex justify-center'>
              <button
                onClick={logout}
                className="btn btn-outline text-white">Log Out</button>
            </div>
            </div>
          </div>
      </div> : <Link to='/login'><button className="btn mr-2">Log In</button></Link>}
    </div>
  // </div>
  );
};

export default Navbar;

