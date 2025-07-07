import React from "react";
import Image from "next/image";

const Innovate = () => {
  const images = [
    "/01f160663a70e704917f40e1fc7c23c2bbe34f88.png",
    "/9b8af8f439709c5f6b1201a1eca31bdc4097c6b4.png",
  ];

  return (
    <div className="bg-[#ff7800] py-16">
      <div className="flex flex-col md:flex-row gap-[30px] items-center mb-12 px-4 md:px-10 lg:px-[142px]">
        <div className="md:w-1/2">
          <h2 className="text-[#282938] text-sm uppercase tracking-wide">
            Our Mission
          </h2>
          <h3 className="text-[#282938] text-3xl font-semibold mt-2">
            Inspire, Innovate, Share
          </h3>
          <p className="mt-4 text-[#282938] max-w-xl text-[14px] leading-[24px] font-normal">
            Our mission is to inspire creativity, drive innovation, and share
            knowledge across the globe. We believe in building solutions that
            empower people and communities to achieve more through technology
            and collaboration.
          </p>
        </div>
        <div className="md:w-1/2 mt-[40px] md:mt-[94px]">
          <Image
            height={298}
            width={457}
            className="w-full lg:w-[458px] lg:h-[298px] h-[200px] object-cover mx-auto"
            src={images[0]}
            alt="Illustration showing innovation"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-[40px] items-center md:items-start px-4 md:px-10 lg:px-[142px]">
        <div className="md:w-1/2">
          <h2 className="text-[#282938] text-sm uppercase tracking-wide">
            Our Vision
          </h2>
          <h3 className="text-[#282938] text-3xl font-semibold mt-2">
            Laser Focus
          </h3>
          <p className="mt-4 text-[#282938] max-w-xl text-[14px] leading-[24px] font-normal">
            Our vision is to lead with purpose and precision. We aim to create
            sustainable tech solutions with a laser focus on quality,
            scalability, and user-centered design—bringing long-lasting impact
            to every project.
          </p>
        </div>
        <div className="md:w-1/2 mt-[40px] md:mt-0 mb-[60px] md:mb-[114px]">
          <Image
            height={297}
            width={457}
            className="w-full lg:w-[457px] lg:h-[297px] h-[200px] object-cover mx-auto"
            src={images[1]}
            alt="Illustration showing laser focus"
          />
        </div>
      </div>
    </div>
  );
};

export default Innovate;
