// import React from "react";

// const JoinUs = () => {
//   return (
//     <div className=" w-[1443px]  ">
//       <div className="p-4 sm:p-8 md:p-16 bg-black text-white flex flex-col items-center justify-center gap-[0.001px]">
//         <h1 className=" sm:text-3xl lg:text-4xl  mt-7  flex  flex-col justify-center w-[636px] h-[90px] items-center  text-[40px] font-normal leading-[42px] mx-[305px]">
//           Ready for an extraordinary work experience?
//         </h1>
//         <button className=" flex w-[123px] h-[49px] justify-center gap-[8.78px] bg-[#ff7800] px-[24px] py-0 border-[0.7px] border-[#ff7800] rounded-[9.019px]">
//           <span className="w-[54.87px] h-[14px] flex flex-col justify-center text-[#f5f5f5] text-center text-[16px] font-normal"> Join-Us</span>
//           <i className="ri-arrow-right-line"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;

import React from "react";

const JoinUs = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="p-4 sm:p-8 md:p-16 bg-black text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-[42px] max-w-[636px] mt-7">
          Ready for an extraordinary work experience?
        </h1>

        <button className="flex items-center justify-center gap-2 bg-[#ff7800] px-[24px] py-[12px] border-[0.7px] border-[#ff7800] rounded-[9.019px] hover:bg-[#e66f00] transition">
          <span className="text-[#f5f5f5] text-[16px] font-normal">
            Join-Us
          </span>
          <i className="ri-arrow-right-line text-[#f5f5f5]"></i>
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
