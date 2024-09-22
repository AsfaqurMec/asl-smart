/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import banner from '../../../public/Screenshot 2024-08-19 022530.png'
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
        <div className="md:hero bg-[#07332f] pb-20 lg:pb-0 min-h-screen pt-20">
          <div className="flex md:hero-content flex-col lg:flex-row-reverse px-3 gap-20 lg:gap-0">
            <Image data-aos="fade-up" data-aos-duration="2000" src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>

            <div className='px-10 md:px-5'>
              <p data-aos="zoom-out-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-white font-thin'>we tack care of your health</p>
              <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="text-5xl font-bold text-[#f7a582] mt-3">We Are Providing</h1>
              <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="text-5xl font-bold text-[#f7a582] my-2">Best & Affordable</h1>
              <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="text-5xl font-bold text-[#f7a582]">Health Care.</h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="py-6 text-xl text-slate-400">
                our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
              </p>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className='flex flex-col md:flex-row gap-5'>
                <button className="btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-[#f7a582]">Read More</button>
                <button className="btn bg-transparent font-semibold text-xl text-[#ffffffd7] border-none hover:bg-[#f7a582]">Watch video</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Banner section */}

      <section data-aos="fade-up" data-aos-duration="2000" className="my-20">

        <div className="w-[80%] mx-auto flex flex-col lg:flex-row">
          <div className="h-56 w-full lg:w-1/3 bg-[#f7a582]">
            <div className="h-[78.6%] flex flex-col justify-center font-semibold text-white text-3xl">
              <h1 className="pl-5 pt-5">Don't Hesitate To</h1>
              <h1 className="pl-5 ">Contact us</h1>
            </div>
            <button className="btn rounded-none w-full bg-black border-none text-white">Make Appointment</button>
          </div>
          <div className="h-[580px] md:h-[490px] lg:h-56 w-full lg:w-2/3 flex flex-col lg:flex-row bg-[#07332f] p-3">
            <div className="w-full lg:w-1/2 p-8 gap-3 flex flex-col justify-center font-semibold text-white text-xl border-b-2 lg:border-b-0 border-r-0 lg:border-r-2">
              <Image src={img1} alt="logo"></Image>
              <h1>Need family health</h1>
              <p className="text-base text-slate-400">we understand the importance of family health overall well-being.</p>
            </div>
            <div className="w-full lg:w-1/2 p-8 f flex gap-3 flex-col justify-center font-semibold text-white text-xl">
              <Image src={img2} alt="logo"></Image>
              <h1>24 hours service</h1>
              <p className="text-base text-slate-400">we take pride in offering 24-hour medical services to ensure that you.</p>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Banner;