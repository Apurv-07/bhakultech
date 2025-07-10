"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const images = [
    "iconImages/aws.svg",
    "iconImages/oddo.svg",
    "iconImages/azure.svg",
    "iconImages/microsoft.svg",
    "iconImages/blueprism.svg",
  ];

  const settings = {
    infinite: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Background Image */}
        <img
          className="w-full h-auto object-cover"
          src="/bgImages/03b6f9ef40d26b445747cb2d74f0d2e25b890019.png"
          alt="Background"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full px-6 md:px-8 lg:px-10 flex flex-col justify-center space-y-8">
          <div className="max-w-xl text-xl md:text-2xl xl:text-4xl font-medium leading-snug">
            Driving Innovation and <br /> Transformation
          </div>
          <div className="hidden md:flex max-w-xl text-base md:text-md text-gray-400 leading-relaxed tracking-tight">
            Harnessing emerging technologies and innovation to drive <br />
            transformation, shaping a connected, accessible and <br />
            intelligent future for the business world.
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 w-fit px-2 py-2 md:px-6 md:py-3 bg-orange-500 text-sm font-normal rounded-lg transition duration-300 cursor-pointer">
            <Link href={"/contact"}>Explore more</Link>
            <img
              src="iconImages/849726bf2a372b12e002274293079733cf151d4d.png"
              alt="arrow"
              className="w-3 h-auto"
            />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="hidden xl:flex absolute bottom-20 xl:bottom-46 w-full justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-zinc-100" : "bg-zinc-100 opacity-30"
              }`}
            />
          ))}
        </div>

        {/* Partners Section */}
        <div className="absolute -bottom-5 w-full bg-gradient-to-b from-black/0 to-black py-6 px-6 md:px-8 lg:px-10">
          <div className="text-center text-sm text-gray-300 font-normal md:font-medium uppercase mb-0 md:mb-4">
            Our Partners
          </div>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="h-10 w-18 md:h-15 md:w-23 xl:h-24 xl:w-36 object-contain transform hover:scale-105 transition duration-300 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
