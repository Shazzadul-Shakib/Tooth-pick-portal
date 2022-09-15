import React from 'react';
import footer_bg from '../../assets/images/footer.png';
const Footer = () => {
  return (
    <div
      style={{
        background: `url('${footer_bg}')`,
        backgroundSize: 'cover',
        backgroundPosition:'center'
      }}
      className=' my-10'
>
      <footer className="footer p-10 md:justify-around  text-[#3A4256]">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div> 
        <div>
          <span className="footer-title">ORAL HEALTH</span> 
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teeth Whitening</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className=' text-center my-10'>
        <p>Copyright © 2022 - All right reserved by Shazzadul_Shakib</p>
      </div>
    </div>
  );
};

export default Footer;