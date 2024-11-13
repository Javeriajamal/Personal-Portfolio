import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
     
    <div className='header fixed z-10 flex justify-between px-28 py-6 h-32 w-full bg-slate-950 overflow-hidden lg:overflow-visible sm:h-20 sm:w-full md:h-20 lg:h-20 xl:h-20 '>
        <div className='logo text-pink-600 font-serif font-semibold text-3xl -ml-7 sm:-ml-16 sm:text-2xl lg:text-3xl'>Javeria.</ div>
        <div className='header-buttons text-white font-semibold space-x-32 text-xl sm:hidden md:hidden lg:block lg:space-x-20 lg:-mr-5 lg:text-lg'>
            <Link href={'/'} className='hover:text-pink-500'>Home</Link>
            <Link href={'#about'} className='hover:text-pink-500'>About</Link>
            <Link href={'#skills'} className='hover:text-pink-500'>Skills</Link>
            <Link href={'#projects'} className='hover:text-pink-500'>Projects</Link>
            <Link href={'#contact'} className='hover:text-pink-500'>Contact</Link>

        </div>
    </div>

    
    
    
    
    </>
  )
}
