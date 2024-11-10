import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
     
    <div className='header flex justify-between px-28 py-6 h-20 bg-slate-700 overflow-hidden lg:overflow-visible'>
        <div className='logo text-pink-600 font-serif font-semibold text-3xl -ml-7 sm:-ml-16 sm:text-2xl lg:text-3xl'>Javeria.</ div>
        <div className='header-buttons text-white font-semibold space-x-32 text-xl sm:hidden md:hidden lg:block lg:space-x-20 lg:-mr-5 lg:text-lg'>
            <Link href={'/'}>Home</Link>
            <Link href={'#about'}>About</Link>
            <Link href={'#skills'}>Skills</Link>
            <Link href={'#projects'}>Projects</Link>
            <Link href={'#contact'}>Contact</Link>

        </div>
    </div>
    
    
    
    
    </>
  )
}
