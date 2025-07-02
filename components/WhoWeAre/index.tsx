import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <div className="bg-[#ff7800] max-w-[1136px] mx-auto mt-[113.6px] text-[#282938]">
            <div className='py-[71px] pl-[71px] pr-[96px] mx-auto lg:flex gap-[54.4px]'>
                <div className='w-full'>
                    <h1 className='font-medium text-[14.2px] leading-[24.85px] tracking-0'>Who we are</h1>
                    <p className="mt-[3.4px] font-semibold text-[33.72px] leading-[49.7px] tracking-0">Goal focused</p>
                    <p className="mt-[3.4px] font-normal text-[14.2px] leading-[24.85px] tracking-0 text-[#282938]">We are a group of creative designers who specialize in creating stunning and functional websites and applications.</p>
                </div>
                <div className='w-full mt-[27px]'>
                    <p className="mt-[3.4px] font-semibold text-[33.72px] leading-[49.7px] tracking-0">Goal focused</p>
                    <p className="mt-[3.4px] font-normal text-[14.2px] leading-[24.85px] tracking-0 text-[#282938]">We are a group of creative designers who specialize in creating stunning and functional websites and applications.</p>
                </div>
            </div>
            <div className='w-full max-h-[301.75px]'>
                <Image src="/who-we.jpg" alt="about-us" className='w-full max-h-[301.75px]' width={1136} height={301.75} />
            </div>
        </div>
    )
}

export default WhoWeAre