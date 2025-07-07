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
          <p className="mt-6 text-gray-400 text-[18px] font-libre">
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
                  className="h-88 w-68 object-contain transform hover:scale-105 transition duration-300"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-[1420px] h-[1510px] relative bg-neutral-950">
        <div className="w-60 h-11 left-[73.96px] top-[73.96px] absolute justify-center text-gray-200 text-4xl font-medium font-['Inter'] leading-10">
          Our Services
        </div>
        <div className="w-80 h-32 left-[73.96px] top-[158.86px] absolute justify-center text-zinc-400 text-lg font-normal font-['Libre_Franklin'] leading-normal">
          With more than a decade of experience &<br />
          insight, we provide Digital, RPA, Quality
          <br />
          Assurance, AI, SAP, and Technology
          <br />
          Consulting Services to companies of all
          <br />
          scales, around the globe
        </div>
        <div className="w-80 h-12 left-[73.96px] top-[321.54px] absolute">
          <div className="w-36 h-12 left-0 top-0 absolute rounded-lg outline-2 outline-offset-[-2.22px] outline-orange-500">
            <div className="w-24 h-4 left-[11.42px] top-[15.63px] absolute text-center justify-center text-orange-500 text-sm font-normal font-['Libre_Franklin'] leading-none">
              Our Approach
            </div>
            <img
              className="w-2.5 h-3 left-[122.44px] top-[18.78px] absolute"
              src="iconImages/849726bf2a372b12e002274293079733cf151d4d.png"
            />
          </div>
        </div>
        <div className="w-[921.52px] h-96 left-[468.90px] top-[73.96px] absolute overflow-hidden">
          <div className="w-80 h-96 left-0 top-0 absolute">
            <img
              className="w-64 h-96 left-0 top-0 absolute"
              src="https://placehold.co/259x355"
            />
            <div className="w-20 h-4 left-[26.62px] top-[303.97px] absolute justify-center text-white text-sm font-medium font-['Inter'] leading-none">
              Engineering
            </div>
          </div>
          <div className="w-80 h-96 left-[307.67px] top-0 absolute">
            <div className="w-64 h-96 left-0 top-0 absolute overflow-hidden">
              <div className="w-14 h-5 left-[110.94px] top-[168.97px] absolute  outline-1 outline-offset-[-0.50px] outline-black" />
            </div>
            <div className="w-16 h-4 left-[26.62px] top-[303.97px] absolute justify-center text-white text-sm font-medium font-['Inter'] leading-none">
              Consulting
            </div>
          </div>
          <div className="w-80 h-96 left-[615.33px] top-0 absolute">
            <img
              className="w-64 h-96 left-0 top-0 absolute"
              src="https://placehold.co/259x355"
            />
            <div className="w-10 h-4 left-[26.62px] top-[303.97px] absolute justify-center text-white text-sm font-medium font-['Inter'] leading-none">
              Cloud
            </div>
          </div>
        </div>
        <div className="w-[1439px] h-[1135px] left-[-19px] top-[469px] absolute inline-flex flex-col justify-center items-center gap-20">
          <div className="w-[841px] inline-flex justify-start items-start gap-4">
            <div className="w-24 h-20 origin-top-left rotate-[-0.65deg] opacity-80 bg-orange-500 rounded-xl" />
            <div className="flex-1 flex justify-start items-start gap-4">
              <div className="flex-1 justify-start text-gray-200 text-4xl font-medium font-['Epilogue'] leading-[60px]">
                Empowering Your Digital Vision: Our Comprehensive Tech Services.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-12">
            <div className="inline-flex justify-start items-start gap-12">
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="left-[28px] top-[112px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    Custom SoftwareDevelopment
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Create{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      custom software
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      tailored for your unique needs, including{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      front-end
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      , and core{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      back-end
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      technology.
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 left-[28px] top-[27px] absolute">
                  <div className="w-9 h-10 left-[6.25px] top-[4.17px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-yellow-500" />
                  <div className="w-2 h-2 left-[30.21px] top-[9.38px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-yellow-500" />
                  <div className="w-1 h-2 left-[16.67px] top-[27.08px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-yellow-500" />
                  <div className="w-1 h-2 left-[29.17px] top-[27.08px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-yellow-500" />
                  <div className="w-12 h-12 left-0 top-0 absolute opacity-0" />
                </div>
              </div>
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="left-[29px] top-[152px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    QA and Testing
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Create{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      custom software
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      tailored for your unique needs, including{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      front-end
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      , and core{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      back-end
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      technology.
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 left-[29px] top-[29px] absolute">
                  <div className="w-[2.94px] h-6 left-[35.74px] top-[20.07px] absolute bg-amber-300" />
                  <div className="w-[2.94px] h-3 left-[35.74px] top-[2.45px] absolute bg-amber-300" />
                  <div className="w-[2.94px] h-3 left-[22.03px] top-[31.82px] absolute bg-amber-300" />
                  <div className="w-[2.94px] h-6 left-[22.03px] top-[2.45px] absolute bg-amber-300" />
                  <div className="w-[2.94px] h-6 left-[8.32px] top-[20.07px] absolute bg-amber-300" />
                  <div className="w-[2.94px] h-3 left-[8.32px] top-[2.45px] absolute bg-amber-300" />
                  <div className="w-2.5 h-[2.94px] left-[4.41px] top-[20.07px] absolute bg-amber-300" />
                  <div className="w-2.5 h-[2.94px] left-[31.82px] top-[20.07px] absolute bg-amber-300" />
                  <div className="w-2.5 h-[2.94px] left-[18.11px] top-[23.99px] absolute bg-amber-300" />
                  <div className="w-12 h-12 left-0 top-0 absolute opacity-0 bg-amber-300" />
                </div>
              </div>
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_0px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="h-28 left-[28px] top-[152px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    AI and Data Science
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Use leading{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      AI, machine learning
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      , and data engineering technologies to unlock business
                      value.
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 left-[27px] top-[27px] absolute">
                  <div className="w-2 h-2 left-[37.50px] top-[20.83px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-2 h-2 left-[37.50px] top-[4.17px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-2 h-2 left-[37.50px] top-[37.50px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-2 h-2 left-[4.17px] top-[20.83px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-6 h-0 left-[12.50px] top-[25px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-3.5 h-8 left-[22.92px] top-[8.33px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-12 h-12 left-0 top-0 absolute opacity-0" />
                </div>
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-12">
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="left-[28px] top-[152px] absolute inline-flex flex-col justify-start items-center gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    UX/UI Design
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Create beautiful, pixel-perfect, and easy-to-use{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      designs
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      that delight your end users.
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 left-[27px] top-[27px] absolute">
                  <div className="w-8 h-8 left-[13.06px] top-[4.19px] absolute  outline-[3.13px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-4 h-4 left-[4.14px] top-[28.24px] absolute  outline-[3.13px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-2.5 h-2.5 left-[19.81px] top-[20.29px] absolute  outline-[3.13px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-12 h-12 left-0 top-0 absolute opacity-0" />
                </div>
              </div>
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="left-[28px] top-[108px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    Mobile App Development
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Build performant, scalable, and secure{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      mobile applications
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      for{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      iOS
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      and{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      Android
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      devices.
                    </span>
                  </div>
                </div>
                <div className="w-9 h-12 left-[27px] top-[27px] absolute">
                  <div className="w-9 h-12 left-0 top-0 absolute  outline-[3.47px] outline-offset-[-1.73px] outline-amber-300" />
                  <div className="w-2.5 h-0 left-[13.88px] top-[8.09px] absolute  outline-[3.47px] outline-offset-[-1.73px] outline-amber-300" />
                  <div className="w-2 h-2 left-[14.92px] top-[32.38px] absolute  outline-[3.47px] outline-offset-[-1.73px] outline-amber-300" />
                </div>
              </div>
              <div className="w-96 h-80 relative bg-orange-500 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
                <div className="left-[28px] top-[112px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="w-80 justify-start text-neutral-700 text-3xl font-medium font-['Epilogue'] leading-10">
                    Platform and Infrastructure
                  </div>
                  <div className="w-80 justify-start">
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      Ensure applications are secure, fault tolerant and highly
                      available with our{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      DevOps
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      and{" "}
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] underline leading-normal">
                      Security
                    </span>
                    <span className="text-neutral-600 text-base font-normal font-['Epilogue'] leading-normal">
                      {" "}
                      engineers.
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 left-[27px] top-[27px] absolute">
                  <div className="w-8 h-8 left-[4.10px] top-[14.58px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-6 h-6 left-[22.92px] top-[4.17px] absolute  outline-[3.12px] outline-offset-[-1.56px] outline-amber-300" />
                  <div className="w-12 h-12 left-0 top-0 absolute opacity-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
