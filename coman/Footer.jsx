"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#0B0D12] flex flex-col ">
        <div className="px-[100px] py-[84px] max-[1560px]:px-[80px] max-[1025px]:px-[40px] max-[1025px]:py-[35px] max-sm:px-[25px] grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-y-10 gap-x-5 md:gap-x-14 sm:gap-x-16">
          {/* Logo and descrapiton */}
          <div className="row-span-2 gap-[24px] flex flex-col ">
            <div className="">
              <h1 className=" text-[30px] leadin-[25px] text-[#DA7600] font-bold ">
                Bakhul Tech
              </h1>
              <div className="text-base leading-[15px] text-[#ffffff] font-bold">
                IT Solution & Technology Website
              </div>
            </div>
            <div className="text-[14px] justify-start text-[#ffffff] opacity-60 leading-[25px]">
              With our expertise, we help you optimize opreations, enhance
              productivity, and stay ahead of the competiton.
            </div>
          </div>

          {/* Information */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className=" text-[16px] leading-[15px] text-[#ffffff] font-bold">
              Information
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Press Center
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Our Blog
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Cloud Automation
                </span>
              </Link>
            </div>
          </div>

          {/* Menu */}

          <div className="flex flex-col gap-[14px] md:flex md:px-[50px]">
            <span className=" text-base leading-[15px] text-[#ffffff]  font-bold">
              Menu
            </span>
            <div className="grid grid-cols-1 xl:gap-1 md:gap-1 sm:gap-2 gap-2">
              <Link href={"/"}>
                <span className=" text-sm text-[#ffffff] opacity-60  font-normal">
                  About
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Services
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Banking
                </span>
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="row-span-2 flex flex-col xl:gap-[34px] md:gap-[24px] gap-[24px] md:flex">
            <span className=" text-xl leading-[15px] text-[#ffffff]  font-bold">
              Get In Touch
            </span>
            <div className="flex gap-3">
              <img
                alt="section-logo"
                loading="lazy"
                width={22}
                height={22}
                decoding="async"
                className="cursor-pointer transparent"
                src="https://www.linkfields.com/images/linkedin.svg"
              />
              <img
                alt="section-logo"
                loading="lazy"
                width={22}
                height={22}
                decoding="async"
                className="cursor-pointer transparent"
                srcSet="https://www.linkfields.com/_next/image?url=%2Fimages%2Ftwitter-new-X.png&w=48&q=75"
                src="https://www.linkfields.com/_next/image?url=%2Fimages%2Ftwitter-new-X.png&w=48&q=75"
              />
              <img
                alt="section-logo"
                loading="lazy"
                width={22}
                height={22}
                decoding="async"
                className="cursor-pointer transparent"
                src="https://www.linkfields.com/images/youtube.svg"
              />
            </div>
            <div className=" text-sm leading-[15px] text-[#ffffff] opacity-65 font-normal">
              Sing up for our newsletter
            </div>

            <div className="bg-[#ffffff] border-none md:border rounded-[50px] px-2 py-[2px] mr-7 w-[270px] xl:w-[270px] md:w-[270px] sm:w-[270px]">
              <input
                placeholder="Enter Your Email"
                type="email"
                className="px-1  placeholder:text-[#8A8E8F] text-[#0B0D12] text-base focus:outline-none  font-normal"
              />
              <button
                type="submit"
                className="bg-[#DA7600] text-xs border-none rounded-[50px] px-2 py-[5px]  font-normal cursor-pointer"
              >
                Subcribe
              </button>
            </div>
          </div>

          {/* Contact */}

          <div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className="text-base leading-[15px] text-[#ffffff] font-bold">
              Contact
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Phone
                </span>
              </Link>
              <Link href={"/"}>
                <span className=" text-sm text-[#ffffff] opacity-60 font-normal">
                  Email
                </span>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className="text-base leading-[15px] text-[#ffffff] font-bold">
              Company
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  About
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
