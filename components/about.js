"use client"
import React,{useTransition ,useState} from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact ,FaNode, FaSpring, FaServer } from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import { DiReact } from 'react-icons/di';
import Image from 'next/image'
import photo from "../public/photo.jpg"
import NextJsIcon from '../components/NextJsIcon';
import TabButton from './TabButton';
import { FaDatabase } from "react-icons/fa";

const TAB_DATA = [
    {
        title:"Frontend",
        id:"Frontend",
        content:(
        <ul>
            <ul className="text-gray-400 py-5 text-2xl">
    <li className="mb-4 flex items-center">
        <FaHtml5 className="mr-2" />
        HTML
    </li>
    <li className="mb-4 flex items-center">
        <FaCss3Alt className="mr-2" />
        CSS
    </li>
    <li className="mb-4 flex items-center">
        <FaJs className="mr-2" />
        JavaScript
    </li>
    <li className="mb-4 flex items-center">
        <FaReact className="mr-2" />
        React.js
    </li>
    <li className="mb-4 flex items-center">
        <NextJsIcon className="mr-2" />
        Next.js
    </li>
</ul>
<div className="text-gray-500 text-sm">
    <p className="mb-4 blur-text">Seasoned in React and Next.js, skilled in Next.js 13 advancements
     like App Router, Server Components, and SEO optimizations for top-tier frontend development.
    </p>
</div>
        </ul>
        )
    },
    {
        title:"Backend",
        id:"Backend",
        content:(
        <ul className="text-gray-400 py-5 text-2xl">
            <li className="mb-4 flex items-center">
                <FaNode className="mr-2" />Node.js</li>
            <li className="mb-4 flex items-center"><FaSpring className="mr-2" />Spring</li>
            <li className="mb-4 flex items-center"><FaServer className="mr-2" />RESTful APIs</li>
        </ul>
        )
    },
    {
        title:"Design",
        id:"Design",
        content:(
        <ul>
            <ul className="text-gray-400 py-5 text-2xl">
                <li className="mb-4">• Frontend: HTML, CSS, JavaScript, React.js, Next.js</li>
                <li className="mb-4">• Backend: Node.js, Spring , RESTful APIs</li>
                <li className="mb-4">• Content Management Systems: WordPress</li>
                <li className="mb-4">• Design Tools: Figma, Canva</li>
                <li className="mb-4">• Data Structures and Algorithms</li>
                <li className="mb-4">• Version Control: Git</li>
              </ul>
        </ul>
        )
    },
    {
        title:"Languages",
        id:"Languages",
        content:(
        <ul>
            <ul className="text-gray-400 py-5 text-2xl">
                <li className="mb-4">• Frontend: HTML, CSS, JavaScript, React.js, Next.js</li>
                <li className="mb-4">• Backend: Node.js, Spring , RESTful APIs</li>
                <li className="mb-4">• Content Management Systems: WordPress</li>
                <li className="mb-4">• Design Tools: Figma, Canva</li>
                <li className="mb-4">• Data Structures and Algorithms</li>
                <li className="mb-4">• Programming Languages: C/C++, Python, Java ,JavaScript</li>
                <li className="mb-4">• Databases: MySQL</li>
                <li className="mb-4">• Version Control: Git</li>
              </ul>
        </ul>
        )
    },
    {
        title:"Database",
        id:"Database",
        content:(
        <ul>
            <ul className="text-gray-400 py-5 text-2xl">
                <li className="mb-4 flex items-center">
                <FaDatabase className='mr-2'/>
                MySQL</li>
            </ul>
        </ul>
        )
    },
    {
        title:"Others",
        id:"Others",
        content:(
        <ul>
            <ul className="text-gray-400 py-5 text-2xl">
                <li className="mb-4">• Frontend: HTML, CSS, JavaScript, React.js, Next.js</li>
                <li className="mb-4">• Backend: Node.js, Spring , RESTful APIs</li>
                <li className="mb-4">• Content Management Systems: WordPress</li>
                <li className="mb-4">• Design Tools: Figma, Canva</li>
                <li className="mb-4">• Data Structures and Algorithms</li>
                <li className="mb-4">• Programming Languages: C/C++, Python, Java ,JavaScript</li>
                <li className="mb-4">• Databases: MySQL</li>
                <li className="mb-4">• Version Control: Git</li>
              </ul>
        </ul>
        )
    }
]

const Aboutme = () => {
    const [tab,setTab]=useState("Frontend");
    const [isPending ,startTransition]=useTransition();

    const handleTabChange = (id) => {
        startTransition (() =>{
            setTab(id);
        });
    }

    const customFontStyle = {
        fontFamily: 'Britannic Bold',
    };


  return (
    <section className='text-white border-b border-teal-200 pb-40 pt-20 '>
        <div className='md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py16 xl:px-16 rounded-xl border text-card-foreground shadow hover:scale-105 transition-transform duration-300'>
            <div className='col-span-1 flex items-center'> 
            <Image src={photo} className='rounded-full px-5 py-5' alt="" height={500} width={500}/>
            </div>
            <div className='col-span-2' style={customFontStyle}>
                <h2 className='text-6xl py-5 font-bold text-teal-500 md-4'>About me</h2>
                <p className='text-4xl py-2 text-base lg:text-lg'>
                    Full Stack Development, I am a skilled Java developer with proficiency in web development 
                    and Data Structures and Algorithms (DSA) in Java. Currently in my third year of a BE IT 
                    undergraduate program at SKNSITS College, affiliated with SPPU University, I am eager to
                     take on the role of a Full Stack Developer. My goal is to leverage my expertise in Data 
                     Structures and Algorithms, web development, collaboration, and corporate relations to enhance
                      branding and contribute effectively to your organization.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton  
                    selectTab={()=> handleTabChange("Frontend")}
                    active={tab==="Frontend"}> 
                    Frontend 
                    </TabButton>
                    <TabButton  
                    selectTab={()=> handleTabChange("Backend")}
                    active={tab==="Backend"}> 
                    Backend 
                    </TabButton>
                    <TabButton  
                    selectTab={()=> handleTabChange("Design")}
                    active={tab==="Design"}> 
                    Design 
                    </TabButton>
                    <TabButton  
                    selectTab={()=> handleTabChange("Languages")}
                    active={tab==="Languages"}> 
                    Languages 
                    </TabButton>
                    <TabButton  
                    selectTab={()=> handleTabChange("Database")}
                    active={tab==="Database"}> 
                    Database 
                    </TabButton>
                    <TabButton  
                    selectTab={()=> handleTabChange("Others")}
                    active={tab==="Others"}> 
                    Others 
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme