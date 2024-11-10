'use client'

import { App } from "./components/App";
import Link from "next/link";
import { Github, Linkedin, Mail, } from "lucide-react";
import { Projects } from "./components/Projects";
import Image from "next/image";




export default function Home() {
  return (
    <>
    <section className="Hero-sec grid-flow-row overflow-hidden h-full sm:grid-flow-col md:grid-flow-col lg:pb-40">
        <h1 className="text-white font-semibold text-6xl px-52 pt-48 sm:text-3xl md:text-5xl lg:text-5xl sm:space-x-10 sm:text-center md:text-center sm:scroll-pt-20 md:-ml-8 md:w-screen lg:text-start lg:-ml-32 xl:ml-1 xl:text-6xl">Hi, I am <span className="text-pink-500 font-serif sm:w-auto"> Javeria Jamal</span></h1>
        <App />
        <p className="text-slate-100 pl-52 pt-14 font-semibold w-2/3 sm:text-center md:text-center sm:text-lg md:text-lg  sm:w-11/12 sm:-ml-20 md:w-9/12 md:-ml-10 lg:w-3/5 lg:text-left lg:-ml-32 xl:ml-1 xl:w-3/5">
          I am a Devoted student at GIAIC currently learning Frontend Development and creating user-friendly websites using modern tools show-casing my love for programming and what i learned so far.
        </p> <br /> <br /> <br/>

        <Link href={"https://www.linkedin.com/in/javeria-jamal-23a9552b3"} target="_blank" className="ml-52  relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-pink-500 border-4 border-pink-500 rounded-full bg-black-100 hover:text-white group sm:ml-60  sm:px-8 sm:py-2 md:ml-72 md:mb-10 lg:px-12 lg:py-3 lg:ml-20 xl:ml-52">           
        
        <span className="absolute left-0 block w-full h-0 transition-all bg-pink-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative sm:text-base">Hire Me</span>
        </Link>

      <Image src="/images/hero-image.png" alt="profile image" className="h-72 w-72 shadow-2xl drop-shadow-2xl shadow-pink-500 flex justify-self-end mr-96 rounded-full -mt-80 sm:hidden md:hidden lg:block lg:-mt-96 lg:mr-28 lg:h-64 lg:w-64 xl:mr-96 xl:h-72 xl:w-72 "/>

    </section>

    <section className="about-sec min-h-screen bg-slate-700 mt-80 flex justify-center flex-wrap text-center sm:mt-20 md:mt-20 sm:grid sm:h-auto overflow-hidden lg:pb-28" id="about">
      <h1 className="text-white font-semibold text-6xl h-5 pt-20 sm:text-4xl md:text-5xl sm:pt-8 md:mt-6 sm:mr-8 md:mr-14 lg:text-5xl lg:pt-12 xl:text-6xl xl:ml-10">About <span className="text-pink-500">Me</span></h1>
      <Image src="/images/profile-image.jpg" alt="" className="h-56 w-56 rounded-full mt-48 -ml-64 sm:h-32 sm:w-32 sm:mt-16 sm:ml-60 md:ml-72 md:mt-20 md:h-36 md:w-36 lg:h-48 lg:w-48 lg:ml-96 lg:mt-28 xl:ml-auto xl:mr-auto"/>

      <h2 className="text-pink-500 text-2xl font-semibold mt-auto -mb-5 -ml-64 h-5 sm:text-lg sm:-mr-60 sm:mt-3 md:-mr-52 lg:text-xl">Future Full-Stack Developer</h2>

      <p className="text-white text-center text-lg ml-72 mr-72 mt-14 sm:text-xs sm:text-center sm:ml-24 sm:mr-24 sm:mt-10 md:mr-36 lg:text-lg">
      Hello! I am Javeria, a web developement student with a deep curiosity about the future of technology and how it shapes our everyday lives. I am continuously expanding my skill set in Next.js, TypeScript, and Material-UI and some other cool tools to create smooth, responsive user experiences. My journey in tech began with a curiosity about how web applications work, and I quickly realized that I wanted to be part of building the experiences I admired online. Since then, I have been learning, experimenting, and growing my skills one project at a time. Looking forward, I am excited to dive deeper into backend technologies to round out my skills as a full-stack developer. I am driven by the challenge of solving problems and continuously learning, and I look forward to connecting with others who share a love for tech and innovation.
      </p>

      <Link href="https://www.linkedin.com/in/javeria-jamal-23a9552b3" target="_blank" className="relative inline-flex items-center mt-2 justify-center px-10 h-16 w-52 overflow-hidden font-bold text-white border-2 border-white rounded-md shadow-2xl group sm:mt-10 sm:ml-64 sm:w-32 sm:h-12 sm:px-5 sm:mb-10 md:ml-72 lg:ml-96 lg:w-40 lg:h-14">
    <span className="absolute inset-0 transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-black-100 group-hover:opacity-100"></span>

    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
    
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative sm:text-sm lg:text-xs">Read More</span>
     </Link>

    </section>

    <Projects />

    <section className="skills-sec h-screen overflow-hidden bg-slate-700 mt-96 sm:mt-20 sm:h-auto sm:pb-10" id="skills">
      <h1 className="text-white flex justify-center text-6xl font-semibold pt-20 sm:text-5xl sm:pt-14 md:mr-10 md:pt-20 lg:text-6xl">My <span className="text-pink-500 ml-4"> Skills</span></h1>
      
      <div className="flex justify-between mt-14 ml-96 mr-96 -mb-16 sm:mt-20 ">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-56 lg:-ml-40">HTML</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-24 sm:text-sm md:-mr-40 lg:-mr-24">90%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-40 lg:ml-56">
      <div className="bg-pink-500 h-2.5 rounded-full w-11/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-56 lg:-ml-40">CSS</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-24 sm:text-sm md:-mr-40 lg:-mr-24">87%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-40 lg:ml-56">
      <div className="bg-pink-500 h-2.5 rounded-full w-10/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-56 lg:-ml-40">TypeScript</span>
          <span className="text-lg font-sans font-normal text-white mr-20 sm:-mr-24 sm:text-sm md:-mr-40 lg:-mr-24">75%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-40 lg:ml-56">
      <div className="bg-pink-500 h-2.5 rounded-full w-8/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-56 lg:-ml-40">Next.js</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-24 sm:text-sm md:-mr-40 lg:-mr-24">92%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-40 lg:ml-56">
      <div className="bg-pink-500 h-2.5 rounded-full w-11/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16 ">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-56 lg:-ml-40">Tailwind CSS</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-24 sm:text-sm md:-mr-40 lg:-mr-24">80%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 sm:mb-20 md:ml-40 lg:ml-56">
      <div className="bg-pink-500 h-2.5 rounded-full w-9/12 "></div>
      </div>
    
    </section>

    
    <section className="Contact-sec h-screen overflow-hidden sm:h-auto sm:-mb-80" id="contact">
      <h3 className="text-white font-semibold text-6xl ml-40 pt-48 sm:text-5xl sm:ml-48 sm:pt-28 md:ml-56 lg:text-6xl lg:ml-32 lg:pt-40">Get in <span className="text-pink-500">Touch</span></h3>
      <p className="text-white text-lg ml-40 mt-10 w-4/12 sm:text-base sm:text-center sm:ml-52  md:text-lg md:w-80 lg:ml-32 lg:text-left">
      I would love to connect! Whether you have a question, want to chat about web development, or just want to say hi, feel free to reach out.
      </p>

      <div className="flex ml-48 mt-20 space-x-8 sm:mt-10 sm:ml-52 md:ml-64 lg:ml-32">
      <Link href="mailto:javeriajamal034@gmail.com" target="_blank"><Mail className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12" /></Link>

      <Link href={'https://www.linkedin.com/in/javeria-jamal-23a9552b3'} target="_blank"><Linkedin className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12 " /></Link>

      <Link href={'https://github.com/Javeriajamal'} target="_blank"><Github className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12"/></Link>
      </div>


      <form className="w-4/12 flex justify-self-end mr-72 -mt-80 sm:mt-20 sm:mr-96 lg:mr-40 lg:-mt-80">
        <fieldset className="rounded-md px-20 py-10 md:px-7 lg:px-4 ">
            <input type="text" id="name" placeholder="Full name" required className=" placeholder-white px-4 py-3 w-full bg-black-100 border-2 mt-4 text-white border-pink-500 rounded-md "></input>

            <input type="email" id="name" placeholder="Email" required className="px-4 py-3 placeholder-white w-full bg-black-100 border-2 mt-7 text-white border-pink-500 rounded-md"></input>

            <input type="tel" id="phone" placeholder="Number" required className=" placeholder-white px-4 py-3 w-full bg-black-100 border-2 mt-7 text-white border-pink-500 rounded-md text-left"></input>

            <textarea id="message" placeholder="Your message" rows= "5" required className="px-4 text- py-7 placeholder-white w-full bg-black-100 border-2 mt-7  text-white border-pink-500 rounded-md"></textarea>

            <Link href={'*'} className=" relative items-center justify-start inline-block px-7 py-3 mt-10 ml-36 overflow-hidden font-medium transition-all bg-pink-500 rounded-md hover:bg-white group sm:mr-32 sm:px-10 sm:py-2 sm:text-xs sm:text-center md:mr-36 lg:text-sm lg:mr-28 lg:px-12 lg:py-4 ">
          
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black-100 ">Send message</span>
            </Link>

        </fieldset>
      </form>

    </section>

    </>
  )
}


