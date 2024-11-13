import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const Footer = () => {
  return (
    <div className='footer h-40 overflow-hidden flex justify-center pt-20 bg-slate-700 sm:mt-96 sm:h-32 '>
      <p className='text-white sm:-mt-5 sm:text-sm md:mr-20 xl:text-base'>Copyright © 2024 by Javeria | All right reserved.</p>

      <Link href={'/'}><ArrowUp className='h-10 w-10 text-white bg-pink-500 rounded-xl py-2 px-2 animate-bounce hover:text-pink-500 hover:bg-white duration-1000 -mt-4 sm:ml-10 sm:-mt-6 md:-ml-4'/></Link>

    </div>
  )
}

export default Footer;