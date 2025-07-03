import { processData } from '@/app/constants/constants'
import React from 'react'

const OurProcess = () => {
    return (
    //         margin-inline: auto;
    // display: block;
    // width: fit-content;
        <div className='bg-black mx-auto w-fit'>
            <h1 className='font-semibold text-[42.2px] leading-[56.8px] mb-[42.4px] text-center tracking-0 text-[#FFFFFF]'>The process we follow</h1>
            <div className='lg:flex md:w-full gap-[28.4px] w-fit mx-auto md:mx-0'>
                {processData.map((item) => (   
                    <div className='w-[262.7px] lg:mt-0 mt-8' key={item.id}>
                        <div className='flex gap-[21.3px]'>
                            <div className="h-5 w-5 bg-[#FF7800] rounded-full"></div>
                            <div className='border-b -mb-[11.22px] max-w-[198.8px] border-[#FF7800] border-dashed w-full'></div>
                        </div>
                        <h1 className='mt-[29.18px] font-medium text-[21.3px] leading-[31.95px] tracking-0 text-[#FFFFFF]'>{item.title}</h1>
                        <p className='font-normal md:w-[241px] mt-[7.05px] text-[14.2px] leading-[24.85px] tracking-0 text-[#FFFFFF]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurProcess