import AboutUsHero from '@/components/AboutUsHero'
import OurProcess from '@/components/OurProcess'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const AboutUs = () => {
    return (
        <div style={{
            background: "linear-gradient(90deg, #FF7800, #000000), linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
        }} className=' bg-repeat bg-cover pb-[113px] px-5 md:px-10'>
            <div>
                <AboutUsHero />
            </div>
            <div>
                <WhoWeAre />
            </div>
            <div className='mt-[113.6px]'>
                <OurProcess />
            </div>
        </div>
    )
}

export default AboutUs