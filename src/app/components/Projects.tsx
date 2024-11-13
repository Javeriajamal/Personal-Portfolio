import Link from 'next/link'
import React from 'react'

export const Projects = () => {
  return (
    <>
    <section id='projects' className='h-screen pt-4 sm:h-auto overflow-hidden xl:pb-10'>
      <h1 className='text-white text-6xl font-semibold flex justify-center pt-20 sm:text-4xl sm:-mt-7 md:text-5xl md:mr-7 lg:text-6xl xl:text-6xl'>My <span className='text-pink-500 ml-4'> Projects</span></h1>
    
        <div className='boxes grid grid-cols-3 gap-20 mt-20 sm:grid sm:grid-cols-2 sm:ml-5 sm:gap-8 lg:grid-cols-3 md:grid-cols-2'>

          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60 lg:w-56 xl:w-72 xl:h-80" id="box1">
            <h1 className="text-pink-500 text-2xl font-semibold mt-2 sm:text-xl sm:mt-0 xl:text-2xl md:text-xl">CLI ATM Machine</h1>
            
            <p className="text-white py-10 mb-4 sm:text-sm sm:py-5 md:py-9 lg:py-7 xl:text-base xl:py-6">
            A Command-Line Interface (CLI) ATM machine built with HTML, CSS, and TypeScript. This project simulates a real-world ATM experience, allowing users to check balances, deposit, and withdraw funds, showcasing functionality similar to an ATM.
            </p>
              
              <Link href="https://github.com/Javeriajamal/Colorful__CLI_ATM_Machine.git" target="_blank" className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs xl:text-sm md:text-sm"> Read more </Link>
          </div>

          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60 lg:w-56 xl:w-72" id="box2">
            <h1 className="text-pink-500 text-2xl font-semibold mt-2 sm:text-xl sm:-mt-2 md:-mt-0 xl:text-2xl md:text-xl">Todo List Application</h1>
            
            <p className="text-white py-10 mb-4 sm:text-sm sm:py-4 xl:text-base md:py-7 lg:py-7 xl:py-6">
            This is a vibrant CLI-based Todo List Application, created using HTML, CSS, and TypeScript. It provides users with a colorful and organized interface to add, update, and delete tasks, making task management more visually engaging and ensuring tasks are easy to manage.
            </p>
              
              <Link href="https://github.com/Javeriajamal/Colourful_CLI_Todo_List_Application.git" target='_blank' className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs xl:text-sm md:text-sm"> Read more </Link>
          </div>

          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60 lg:w-56 xl:w-72" id="box3">
            <h1 className="text-pink-500 text-2xl font-semibold mt-2 sm:text-lg sm:-mt-2 md:-mt-0 xl:text-2xl md:text-xl">Countdown Timer App</h1>
            
            <p className="text-white py-10 mb-4 sm:text-sm sm:py-4 md:py-8 lg:py-7 xl:py-6 xl:text-base">
            A responsive countdown timer application developed in Next.js, ideal for setting timers for events, deadlines, or productivity sessions. This project showcases your ability to create real-time interactive applications with a modern framework.
            </p>
              
              <Link href="https://github.com/Javeriajamal/NextJS_Countdown_Timer_App.git" target='_blank' className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs md:text-sm"> Read more </Link>
          </div>
         
          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60 lg:w-56 xl:w-72" id="box1">
            <h1 className="text-pink-500 text-2xl font-semibold mt-2 sm:text-base sm:-mt-2 md:-mt-0 md:text-xl">Number Guessing Game</h1>
            
            <p className="text-white py-10 mb-4 sm:text-sm sm:py-4 md:py-8 lg:py-7 xl:text-base">
            A simple CLI-based number guessing game that offers an interactive experience. Users attempt to guess a randomly generated number, making it an entertaining way to practice logic and TypeScript fundamentals while delivering a fun project.
            </p>
              
              <Link href="https://github.com/Javeriajamal/CLI_Number_Guessing_Game.git" target='_blank' className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs xl:text-sm md:text-sm"> Read more </Link>
          </div>

          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60  lg:w-56 xl:w-72" id="box1">
            <h1 className="text-pink-500 text-2xl font-semibold mt-2 sm:text-xl sm:mt-0 xl:text-2xl md:text-2xl">Simple Calculator</h1>
            
            <p className="text-white py-10 mb-4 sm:text-sm sm:py-5 lg:py-7 xl:py-6 xl:text-base md:py-6">
            A basic yet functional calculator created with HTML, CSS, and JavaScript, allowing users to perform standard arithmetic operations. This project highlights your skill in developing straightforward UI elements and basic mathematical functionalities.
            </p>
              
              <Link href="https://github.com/Javeriajamal/Simple_Calculator.git" target='_blank' className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs xl:text-sm md:text-sm"> Read more </Link>
          </div>

          <div className="box-content w-72 h-96 px-10 pt-10 border-2 border-pink-500 bg-black-100 hover: shadow-2xl rounded-2xl hover:shadow-black-100 hover:-translate-y-1 hover:scale-105 hover:duration-300 hover:border-white sm:w-48 sm:h-80 md:w-60 lg:w-56 xl:w-72" id="box1">
            <h1 className="text-pink-500 text-2xl font-semibold sm:text-base sm:-mt-2 md:-mt-4 xl:text-xl md:text-lg">Dynamic Resume Builder with Sharable Link</h1>
            
            <p className="text-white py-10 sm:text-sm sm:py-5 md:py-7 lg:py-8 xl:py-7 xl:text-base">
            A web-based resume builder, developed with HTML, CSS, and TypeScript, enabling users to create a resume and share it via a unique link. This project emphasizes data handling and web storage capabilities, giving users an easy way to share their resumes online.
            </p>
              
              <Link href="https://github.com/Javeriajamal/Hackathon_Milestones.git" target="_blank" className="readmore border-2 text-pink-600 px-7 py-3 rounded-lg hover:bg-pink-500 hover:text-white sm:text-xs xl:text-sm md:text-sm"> Read more </Link>
          </div>



        </div>
    </ section>
    
    
    </>
  )
}
