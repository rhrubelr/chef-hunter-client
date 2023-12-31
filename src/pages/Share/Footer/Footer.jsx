import React from 'react';
import img from '../../../assets/footer-img.png'

const Footer = () => {
    return (
        <> 
        <footer className="mt-5 footer p-10 bg-black text-white">
  <div>
    <img className='w-[250px] h-[200px]' src={img} alt="" />
    
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">hunter</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy receipy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>

  
</footer>
</>
    );
};

export default Footer;