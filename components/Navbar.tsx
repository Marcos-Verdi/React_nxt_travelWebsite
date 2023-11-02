"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {

  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <>
      <nav className='border-2 flexBetween max-container padding-container relative z-30 py-5'>
        <Image
          src='/hilink-logo.svg'
          alt='main logo'
          height={29}
          width={74} />
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link 
              href={link.href} 
              key={link.key}
              className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all pb-1.5 hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className='hidden lg:flexCenter'>
            <CustomButton
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green' />
        </div>
        <button onClick={() => setToggleOpen(!toggleOpen)}>
          <Image 
          src='/menu.svg'
          alt='menu button'
          height={30}
          width={30}
          className='inline-block cursor-pointer lg:hidden' />
        </button>
      </nav>
      {toggleOpen && (
          <ul className='z-10'>
            {NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key}
                className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all pb-1.5 hover:font-bold'>
                {link.label}
              </Link>
            ))}
          </ul>        
        )}
    </>
    
  )
}

export default Navbar