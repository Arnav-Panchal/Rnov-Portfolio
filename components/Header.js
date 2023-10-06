"use client"
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillInstagram,
  } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import favicon from "../public/favicon.png";

export default function Header() {
  return (

    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
              duration: 1000,
            });
          }
      }, []),

    <div >
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <Image src={favicon} className="h-16 w-16 " href="cursor-pointer"/>
                <ul className="flex items-center">
                    <li>
                        <a
                            className="bg-gradient-to-r from-cyan-500 text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                href="public/Resume.pdf"
                                download="Arnav.pdf"
                                >Resume
                        </a>
                    </li>
                </ul>
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
