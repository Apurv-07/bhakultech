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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex md:flex-row flex-col p-16 bg-[#0A0A0A] justify-between gap-10">
        <div className="text-white md:w-1/2">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="mt-6 text-gray-400 text-[18px]">
            With more than a decade of experience & insight, we provide Digital,
            RPA, Quality Assurance, AI, SAP, and Technology Consulting Services
            to companies of all scales, around the globe
          </p>
          <button className="border border-[#FF7800] text-[#FF7800] text-lg px-4 py-2 rounded-lg mt-5 flex items-center gap-2">
            Our Approach
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="md:w-1/2">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <img
                  className="h-80 w-full object-contain transform hover:scale-105 transition duration-300"
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
