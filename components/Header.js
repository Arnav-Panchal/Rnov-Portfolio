"use client";
import React from 'react'
import {useState} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Image from "next/image";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillInstagram,
    AiOutlineMenu,
    AiOutlineClose,
  } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import favicon from "../public/favicon.png";
import Menu from './Menu';

export default function Header() {

    

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       AOS.init({
    //         duration: 1000,
    //       });
    //     }
    //   }, []);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow-hidden',isMenuOpen);
      };

      return (
  
    <div >
        <section className={`min-h-screen relative ${isMenuOpen ? 'fixed' : ''}`}>
        {isMenuOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
            <div className="w-full h-full absolute top-0 left-0 transform translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="absolute top-0 right-0 p-4">
                <AiOutlineClose
                  className="text-3xl text-gray-600 dark:text-gray-400 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <Menu/>
            </div>
          </div>
        )}
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <Image src={favicon} className="h-16 w-16 " href="cursor-pointer"/>
                <div className="flex items-center">
                
                <div
              className="cursor-pointer"
              onClick={toggleMenu}
            >{isMenuOpen ? (
                <AiOutlineClose className="text-3xl text-teal-500" />
              ) : (
                <AiOutlineMenu className="text-3xl text-teal-500" />
              )}</div>
            </div>
            </nav>


            <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    Arnav Panchal
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    I am a Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    Freelancer providing services for programming and design content
                    needs. Join me down below and let's get cracking!
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillInstagram />
                </div>
                <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    <Image src={deved} layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
        </div>
  )
}
