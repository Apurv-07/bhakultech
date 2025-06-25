import React from "react";

const JoinUs = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 bg-black text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-7  w-140">
        Ready for an extraordinary work experience?
      </h1>
      <button className="bg-[#FF7800] text-white text-lg lg:text-2xl px-4 py-4 rounded-lg mt-8 flex items-center gap-2 ">
        Join-Us
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default JoinUs;
