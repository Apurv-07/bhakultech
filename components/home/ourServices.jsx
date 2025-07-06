"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurServices = () => {
  // const images = [
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/Engineering (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  //   "https://images-linkfields-poc.s3.eu-west-2.amazonaws.com/cloud (2).png",
  // ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 3, // Show 3 at a time
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tab
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const slides = [
    {
      image: "slider/3b2edd69647ad9dd95037c3cf7adea5a3c6d2408.jpg",
      label: "Engineering",
    },
    {
      image: "slider/212cdd30f0efe126e2534436299e9d34372e9ecd.png",
      label: "Consulting",
    },
    {
      image: "slider/c8c4c1401669843fa80be5cfc57c3b727ed9b2a6.jpg",
      label: "Cloud",
    },
  ];
  return (
    <>
      {/* <div className="flex md:flex-row flex-col p-16 bg-[#0A0A0A] justify-between gap-10">
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
                  className="h-88 w-68 object-contain transform hover:scale-105 transition duration-300"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

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
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-80 h-96 relative flex flex-col items-center"
              >
                {slide.image ? (
                  <img
                    className="w-64 h-96 object-cover"
                    src={slide.image}
                    alt={slide.label}
                  />
                ) : (
                  <div className="w-64 h-96 bg-gray-200 flex items-center justify-center">
                    <div className="w-14 h-5  outline-1 outline-black"></div>
                  </div>
                )}
                <div className=" h-4 mt-2 text-white text-sm font-medium justify-center font-['Inter'] leading-none">
                  {slide.label}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[1439px] h-[1135px] left-[-19px] top-[469px] absolute inline-flex flex-col justify-center items-center gap-20">
          <div className="w-[841px] inline-flex justify-start items-start gap-4">
            <div className="w-24 h-20 origin-top-left rotate-[-0.65deg] rounded-xl">
              <img src={"bgImages/Vector 6.svg"} />
            </div>
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
                  <img src={"iconImages/document-code.svg"} />
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
                  <img src={"iconImages/setting-5.svg"} />
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
                  <img src={"iconImages/data.svg"} />
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
                  <img src={"iconImages/brush.svg"} />
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
                  <img src={"iconImages/mobile.svg"} />
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
                  <img src={"iconImages/shapes.svg"} />
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
