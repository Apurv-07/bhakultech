"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Firstpage = () => {
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
      {/* <div className="bg-black w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 py-10">
          {/* Text  */}
      {/*<div className="lg:w-1/2 w-full mt-10 lg:mt-0 p-4">
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
          </div> */}

      {/* Image  */}
      {/* </div>

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
      </div> */}

      <div className="w-[1420px] h-[910.43px] relative">
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
          <div className="w-[586.49px] h-12 left-[73.96px] top-[504.83px] absolute">
            <div className="w-40 h-12 left-0 top-0 absolute bg-orange-500 rounded-lg">
              <div className="w-24 h-4 left-[26.57px] top-[15.63px] absolute text-center justify-center text-white text-sm font-normal font-['Libre_Franklin'] leading-none">
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
          <div className="w-24 h-4 left-[658.53px] top-[0.74px] absolute text-center justify-center text-gray-300 text-sm font-medium font-['Inter'] uppercase">
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
      </div>
    </>
  );
};

export default Firstpage;
