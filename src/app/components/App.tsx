import React from 'react';
import { TypeAnimation } from "react-type-animation";



export const App = () => {
  return (
    <div className='pl-52 pt-10 font-mono text-lg text-slate-300 sm:text-xs sm:-ml-12 lg:text-base lg:pl-52 lg:-ml-32 xl:mr-10 xl:text-base md:-ml-6'>
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
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}
