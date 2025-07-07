"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurServices = () => {
  const images = [
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
    "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  ];

  const settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto bg-[#0A0A0A] justify-between px-6 md:px-[73px] py-16">
        {/* Left  */}
        <div className="text-white mb-10 md:mb-0 md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Our Services</h1>

          <p className="text-[#A4A8A9] text-[17.75px] font-libre leading-[24.85px] mb-6 font-libre max-w-[341px]">
            With more than a decade of experience & insight, we provide Digital,
            RPA, Quality Assurance, AI, SAP, and Technology Consulting Services
            to companies of all scales, around the globe
          </p>

          <button className="flex items-center border border-[#FF7800] text-[#FF7800] text-lg rounded-lg py-[15px] px-[12px] w-fit gap-2 hover:bg-[#FF7800]/10 transition">
            <span className="font-normal leading-tight">Our Approach</span>
            <img className="w-2.5 h-3" src="white arrow.png" alt="Arrow" />
          </button>
        </div>

        {/* Right Slider Section */}
        <div className="w-full md:w-[65%]">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="flex justify-center  gap-[48px]">
                <img
                  className=" h-[355px] w-[258px] object-contain  transform hover:scale-105 transition duration-300"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurServices;
