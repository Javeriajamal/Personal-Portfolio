import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const Footer = () => {
  return (
    <div className='footer h-40 overflow-hidden flex justify-center pt-20 bg-slate-700 sm:mt-96 sm:h-32 md:h-24 xs:h-24 xs:flex-col'>
      <p className='text-white sm:mb-2 sm:ml-40 sm:text-sm md:ml-48 md:mb-8 md:text-base lg:ml-80 lg:mb-10 xl:text-lg xl:ml-auto xl:mr-auto xs:text-xs xs:-mt-8 xs:ml-[70px] '>Copyright © 2024 by Javeria | All right reserved.</p>

      <Link href={'/'}><ArrowUp className='h-10 w-10 text-white bg-pink-500 rounded-full py-2 px-2 animate-bounce hover:text-pink-500 hover:bg-white duration-1000 sm:ml-72 sm:-mt-20 md:ml-auto md:mr-32 md:-mt-14 lg:mr-44 lg:-mt-16 lg:h-10 lg:w-10 xl:mr-72 xs:h-8 xs:w-8  xs:-mt-14 xs:ml-[180px] '/></Link>

    </div>
  )
}

export default Footer;