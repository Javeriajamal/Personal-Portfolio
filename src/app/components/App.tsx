import React from 'react';
import { TypeAnimation } from "react-type-animation";



export const App = () => {
  return (
    <div className='pl-52 pt-10 font-mono text-lg text-slate-300 xs:text-xs sm:text-base sm:-ml-12 xs:-ml-44 xs:-mt-4 xs:w-auto xs:flex-nowrap lg:text-lg lg:pl-52 lg:-ml-32 xl:-ml-28 xl:mt-1 xl:text-2xl md:-ml-6 md:text-lg '>
    <TypeAnimation   
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Frontend Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Passionate Learner',
        1000,
        'I am a AI Enthusiast',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}
