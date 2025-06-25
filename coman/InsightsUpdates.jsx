// import React from "react";

// const InsightsUpdates = () => {
//   return (
//     <>
//       <div className=" p-4 sm:p-8 md:p-16 bg-black text-white">
//         <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-bold mt-6">
//           Insights & Updates
//         </h1>
//         <div className="flex mt-7 gap-20">
//           <img
//             className="w-full max-w-[350px] h-40 mt-20"
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fcertification_badge2.png&w=1920&q=75"
//             alt="Certification Badge"
//           />
//           <img
//             className="w-full max-w-[350px] "
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FFinance%20AI.png&w=2048&q=75"
//             alt=""
//           />
//           <img
//             className="w-full max-w-[350px] "
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FNews%203.png&w=1920&q=75"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default InsightsUpdates;

import React from "react";

const InsightsUpdates = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 bg-black text-white">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6">
        Insights & Updates
      </h1>

      {/* Responsive grid layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <div className=""w-full h-[25%] object-cover relative  rounded-lg overflow-hidden group bg-[url('https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fcertification_badge2.png&w=1920&q=75')] bg-center bg-black/20 inset-0 bg-cover">
          <div className="absolute bottom-8 left-4">
            <p className="text-lg mb-2 ">
              Driving innovation with certified excellence.
            </p>
            <button className="bg-[#FF7800] text-black px-4 py-1 rounded font-semibold w-fit">
              Read More
            </button>
          </div>
        </div> */}

        <div className="w-full h-84 object-cover relative  rounded-lg overflow-hidden group bg-[url('https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fcertification_badge2.png&w=1920&q=75')] bg-center bg-black/20 inset-0 bg-cover">
          <div className="absolute bottom-8 left-4">
            <p className="text-lg mb-2 ">
              Driving innovation with certified excellence.
            </p>
            <button className="bg-[#FF7800] text-black px-4 py-1 rounded font-semibold w-fit">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full h-84 object-cover relative  rounded-lg overflow-hidden group bg-[url('https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FFinance%20AI.png&w=2048&q=75')] bg-center bg-black/20 inset-0 bg-cover">
          <div className="absolute bottom-8 left-4">
            <p className="text-lg mb-2 ">
              Driving innovation with certified excellence.
            </p>
            <button className="bg-[#FF7800] text-black px-4 py-1 rounded font-semibold w-fit">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full h-84 rounded-lg overflow-hidden group bg-[url('https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2FNews%203.png&w=1920&q=75')] bg-cover bg-center bg-black/20 inset-0">
          <div className="absolute bottom-8 left-4">
            <p className="text-lg mb-2 ">
              Driving innovation with certified excellence.
            </p>
            <button className="bg-[#FF7800] text-black px-4 py-1 rounded font-semibold w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsUpdates;
