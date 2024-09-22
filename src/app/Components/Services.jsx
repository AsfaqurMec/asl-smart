"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import img3 from '../../../public/Screenshot 2024-08-19 223411.png'
import img4 from '../../../public/Screenshot 2024-08-19 223432.png'
import img5 from '../../../public/Screenshot 2024-08-19 223441.png'
import img6 from '../../../public/Screenshot 2024-08-19 223454.png'
import img7 from '../../../public/Screenshot 2024-08-19 223503.png'
import img8 from '../../../public/Screenshot 2024-08-19 223518.png'

const Services = () => {
   return (
      <>
         <section className=" bg-[#fff7f3] pb-20">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

               <div className="h-72 w-full ">
                  <div className="h-full flex flex-col justify-center gap-3  font-semibold text-black text-5xl py-10">
                     <p data-aos="zoom-in-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>medical services</p>
                     <h1 data-aos="zoom-in-up" data-aos-duration="1000">We're Providing</h1>
                     <h1 data-aos="zoom-in-up" data-aos-duration="1000">Best Services.</h1>
                  </div>

               </div>

               <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-black">
                  <div className="h-[83.1%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                     <Image src={img3} alt="logo"></Image>
                     <h1>eye care</h1>
                     <p className="text-base text-slate-400">we understand the importance of clear vision and its impact on your.</p>
                  </div>
                  <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
               </div>

               <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black">
                  <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                     <Image src={img4} alt="logo"></Image>
                     <h1>medical checkup</h1>
                     <p className="text-base text-slate-400">During your medical checkup, our skilled healthcare professionals.</p>
                  </div>
                  <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
               </div>

               <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-black">
                  <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                     <Image src={img5} alt="logo"></Image>
                     <h1>dental care</h1>
                     <p className="text-base text-slate-400">we are passionate about providing top-notch dental care to help you.</p>
                  </div>
                  <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
               </div>

               <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black">
                  <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                     <Image src={img6} alt="logo"></Image>
                     <h1>laboratory service</h1>
                     <p className="text-base text-slate-400">we understand the critical role that accurate diagnostics play in guiding.</p>
                  </div>
                  <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
               </div>

               <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="h-72 w-full border-[1px] border-black">
                  <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                     <Image src={img7} alt="logo"></Image>
                     <h1>Patient-centered</h1>
                     <p className="text-base text-slate-400">hospitals, or clinics with positive reviews and ratings from patients.</p>
                  </div>
                  <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
               </div>
            </div>

         </section>



         <section className="bg-[#07332f] w-full ">

            <div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14">
               <div className="flex flex-col justify-center lg:flex-row items-center gap-8 text-white">
                  <Image src={img8} alt="o"></Image>
                  <div className="text-center lg:text-left">
                     <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="text-4xl mb-5">Open For Appointments</h1>
                     <p data-aos="zoom-in-down" data-aos-duration="1000">we are delighted to announce that our doors are open, and we are now accepting <br /> appointments to serve you better.</p>
                  </div>

               </div>
               <button data-aos="zoom-in-down" data-aos-duration="1000" className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
            </div>

         </section>

      </>
   );
};

export default Services;