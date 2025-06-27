"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col !font-['HelveticaNeueExtraSmall']">
        <div className="bg-[#0B0D12] px-[100px] py-[84px]  max-[1560px]:p-[80px] max-[1025px]:px-[40px] max-[1025px]:py-[35px] max-sm:px-[20px] divide-x-red-400 grid xl:grid-cols-[repeat(4,minmax(max-content,auto))] md:grid-cols-[repeat(3,minmax(max-content,auto))] sm:grid-cols-[repeat(2,minmax(min-content,auto))] grid-cols-1 gap-y-10 md:gap-y-20 place-content-between md:place-content-between w-full">
          {/* Logo and descrapiton */}
          <div className="flex flex-col gap-[24px] md:gap-[25px] xl:gap-[25px]">
            <h1 className="min-[1561px]:text-[xl] text-2xl leadin-[15px] text-[#DA7600] font-bold flex flex-col">
              Bakhul Tech
            <span className="min-[1561px]:text-xl text-base leading-[15px] text-[#ffffff] font-bold gap-[24px] xl:gap-[15px]">
              IT Solution & Technology Website
            </span>
            </h1>
            <div className="w-178px relative flex flex-col sm:items-center">   
              <div className="w-316px h-111px flex sm:justify-center justify-start items-center text-[#ffffff] opacity-60 whitespace-pre-line">
                {`With our expertise, we help you optimize
                opreations, enhance productivity, and
                stay ahead of the competiton.`}  
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-[24px] md:gap-[25px] xl:gap-[25px] md:flex">
            <span className="min-[1561px]:text-xl text-base leading-[15px] text-[#ffffff] !font-['libre-franklin'] font-bold"> 
              Information
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Press Center
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Our Blog
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Cloud Automation
                </span>
              </Link> 
            </div> 

            {/* Contact */}
            <span className="min-[1561px]:text-xl text-base leading-[15px] text-[#ffffff] !font-['libre-franklin'] font-bold"> 
              Contact
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Phone
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Email
                </span>
              </Link> 
            </div> 
          </div> 

          {/* Menu */}
          <div className="flex flex-col gap-[24px] md:gap-[25px] xl:gap-[25px] md:flex">
            <span className="min-[1561px]:text-xl text-base leading-[15px] text-[#ffffff] !font-['libre-franklin'] font-bold"> 
              Menu
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  About
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Services
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Banking
                </span>
              </Link> 
            </div> 

            {/* Company */}
            <span className="min-[1561px]:text-xl text-base leading-[15px] text-[#ffffff] !font-['libre-franklin'] font-bold"> 
              Company
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  About
                </span>
              </Link> 
              <Link href={"/"}>
                <span className="min-[1561px]:text-lg xl:text-sm xl:leading-[13px] md:text-base text-sm text-[#ffffff] opacity-60 min-[1561px]:whitespace-nowrap !font-['libre-franklin'] font-normal">
                  Services
                </span>
              </Link>
            </div> 
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-[24px] md:gap-[25px] xl:gap-[25px] md:flex">
            <span className="min-[1561px]:text-xl text-xl leading-[15px] text-[#ffffff] !font-['libre-franklin'] font-bold"> 
              Get In Touch
            </span>
            <div className="md:flex gap-3">
              <img alt="section-logo" loading="lazy" width={22} height={22} decoding="async" className="cursor-pointer transparent" src="https://www.linkfields.com/images/linkedin.svg" />
              <img alt="section-logo" loading="lazy" width={22} height={22} decoding="async" className="cursor-pointer transparent" srcSet="https://www.linkfields.com/_next/image?url=%2Fimages%2Ftwitter-new-X.png&w=48&q=75" src="https://www.linkfields.com/_next/image?url=%2Fimages%2Ftwitter-new-X.png&w=48&q=75" />
              <img alt="section-logo" loading="lazy" width={22} height={22} decoding="async" className="cursor-pointer transparent" src="https://www.linkfields.com/images/youtube.svg" />
            </div> 
            <div className="min-[1561px]:text-xl text-sm leading-[15px] text-[#ffffff] opacity-65 !font-['libre-franklin'] font-normal"> 
              Sing up for our newsletter
            </div>

            <div className="bg-[#ffffff] border-none md:border rounded-[50px] px-2  py-[2px]"> 
              {/* <input placeholder="Enter Your Email Here" type="email"  className="border md:border rounded-[50px] min-[1561px]:p-4 md:p-2 pb-5 text-xl md:text-lg min-[1561px]:text-2xl last:co-span-full  " /> */}
              <input placeholder="Enter Your Email Here" type="email" className="px-1  placeholder:text-[#8A8E8F] text-[#0B0D12] text-base focus:outline-none !font-['libre-franklin'] font-normal" />
              <button type="submit" className="bg-[#DA7600] text-base border-none rounded-[50px] px-4 py-[5px] !font-['libre-franklin'] font-normal cursor-pointer ">Subcribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
