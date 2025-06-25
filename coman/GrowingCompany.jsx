import React from "react";

const GrowingCompany = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-4 sm:p-8 md:p-16 bg-black text-white">
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
          We are one of Africa's Fastest Growing Company!
        </h1>
        <p className="mt-6 text-gray-400 text-[18px] sm:text-[20px]">
          Linkfields Innovations Pty Ltd ranked 38th in Financial Times and
          Statista's 2023 list of Africa’s top 100 fastest-growing companies!
        </p>
        <button className="border-2 border-[#FF7800] text-[#FF7800] text-base sm:text-lg lg:text-xl px-4 py-2 rounded-lg mt-5 flex items-center gap-2">
          Our Approach
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[40%] mt-10 lg:mt-0">
        <img
          className="w-full h-auto"
          src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fcertification_badge2.png&w=1920&q=75"
          alt="Certification Badge"
        />
      </div>
    </div>
  );
};

export default GrowingCompany;
