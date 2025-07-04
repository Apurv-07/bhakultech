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
      <div className="p-4 sm:p-8 md:p-16 bg-black text-white">
        {/* Heading */}
        <h1 className="text-3xl font-bold mt-4">Industries</h1>

        {/* Paragraph */}
        <p className="text-[18px] md:text-[24px] text-gray-400 mt-4">
          We have rich experience in your industry. We also share insights
          across industries to help you uncover new opportunities to adapt and
          disrupt.
        </p>

        <div className="w-full">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <img
                  className="h-[850px] w-full object-contain transform hover:scale-105 transition duration-300 bg-cover"
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

export default Industries;
