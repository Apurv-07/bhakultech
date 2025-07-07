"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries = () => {
  const images = [
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FFMGC%20(1).png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Foil%26gas.png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fautomated-packaging-line-efficiency-production%201.png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Finsurance.png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FFMGC%20(1).png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Foil%26gas.png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fautomated-packaging-line-efficiency-production%201.png&w=640&q=75",
    "https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Finsurance.png&w=640&q=75",
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 bg-[#000] md:px-[73px]">
      <h1 className="text-5xl text-[#E6ECED]  font-medium ">Industries</h1>

      <p className="text-[18px] leading-[23.4px] md:text-[24px] text-[#A4A8A9] mt-4 max-w-[770px]">
        We have rich experience in your industry. We also share insights across
        industries to help you uncover new opportunities to adapt and disrupt.
      </p>

      {/* Slider */}
      <div className="w-full mt-6">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-[600px] w-[360px] mt-4 object-contain transform hover:scale-105 transition duration-300 rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Industries;
