// "use client"
// import {useState} from 'react'

// import React from 'react'

// const Hero = () => {
//     const[currentSlide, setCurrentSlide] = useState(0)

//     const slide=[{imgSrc:"/home.jpg" ,title:(<>
//     <span className='text-[#1f2456] font-extrabold inline-block'> Your Brand</span>
    
//     <span className='text-[#808eab]'>Our strategy</span>
//     <span className='text-[#f89522]'>Ultimate Growth</span>
    
//     </>),
//     discription:"Boost your brand's online presence with our comprehensive digital marketing services. We tailor strategies to meet your business goals."
//     },{imgSrc:"/googleAd.png",title:(<>
//         <span className='text-[#1f2456] font-extrabold'> Your Brand</span>
        
//         <span className='text-[#808eab]'>Google Ads</span>
//         <span className='text-[#f89522]'>Management</span>
        
//         </>),
//         discription:"We specialize in managing Google Ads campaigns for hotels, driving targeted traffic and increasing direct bookings. Our tailored strategies maximize ROI and enhance visibility across search and display networks"
//         },{imgSrc:"/OTA.png",title:(<>
//             <span className='text-[#1f2456] font-extrabold'> Your Brand</span>
            
//             <span className='text-[#808eab]'>OTA Listing</span>
//             <span className='text-[#f89522]'>Management</span>
            
//             </>),
//             discription:"We specialize in optimizing OTA (Online Travel Agency) listings to enhance visibility, increase bookings, and maximize revenue for hotels. Our targeted strategies ensure your property stands out in a competitive marketplace"
//             },{imgSrc:"/cutomWeb.png",title:(<>
//                 <span className='text-[#1f2456] font-extrabold'> Your Brand</span>
                
//                 <span className='text-[#808eab]'>Custom Web</span>
//                 <span className='text-[#f89522]'>Design</span>
                
//                 </>),
//                 discription:"We create tailored web designs that reflect your brand’s unique identity, ensuring a seamless user experience. From concept to launch, we build websites that captivate and convert"
//                 }];

//                 const nextSlide = (index) => { setCurrentSlide(index) };
//   return (
//     <div className=' relative h-[90vh] overflow-hidden'>
//         < div className=' absolute p-8 inset-0'>
//         { slide.map((slide,index)=>(< div key = {index} className={`h-full text-start space-y-6 items-start flex flex-col ${currentSlide === index ? 'block' : 'hidden'}`}> 
//         <div className='flex flex-col sm:flex-row justify-end items-center grid-cols-2 md:grid-cols-1'>
//             < div className='space-y-10 w-auto '>
//          <h1 className='font-extrabold tracking-wider text-5xl font-sans '><span className='text-[#1f2456]'>{slide.title}</span>
//          </h1>
//         <p className='w-96 text-[#1f2456] font-text-md'>{slide.discription} </p>
//         <div> 
//             <button className='bg-[#f89522] w-52 mt-16 px-5 block py-2 rounded-3xl'>Lets get started</button>
//         </div>
//         </div>
//         <div>
//         {slide.imgSrc &&(<img src={slide.imgSrc} className='  block sm:w-1/2  max-h-[400px]  max-w-[400px] mt-5 sm:mt-8'  alt=' img'/>)}
        
//         </div>
//         </div>))} 
//         </div> 
//         {/* buttton */}
//         <div>
//         <div className='w-full flex absolute bottom-8 justify-center '>
//             <button className='bg-[#1f2456] w-96 px-4  py-4 ' onClick={() => nextSlide(0)}>Digital Marketing</button>
//             <button className='bg-[#f89522] w-96 px-4  py-4 ' onClick={() => nextSlide(1)}>Google Ads Compaign </button>
//             <button className='bg-[#808eab] w-96 px-4  py-4  ' onClick={() => nextSlide(2)}>OTA Listing Management</button>
//             <button className='bg-[#1f2456] w-96 px-4  py-4  ' onClick={() => nextSlide(3)}>Custom Web Design</button>
//         </div>
//         </div>
        
        
//   );
// };

// export default Hero

"use client";
import { useState } from 'react';
import React from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imgSrc: "/home.jpg",
      title: (
        <>
          <span className='text-[#1f2456] font-extrabold'>Your Brand</span>
          <span className='text-[#808eab]'> Our strategy</span>
          <span className='text-[#f89522]'> Ultimate Growth</span>
        </>
      ),
      description:
        "Boost your brand's online presence with our comprehensive digital marketing services. We tailor strategies to meet your business goals.",
    },
    {
      imgSrc: "/googleAd.png",
      title: (
        <>
          <span className='text-[#1f2456] font-extrabold'>Your Brand</span>
          <span className='text-[#808eab]'> Google Ads</span>
          <span className='text-[#f89522]'> Management</span>
        </>
      ),
      description:
        "We specialize in managing Google Ads campaigns for hotels, driving targeted traffic and increasing direct bookings. Our tailored strategies maximize ROI and enhance visibility across search and display networks.",
    },
    {
      imgSrc: "/OTA.png",
      title: (
        <>
          <span className='text-[#1f2456] font-extrabold'>Your Brand</span>
          <span className='text-[#808eab]'> OTA Listing</span>
          <span className='text-[#f89522]'> Management</span>
        </>
      ),
      description:
        "We specialize in optimizing OTA (Online Travel Agency) listings to enhance visibility, increase bookings, and maximize revenue for hotels. Our targeted strategies ensure your property stands out in a competitive marketplace.",
    },
    {
      imgSrc: "/cutomWeb.png",
      title: (
        <>
          <span className='text-[#1f2456] font-extrabold'>Your Brand</span>
          <span className='text-[#808eab]'> Custom Web</span>
          <span className='text-[#f89522]'> Design</span>
        </>
      ),
      description:
        "We create tailored web designs that reflect your brand’s unique identity, ensuring a seamless user experience. From concept to launch, we build websites that captivate and convert.",
    },
  ];

  const nextSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative h-[100vh] overflow-hidden mx-5'>
      <div className='absolute p-8 inset-0'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-full text-start space-y-6 items-start          ${
              currentSlide === index ? 'block' : 'hidden'
            }`}
          >
            {/* Grid division: Two columns when in larger screens */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
              {/* Column 1: Text content (title, description, button) */}
              <div className=' space-y-10'>
                <h1 className='font-extrabold tracking-wider text-5xl font-sans'>
                  {slide.title}
                </h1>
                <p className='w-96 text-[#1f2456] text-md'>
                  {slide.description}
                </p>
                <button className='bg-[#f89522] w-52 mt-4 px-5 py-2 rounded-3xl'>
                  Let’s get started
                </button>
              </div>

              {/* Column 2: Image content */}
              <div className='block w-full'>
                {slide.imgSrc && (
                  <img
                    src={slide.imgSrc}
                    className='w-full mt-10 h-auto sm:w-1/2 lg:w-96 object-cover'
                    alt='Slide visual'
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className=' w-full h-auto flex absolute bottom-8 justify-center '>
             <button className='bg-[#1f2456] w-56 px-4  py-4 ' onClick={() => nextSlide(0)}>Digital Marketing</button>             
             <button className='bg-[#f89522] w-56 px-4  py-4 ' onClick={() => nextSlide(1)}>Google Ads Compaign </button>
            <button className='bg-[#808eab] w-56 px-4  py-4  ' onClick={() => nextSlide(2)}>OTA Listing Management</button>
             <button className='bg-[#1f2456] w-56 px-4  py-4  ' onClick={() => nextSlide(3)}>Custom Web Design</button>
         </div>
    </div>
  );
};

export default Hero;
