import React from 'react';
import logo from '../../../public/Screenshot 2024-08-19 162502.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className=' bg-[#07332f] '>
           <footer className="w-[90%] mx-auto lg:grid-flow-col grid-flow-row footer bg-[#07332f]  text-white p-10">
  <aside>
    
    <Image src={logo} alt='logo'></Image>
    <p className='mt-3 text-base text-slate-300'>
    Our family-centered approach to healthcare <br /> ensures that each member of your family <br /> receives
      
      personalized attention.
    </p>
  </aside>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Quick Links</h6>
    <a className="link link-hover text-base font-semibold">Home</a>
    <a className="link link-hover text-base font-semibold">About Us</a>
    <a className="link link-hover text-base font-semibold">Doctors</a>
    <a className="link link-hover text-base font-semibold">Services</a>
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Contact Details</h6>
    <a className="link link-hover text-base font-semibold">Dhanmondi Road No.7, Dhaka</a>
    <a className="link link-hover text-base font-semibold">Healthcare@gmail.com</a>
    <a className="link link-hover text-base font-semibold">+01956230265</a>
    <a className="link link-hover text-base font-semibold">8 AM - 5 PM , Monday - Saturday</a>
  </nav>
  
  <form className='hidden md:block'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Newsletter</h6>
    <h1 className='text-lg font-semibold'>Subscribe To Our Newsletter</h1>
    <p className='text-base text-slate-300 my-1'>Stay informed and never miss out on the <br /> latest news, health tips.</p>
    <fieldset className="form-control w-80 ">
    
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input  join-item bg-transparent btn-outline border-[#eb966e] border-2" />
        <button className="btn bg-[#eb966e] border-[#eb966e] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer> 
<footer className="footer footer-center text-white p-4">
  <aside>
    <p className='text-xl mb-7'>Copyright © {new Date().getFullYear()} - All right reserved by <strong className='text-[#eb966e]'>MediPro</strong> Ltd</p>
  </aside>
</footer>
        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default Footer;