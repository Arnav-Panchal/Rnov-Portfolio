"use client"
import React,{useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
// import {RxDotFilled} from 'reat-icons/rx'

export default function Showcase() {
  const slides = [
    {
      image:'web3.png'
    },
    {
      url:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmucejLtuvUUS6N6aDHkagNnI3zKirp_YsJQKRvKFGLA&s'
    },
  ];

  const [currentIndex, setCurrentIndex]=useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex= isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide =() => {
    const isLastSlide = currentIndex === slides.length - 1 ;
    const newIndex =isLastSlide ? 0 : currentIndex + 1 ;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage : `url(${slides[currentIndex].url})` }}className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight OnClick={nextSlide} size={30}/>
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide,slideIndex) => {
          <div>
            <RxDotFilled/>
          </div>
        })}
      </div> */}
    </div>
  );
  }
