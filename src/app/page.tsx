'use client'

import { App } from "./components/App";
import Link from "next/link";
import { Github, Linkedin, Mail, } from "lucide-react";
import { Projects } from "./components/Projects";
import Image from "next/image";




export default function Home() {
  return (
    <>


    <section className="Hero-sec grid-flow-row overflow-hidden h-full xs:pb-5  sm:grid-flow-col md:grid-flow-col lg:pb-40">
        <h1 className="text-white font-semibold text-6xl px-52 pt-48 sm:text-4xl sm:w-8/12 md:text-5xl lg:text-5xl sm:space-x-10 sm:px-14 sm:text-center sm:ml-24 md:text-center md:ml-28 md:w-8/12 lg:-ml-20 lg:w-9/12 lg:pt-60 xl:-ml-28 xl:text-6xl sm:space-y-10 xs:text-3xl xs:-mt-16 xs:text-center xs:-ml-32 xs:px-28 lg:space-x-3"><span className="xs:ml-28 sm:ml-16">Hi, I am </span><span className="text-pink-500 font-serif sm:w-auto xs:w-full xs:-mr-28 md:w-auto md:flex-nowrap ">Javeria Jamal</ span></h1>
        <App />
        <p className="text-slate-100 pl-52 pt-14 font-semibold w-2/3 sm:text-center md:text-center sm:text-lg md:text-lg sm:w-11/12 sm:-ml-24 md:w-10/12 md:-ml-14 lg:w-8/12 lg:text-left lg:-ml-32 xl:-ml-28 xl:mt-1 xl:w-7/12 xs:text-sm xs:-mt-8 xs:-ml-40 xs:mr-20 xs:text-center xs:w-[500px] ">
          I am a Devoted student at GIAIC currently learning Frontend Development and creating user-friendly websites using modern tools show-casing my love for programming and what i learned so far.
        </p> <br /> <br />

        <Link href={"https://www.linkedin.com/in/javeria-jamal-23a9552b3"} target="_blank" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-pink-500 border-4 border-pink-500 rounded-full bg-black-100 hover:text-white group sm:ml-60 sm:px-8 sm:py-2 md:ml-72 md:mb-10 lg:px-12 lg:py-3 lg:ml-20 lg:mt-5 xl:ml-24 xl:-mt-3 xl:px-14 animate-bounce duration-1000 delay-200 xs:ml-[144px] xs:px-6 xs:py-1 xs:-mt-28 ">           
        
        <span className="absolute left-0 block w-full h-0 transition-all bg-pink-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative sm:text-base xl:text-xl xs:text-sm">Hire Me</span>
        </Link>

      <Image src="/images/heroimage.png" width={200} height={200} alt="profile image" className=" shadow-2xl drop-shadow-2xl shadow-pink-500 flex justify-self-end mr-96 rounded-full -mt-80 sm:hidden md:hidden lg:block lg:-mt-96 lg:mr-28 lg:h-64 lg:w-64 xl:mr-48 xl:h-72 xl:w-72 xs:hidden" />

    </section>

    <section className="about-sec min-h-screen bg-slate-700 mt-80 flex justify-center flex-wrap text-center sm:mt-20 md:mt-20 sm:grid sm:h-auto overflow-hidden lg:pb-28 xs:mt-2 xs:grid" id="about">
      <h1 className="text-white font-semibold h-5 pt-20 sm:text-5xl md:text-6xl sm:pt-10 md:mt-6 md:ml-2 sm:mr-4 md:mr-7 lg:text-6xl lg:mr-14 lg:pt-12 xl:text-7xl xl:ml-14 xs:text-4xl xs:pt-12 xs:-ml-4 xs:tracking-wide ">About <span className="text-pink-500">Me</span></h1>
      <Image src="/images/Profile.png" width={200} height={200} alt="profile image" id="hero-img" className="shadow-2xl drop-shadow-2xl shadow-black h-56 w-56 rounded-full sm:h-36 sm:w-36 sm:mt-20 sm:ml-56 sm:mr-52 md:ml-72 md:mt-32 md:h-40 md:w-40 lg:h-48 lg:w-48 lg:ml-96 lg:mt-32 xl:ml-auto xl:mr-auto xl:w-52 xl:h-52 xl:mt-36 xs:w-36 xs:h-36 xs:ml-[333px] xs:mr- auto xs:mt-16"/>
 
      <h2 id="about-text" className="text-pink-600 text-2xl font-semibold mt-auto h-5 sm:text-xl sm:mr-4 sm:mt-6 md:mr-8 lg:text-2xl lg:mt-8 lg:mr-12 xl:-mr-6 xl:text-3xl xl:mt-7 md:text-2xl xs:text-lg xs:-ml-1 xs:mt-4">Future Full-Stack Developer</h2>

      <p id="about-text" className="text-white text-center text-lg ml-72 mr-72 mt-14 sm:text-sm sm:text-center sm:ml-12 sm:mr-16 sm:mt-7 sm:w-auto md:mr-20 md:mt-8 md:w-auto lg:text-lg lg:ml-14 xl:mt-10 xl:w-9/12 xl:ml-40 md:text-sm xs:text-xs xs:w-80 xs:ml-[245px] xs:mr-[255px] xs:text-center xs:mt-4">
      Hello! I am Javeria, a web developement student with a deep curiosity about the future of technology and how it shapes our everyday lives. I am continuously expanding my skill set in Next.js, TypeScript, and Material-UI and some other cool tools to create smooth, responsive user experiences. My journey in tech began with a curiosity about how web applications work, and I quickly realized that I wanted to be part of building the experiences I admired online. Since then, I have been learning, experimenting, and growing my skills one project at a time. Looking forward, I am excited to dive deeper into the world of AI to round out my skills as a full-stack developer with a specialization in AI. I am driven by the challenge of solving problems and continuously learning, and I look forward to connecting with others who share a love for tech and innovation.
      </p>

      <Link href="https://www.linkedin.com/in/javeria-jamal-23a9552b3" target="_blank" className="relative inline-flex items-center mt-2 justify-center px-10 h-16 w-52 overflow-hidden font-bold text-white border-2 border-white rounded-md shadow-2xl group sm:mt-10 sm:ml-60 sm:w-32 sm:h-12 sm:px-5 sm:mb-10 md:ml-72 md:w-36 lg:ml-96 lg:w-44 lg:h-14 xl:ml-auto xl:mr-auto  xs:ml-[320px]  xs:mb-7 xs:w-40 xs:h-10 xs:mt-6">

    <span className="absolute inset-0 transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-black-100 group-hover:opacity-100"></span>

    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
    
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative sm:text-sm lg:text-sm xl:text-sm xs:text-xs">Read More</span>

     </Link>

    </section>

    <Projects />

    <section className="skills-sec h-screen overflow-hidden bg-slate-700 sm:mt-20 sm:h-auto sm:pb-10 xs:mt-2 md:-mt-3 xs:h-auto xs:pb-20" id="skills">
      <h1 className="text-white flex justify-center text-6xl font-semibold pt-20 sm:text-6xl sm:pt-14 md:mr-10 md:pt-20 lg:text-6xl xl:text-7xl xs:text-4xl xs:-ml-5 xs:pt-12 ">My <span className="text-pink-500 ml-4"> Skills</span></h1>
      
      <div className="flex justify-between mt-14 ml-96 mr-96 -mb-16 sm:mt-20">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-64 md:-ml-72 lg:-ml-64 xl:-ml-32 xl:mt-10 xl:text-lg xs:-ml-[340px] xs:text-xs">HTML</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-32 sm:text-sm md:-mr-64 lg:-mr-64 xl:-mr-20 xl:mt-10 xl:text-lg xs:text-sm xs:mr-5">90%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-20 lg:ml-32 xl:ml-64 xs:w-80 xs:mx-11 sm:w-96 md:w-9/12 xl:w-7/12 ">
      <div className="bg-pink-500 h-2.5 rounded-full w-11/12 "></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-64 md:-ml-72 lg:-ml-64 xl:-ml-32 xl:text-lg xs:-ml-[340px] xs:text-sm">CSS</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-32 sm:text-sm md:-mr-64 lg:-mr-64 xl:-mr-20 xl:text-lg xs:text-sm xs:mr-5">87%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-20 lg:ml-32 xl:ml-64 xs:w-80 xs:mx-11 sm:w-96 md:w-9/12 xl:w-7/12">
      <div className="bg-pink-500 h-2.5 rounded-full w-10/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-64 md:-ml-72 lg:-ml-64 xl:-ml-32 xl:text-lg xs:-ml-[340px] xs:text-sm">TypeScript</span>
          <span className="text-lg font-sans font-normal text-white mr-20 sm:-mr-32 sm:text-sm md:-mr-64 lg:-mr-64 xl:-mr-20 xl:text-lg xs:text-sm xs:mr-5">75%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-20 lg:ml-32 xl:ml-64 xs:w-80 xs:mx-11 sm:w-96 md:w-9/12 xl:w-7/12">
      <div className="bg-pink-500 h-2.5 rounded-full w-8/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-64 md:-ml-72 lg:-ml-64 xl:-ml-32 xl:text-lg xs:-ml-[340px] xs:text-sm">Next.js</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-32 sm:text-sm md:-mr-64 lg:-mr-64 xl:-mr-20 xl:text-lg xs:text-sm xs:mr-5">92%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 md:ml-20 lg:ml-32 xl:ml-64 xs:w-80 xs:mx-11 sm:w-96 md:w-9/12 xl:w-7/12">
      <div className="bg-pink-500 h-2.5 rounded-full w-11/12"></div>
      </div>

      <div className="flex justify-between mt-20 ml-96 mr-96 -mb-16 ">
          <span className="text-lg font-normal font-sans text-white ml-16 sm:text-base sm:-ml-64 md:-ml-72 lg:-ml-64 xl:-ml-32 xl:text-lg xs:-ml-[340px] xs:text-sm">Tailwind CSS</span>
          <span className="font-sans font-normal text-white mr-20 sm:-mr-32 sm:text-sm md:-mr-64 lg:-mr-64 xl:-mr-20 xl:text-lg xs:text-sm xs:mr-5">80%</span>
      </div>
      
      <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ml-auto mr-auto mt-20 sm:mb-20 md:ml-20 lg:ml-32 xl:ml-64 xs:mx-11 xs:w-80 sm:w-96 md:w-9/12 xl:w-7/12">
      <div className="bg-pink-500 h-2.5 rounded-full w-9/12"></div>
      </div>
    
    </section>

    
    <section className="Contact-sec h-screen overflow-hidden sm:h-auto sm:-mb-80 xs:h-auto" id="contact">
      <h3 className="text-white font-semibold text-6xl ml-40 pt-48 sm:text-5xl sm:mr-7 sm:pt-24 md:text-6xl  lg:text-6xl lg:pt-24 lg:ml-20 lg:text-left xl:pt-32 xl:ml-28 xs:text-4xl xs:-ml-6 xs:text-center xs:pt-14">Get in <span className="text-pink-500">Touch</span></h3>
      <p className="text-white text-lg ml-40 mt-10 w-4/12 sm:text-lg sm:text-center sm:ml-36 sm:w-80  md:text-lg md:ml-52 md:mt-10 md:w-80 lg:ml-20 lg:mt-8 lg:text-left xl:ml-28 xl:w-96 xs:text-sm xs:ml-[75px] xs:text-center xs:w-60 xs:mt-6">
      I would love to connect! Whether you have a question, want to chat about web development, or just want to say hi, feel free to reach out.
      </p>

      <div className="flex justify-center ml-48 mt-20 space-x-8 sm:mt-10 sm:mr-8 lg:justify-start lg:ml-20 xl:ml-28 xl:mt-14 xs:-ml-5 xs:mt-10 xs:space-x-4">
      <Link href="mailto:javeriajamal034@gmail.com" target="_blank"><Mail className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12 xs:w-10 xs:h-10" /></Link>

      <Link href={'https://www.linkedin.com/in/javeria-jamal-23a9552b3'} target="_blank"><Linkedin className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12 xs:w-10 xs:h-10" /></Link>

      <Link href={'https://github.com/Javeriajamal'} target="_blank"><Github className="h-14 w-14 px-2 fill-pink-500 rounded-full border-4 border-white hover:fill-white hover:border-pink-500 sm:h-12 sm:w-12 xs:w-10 xs:h-10"/></Link>
      </div>


      <form className="w-4/12 flex mr-72 -mt-80 xs:ml-14 sm:mt-20 sm:ml-24 md:ml-36 lg:ml-auto lg:-mt-80 xl:pt-6 xs:mt-8  ">
        <fieldset className="rounded-md px-20 py-10 md:px-7 lg:px-4 lg:ml-40 xs:pl-4 flex-col justify-center">
            <input type="text" id="name" autoComplete="additional-name" placeholder="Full name" required className=" placeholder-white px-4 py-3 w-full bg-black-100 border-2 mt-4 text-white border-pink-500 rounded-sm xs:w-64 sm:w-96 xl:w-full"></input>

            <input type="email" id="email" autoComplete="billing email" placeholder="Email" required className="px-4 py-3 placeholder-white w-full bg-black-100 border-2 mt-7 text-white border-pink-500 rounded-sm xs:w-64 sm:w-96 xl:w-full"></input>

            <input type="tel" id="phone" autoComplete="billing mobile tel" placeholder="Number" required className=" placeholder-white px-4 py-3 w-full bg-black-100 border-2 mt-7 text-white border-pink-500 rounded-sm text-left xs:w-64 sm:w-96 xl:w-full"></input>

            <textarea id="message" placeholder="Your message" rows={5} required className="px-4 text- py-7 placeholder-white w-full bg-black-100 border-2 mt-7  text-white border-pink-500 rounded-sm xs:w-64 sm:w-96 xl:w-full "></textarea>


            <Link href={'/*'} className=" relative items-center justify-start inline-block px-7 py-3 mt-10 ml-36 overflow-hidden font-medium transition-all bg-pink-500 rounded-md hover:bg-white group sm:ml-28 sm:w-40 sm:px-10 sm:py-4 sm:text-xs sm:text-center lg:mr-28 lg:w-48 lg:py-3 xl:px-14 xl:py-3 xl:w-52 xl:ml-28 xs:w-36 xs:text-center xs:h-12 xs:ml-14">

            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black-100 xl:text-sm xs:text-xs lg:text-base ">Send message</span>
            </Link>


        </fieldset>
      </form>

    </section>

    </>
  )
}


