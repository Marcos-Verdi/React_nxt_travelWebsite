import React from 'react'
import CustomButton from './CustomButton'

function Hero() {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
        <div className='hero-map' />
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <h1 className='bold-52 lg:bold-88'>Putuk Truni Camp Area</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing
                the incorruptible beauty of nature. We can help you on an adventure arounf the 
                world in just one app.
            </p>
            <div className='flex flex-col w-full gap-3 sm:flex-row py-5'>
                <CustomButton 
                    type='button' 
                    title='Download App'
                    variant='btn_green' />
                <CustomButton 
                    type='button' 
                    title='How We Work'
                    icon='/play.svg'
                    variant='btn_white_text' />
            </div>
        </div>
    </section>
  )
}

export default Hero