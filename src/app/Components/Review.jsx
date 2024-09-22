/* eslint-disable @next/next/no-img-element */
"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay} from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { useEffect } from "react";

import image1 from '../../../public/img1.png'
import image2 from '../../../public/download (2).jpeg'
import image3 from '../../../public/download (6).jpeg'
import image4 from '../../../public/download (4).jpeg'
import image5 from '../../../public/download (5).jpeg'
import Image from 'next/image';

const Review = () => {

    useEffect(() => {
        AOS.init({});
    }, []); 

    return (
        <div>
            {/* testimonial */}
   <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-[#07332f] w-full relative mb-10">

<div className="w-[90%] md:w-[80%] mx-auto py-20 text-white">
<p className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>testimonial</p>
           <h1 className="text-4xl mb-5">What Patients Say About Us.</h1>


           <div className='py-10 px-2 md:px-5 rounded-md bg-[#f0cab9]'>
      <Swiper 

        navigation={true} 
        pagination={{
            dynamicBullets: true,
          }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          slidesPerView:1
        }} 
        breakpoints={{
          320: {
            slidesPerView: 1,  // 1 slide for devices ≥ 640px
            spaceBetween: 10,
          },
            380: {
              slidesPerView: 1,  // 1 slide for devices ≥ 640px
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,  // 1 slide for devices ≥ 640px
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,  // 2 slides for devices ≥ 768px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,  // 3 slides for devices ≥ 1024px
              spaceBetween: 20,
            },
          }}
           className=" py-10 px-5">
          
           
              <SwiperSlide className='my-10'>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={image1}
          alt="user-profile"
        />
        <div>
          <h2 className="text-lg font-bold text-black">Robert James</h2>
          
        </div>
      </div>
      <div className="flex items-center mt-3">
        {/* Star ratings */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-gray-700">
      I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery.
      </p>
    </div>
       
      </SwiperSlide>

      <SwiperSlide className='my-10'>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={image2}
          alt="user-profile"
        />
        <div>
          <h2 className="text-lg font-bold text-black">Peter Hunk</h2>
          
        </div>
      </div>
      <div className="flex items-center mt-3">
        {/* Star ratings */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-gray-700">
      They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and grandchildren.
      </p>
    </div>
       
      </SwiperSlide>

      <SwiperSlide className='my-10'>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={image3}
          alt="user-profile"
        />
        <div>
          <h2 className="text-lg font-bold text-black">Anderson</h2>
          
        </div>
      </div>
      <div className="flex items-center mt-3">
        {/* Star ratings */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-gray-700">
      I felt like 102 before, now I feel like 52, thanks to Dr. Chase and his team. Their expertise is second to none!
      </p>
    </div>
       
      </SwiperSlide>

      <SwiperSlide className='my-10'>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={image4}
          alt="user-profile"
        />
        <div>
          <h2 className="text-lg font-bold text-black">Kevin</h2>
          
        </div>
      </div>
      <div className="flex items-center mt-3">
        {/* Star ratings */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-gray-700">
      I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery.
      </p>
    </div>
       
      </SwiperSlide>

      <SwiperSlide className='my-10'>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={image5}
          alt="user-profile"
        />
        <div>
          <h2 className="text-lg font-bold text-black">Robert A. Voltaire</h2>
         
        </div>
      </div>
      <div className="flex items-center mt-3">
        {/* Star ratings */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-gray-700">
      Professionals in their work, the surgery went well and I was able to go on with my life within just a few weeks. Recommended!
      </p>
    </div>
       
      </SwiperSlide>
  
      </Swiper>
      </div>




                 

</div>


</section>
        </div>
    );
};

export default Review;