import Image from 'next/image'
import React from 'react'

const AboutUsHero = () => {
    return (
        <div>
            <div className="justify-center flex backdrop-blur-lg p-5 md:p-0">
                <div className='flex flex-col md:flex-row items-center justify-center mt-[211.96px] lg:gap-[122.48px] gap-[50px]'>
                    <div className='max-w-[528px]'>
                        <p className='font-medium text-[15.97px] leading-[28.4px] text-[#FFFFFF]'>About us</p>
                        <h1 className='mt-[6.5px] font-semibold text-[47.92px] leading-[65.67px] tracking-0 text-[#FFFFFF]'>Our designs solve problems</h1>
                        <p className='font-normal text-[14.2px] mt-[26.6px] leading-[24.85px] tracking-0 text-[#FFFFFF]'>We are a group of creative designers who specialize in creating stunning and functional websites and applications.</p>
                    </div>
                    <div className='md:max-w-[485px] md:max-h-[298px] w-full h-full bg-red-600'>
                        <Image className='w-full h-full object-cover' src="/about-hero.png" alt="about-us" width={485} height={298} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero