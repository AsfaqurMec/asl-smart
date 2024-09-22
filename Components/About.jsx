"use client"
import React from 'react';
import Image from "next/image";
import banner from '../public/Screenshot 2024-08-19 022627.png'

// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <div>

            <div className="md:hero bg-[#fff7f3] pb-20 lg:pb-0 min-h-screen">
                <div className="flex md:hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
                    <Image data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>

                    <div className='px-10 md:px-5'>
                        <p data-aos="zoom-out-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>about medicalife</p>
                        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="text-5xl font-bold  mt-3">Our Best Services &</h1>
                        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" className="text-5xl font-bold  my-2">Poplular Treatment</h1>
                        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="text-5xl font-bold ">Here.</h1>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="py-6 text-xl text-slate-400">
                            we take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs .
                        </p>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="ml-3 my-5 space-y-3">
                            <h1 className="text-xl font-semibold">Mental health Solutions</h1>
                            <h1 className="text-xl font-semibold">Rapid Patient Improvement</h1>
                            <h1 className="text-xl font-semibold">World Class Treatment</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className='flex gap-5'>
                            <button className="btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;