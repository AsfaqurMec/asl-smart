/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import banner from '../../../public/banner.jpg'
// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { useEffect } from 'react';

import img1 from '../../../public/Screenshot 2024-08-19 223339.png'
import img2 from '../../../public/Screenshot 2024-08-19 223353.png'

const Banner = () => {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>

        <div>
       <div className="md:hero bg-[#6152c1] pb-20 lg:pb-0 min-h-screen pt-20">
  <div className="flex md:hero-content flex-col lg:flex-row-reverse px-3 gap-20 lg:gap-0">
    <Image data-aos="fade-up"  data-aos-duration="2000" src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>
    
    <div className='px-10 md:px-5 pr-20'>
        <p data-aos="zoom-out-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-white font-thin'>Smart</p>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="text-5xl font-bold text-[#000000] mt-3">Class</h1>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="text-5xl font-bold text-[#000000]">Scheduling System.</h1>
      
    
    </div>
  </div>
</div>     
        </div>
 
    </>
  );
};

export default Banner;