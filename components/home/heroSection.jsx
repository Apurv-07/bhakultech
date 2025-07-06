"use client";
import React from "react";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative w-full max-w-[1420px] mx-auto">
        <img
          className="w-full h-auto object-cover"
          src="/bgImages/03b6f9ef40d26b445747cb2d74f0d2e25b890019.png"
        />

        {/* Content Overlay */}
        <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col justify-center px-4 sm:px-8  space-y-6 text-white -top-10 sm:top-0">
          <h1 className="text-xl font-normal leading-tight max-w-xl md:text-4xl">
            Driving Innovation and
            <br />
            Transformation
          </h1>

          <p className="hidden sm:flex text-sm md:text-lg text-gray-300 max-w-sm xl:max-w-2xl">
            Harnessing emerging technologies and innovation to drive
            transformation, shaping a connected, accessible and intelligent
            future for the business world.
          </p>

          <button className="bg-orange-500 text-white cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm font-normal w-fit transition">
            Explore more
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="hidden sm:flex absolute bottom-36 w-full justify-center gap-2">
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
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-black/0 to-black px-4 sm:px-8">
          <h2 className="text-center text-xs font-normal text-gray-300 uppercase">
            OUR PARTNERS
          </h2>

          <div className="overflow-hidden">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    className="h-12 md:h-16 w-24 sm:w-36  object-contain transform hover:scale-105 transition duration-300"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* <div className="w-[1420px] h-[910.43px] relative">
        <img
          className="w-[1420px] h-[850.52px] left-0 top-0 absolute"
          src="/bgImages/03b6f9ef40d26b445747cb2d74f0d2e25b890019.png"
        />
        <div className="w-[1420px] h-[910.43px] left-0 top-0 absolute overflow-hidden">
          <div className="w-[586.49px] h-28 left-[73.96px] top-[222.61px] absolute">
            <div className="w-96 h-24 left-0 top-[2.22px] absolute justify-center text-gray-200 text-4xl font-medium font-['Inter'] leading-[53.84px]">
              Driving Innovation and
              <br />
              Transformation
            </div>
          </div>
          <div className="w-[579.86px] h-20 left-[73.96px] top-[362.83px] absolute justify-center text-gray-300 text-xl font-normal font-['Libre_Franklin'] leading-7 tracking-tight">
            Harnessing emerging technologies and innovation to drive
            <br />
            transformation, shaping a connected, accessible and
            <br />
            intelligent future for the business world.
          </div>
          <div className="w-[586.49px] h-12 left-[73.96px] top-[504.83px] absolute cursor-pointer">
            <div className="w-40 h-12 left-0 top-0 absolute bg-orange-500 rounded-lg hover:bg-white  hover:text-orange-500">
              <div className="w-24 h-4 left-[26.57px] top-[15.63px] absolute text-center justify-center  text-sm font-normal font-['Libre_Franklin'] leading-none">
                Explore more
              </div>
              <img
                className="w-2.5 h-3 left-[127.25px] top-[19.18px] absolute"
                src="iconImages/849726bf2a372b12e002274293079733cf151d4d.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1420px] h-[1.48px] left-0 top-[686.33px] absolute">
          <div className="w-4 h-0.5 left-[659.75px] top-0 absolute">
            <div className="w-2 h-2 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
          </div>
          <div className="w-2 h-2 left-[682.22px] top-0 absolute opacity-30 bg-zinc-100 rounded-lg" />
          <div className="w-2 h-2 left-[698.77px] top-0 absolute opacity-30 bg-zinc-100 rounded-lg" />
          <div className="w-2 h-2 left-[715.32px] top-0 absolute opacity-30 bg-zinc-100 rounded-lg" />
          <div className="w-2 h-2 left-[731.86px] top-0 absolute opacity-30 bg-zinc-100 rounded-lg" />
          <div className="w-2 h-2 left-[748.41px] top-0 absolute opacity-30 bg-zinc-100 rounded-lg" />
        </div>
        <div className="w-[1420px] h-28 left-0 top-[744.64px] absolute bg-gradient-to-b from-black/0 to-black">
          <div className="w-30 h-4 left-[658.53px] top-[0.74px] absolute text-center justify-center text-gray-300 text-sm font-medium font-['Inter'] uppercase">
            OUR PARTNERS
          </div>
          <div className="w-[1420px] h-20 left-0 top-[19.97px] absolute overflow-hidden">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    className="h-24 w-36 left-[-19.61px] top-[-11.77px] object-contain transform hover:scale-105 transition duration-300"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
