"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import img9 from '../public/Screenshot 2024-08-19 223532.png'
import img10 from '../public/Screenshot 2024-08-19 223540.png'
import img11 from '../public/Screenshot 2024-08-19 223549.png'
import img12 from '../public/Screenshot 2024-08-19 223606.png'
import img13 from '../public/Screenshot 2024-08-19 190600.png'

// import AOS from 'aos';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Work = () => {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>

            {/* Work section */}

            <section className="bg-[#fceee7] pt-10 pb-20">

                <div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14 w-full lg:w-[80%] mx-auto">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start gap-3  font-semibold text-black text-2xl md:text-5xl py-10">
                        <p data-aos="zoom-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>how we work</p>
                        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">A Comprehensive</h1>
                        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Directory For Your</h1>
                        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Health Care.</h1>
                    </div>

                    <div className="w-full lg:w-1/2 p-10">
                        <p data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className="text-slate-500">we are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers, ensuring that you and your family.</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col justify-center items-center gap-5 text-black">
                        <Image src={img9} alt="o"></Image>
                        <h1 className="text-base font-semibold md:text-xl mb-5">Book An Appointment</h1>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="flex flex-col justify-center items-center gap-5 text-black">
                        <Image src={img10} alt="o"></Image>
                        <h1 className="text-base font-semibold md:text-xl mb-5">Conduct Checkup</h1>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col justify-center items-center gap-5 text-black">
                        <Image src={img11} alt="o"></Image>
                        <h1 className="text-base font-semibold md:text-xl mb-5">Perform Treatment</h1>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="flex flex-col justify-center items-center gap-5 text-black">
                        <Image src={img12} alt="o"></Image>
                        <h1 className="text-base font-semibold md:text-xl mb-5">Prescribe & Payment</h1>
                    </div>
                </div>

            </section>

            {/* Faq's section */}

            <section>

                <div className="md:hero bg-[#fef9f6] pb-20 lg:pb-0 min-h-screen">
                    <div className="flex md:hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
                        <div className="w-full mx-auto lg:w-1/2">
                            <Image data-aos="flip-right" data-aos-duration="2000" src={img13} className="w-full" alt='banner' ></Image>
                        </div>

                        <div className='px-8 md:px-5 w-full  lg:w-1/2'>
                            <p data-aos="zoom-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>faqs</p>
                            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-2xl md:text-5xl font-bold  mt-3">Consultations with</h1>
                            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-5xl font-bold  my-2">Qualified doctors.</h1>


                            <div className=" my-5 space-y-1">
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="collapse collapse-plus bg-transparent">
                                    <input type="radio" className="text-xl" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-semibold">Are telemedicine consultations available?</div>
                                    <div className="collapse-content">
                                        <p className="text-slate-400">Yes, we offer telemedicine consultations for certain medical conditions.</p>
                                    </div>

                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="collapse collapse-plus bg-transparent">
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-semibold">Do you accept health insurance?</div>
                                    <div className="collapse-content">
                                        <p className="text-slate-400">Yes, we accept most major health insurance plans.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="collapse collapse-plus bg-transparent">
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-semibold">How much does a consultation cost?</div>
                                    <div className="collapse-content">
                                        <p className="text-slate-400">Consultation fees vary depending on the doctor and the type of consultation.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Work;