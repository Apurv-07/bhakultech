"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Firstpage = () => {
  const images = [
    "/AWS_P_Logo.svg.svg",
    "/blueprism.svg.svg",
    "/AWS_P_Logo.svg.svg",
    "/AWS_P_Logo.svg.svg",
    "/AWS_P_Logo.svg.svg",
  ];

  const settings = {
    infinite: true,
    arrows: false,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 6,
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
    <div className="bg-black w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 py-10">
        {/* Text  */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 p-4">
          <h1 className="text-white text-3xl lg:text-5xl font-bold leading-snug">
            Swift deployment of human
            <br /> emulation bots.
          </h1>

          <p className="text-white text-base lg:text-xl mt-5 leading-relaxed">
            Harnessing emerging technologies and innovation to drive
            transformation, shaping a connected, accessible and intelligent
            future for the business world.
          </p>

          <button className="bg-[#FF7800] text-white text-lg lg:text-2xl px-4 py-2 rounded-lg mt-5 flex items-center gap-2">
            Explore more
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        {/* Image  */}
      </div>

      <div className="w-full px-4 py-8">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                className="h-15 w-26 object-contain transform hover:scale-105 transition duration-300"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Firstpage;
