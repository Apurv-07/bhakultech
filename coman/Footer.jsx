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
           <div className="flex flex-row gap-4">
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[28px] h-[26px] cursor-pointer">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="14"
                  width="14"
                >
                  <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522"></path>
                </svg>
              </div>
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[30px] h-[28px] cursor-pointer">
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14">
                  <path
                    fill="currentColor"
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[28px] h-[26px] cursor-pointer">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="14"
                  width="14"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </div>
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
