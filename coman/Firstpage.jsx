"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
      <section className="relative w-full bg-black text-white overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 relative z-10">
          {/* Background Image */}
          <Image
            src="/bgImages/03b6f9ef40d26b445747cb2d74f0d2e25b890019.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-60"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mt-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-100">
              Driving Innovation and <br /> Transformation
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              Harnessing emerging technologies and innovation to drive
              transformation, shaping a connected, accessible and intelligent
              future for the business world.
            </p>

            <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-white hover:text-orange-500 transition">
              Explore More
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
          <div className="text-center text-sm text-gray-300 uppercase font-medium mb-4">
            Our Partners
          </div>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="px-2">
                <Image
                  src={img}
                  alt={`Partner ${idx + 1}`}
                  width={144}
                  height={96}
                  className="object-contain mx-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Firstpage;
