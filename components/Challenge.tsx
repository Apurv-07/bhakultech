// import Image from "next/image";
// import React from "react";

// const Challenge = () => {
//   return (
//     <>
//       <div className="bg-[#04060B] text-white w-[1439px] h-[520px] my-[65px]  gap-[45px] mt-[0.48px]  ">
//         <h1 className="text-3xl leading-[60px] text-center">
//           We have multidisciplinary teams to meet any  <span className="text-[#FF7800]">challenge.</span>
//         </h1>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5    text-white text-[18px] w-[1334px] h-[270px]  my-[32px] mx-[63px]">
//           <div className="border-0 p-4 rounded-2xl w-[329px] 
//           h-[120px] ">
//             <Image
//             height={50} width={50}
//               className="h-13 w-13"
//               src="/monitor.svg"
//               alt=""
//             />
//             <h1 className="text-#ffff text-2xl w-82  mt-9">Front-end</h1>
//             <p className="mt-2 w-56">
//               Our frontend developers understand the delicate balance between
//               aesthetics and functionality
//             </p>
//           </div>
//           <div className="border-0 p-4 rounded-2xl bg-[0F0] ">
//             <Image
//             height={50} width={50}
//               className="h-13 w-13" 
//               src="/Backend.svg"
//               alt=""
//             />
//             <h1 className="text-text-#ffff  text-2xl mt-9">Back-end</h1>
//             <p className="mt-2 w-64 ">
//               ur backend developers are the architects, f efficiency and
//               security. They design and wild the databases andAPis
//             </p>
//           </div>
//           <div className="border-0 p-4 rounded-2xl  ">
//             <Image
//             height={50} width={50}
//               className="h-13 w-13"
//               src="/driver.svg"
//               alt=""
//             />
//             <h1 className="text-#ffff  text-2xl mt-9">Data Analysts</h1>
//             <p className="mt-2   w-60  ">
//               Our data analytics team is a blend of mathematicians,
//               statisticians, and technology enthusiasts.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Challenge;





// // import Image from "next/image";
// // import React from "react";

// // const Challenge = () => {
// //   return (
// //     <div className="bg-black text-white w-full max-w-[1440px] mx-auto py-[65px] px-4">
// //       <h1 className="text-3xl leading-[44px] text-center max-w-3xl mx-auto">
// //         We have multidisciplinary teams to meet any{" "}
// //         <span className="text-[#FF7800]">challenge.</span>
// //       </h1>

// //       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
// //         {/* Frontend */}
// //         <div className=" flex flex-col items-start">
// //           <Image
// //             height={50}
// //             width={50}
// //             className="w-[50px] h-[50px]"
// //             src="/monitor.svg"
// //             alt="Frontend Icon"
// //           />
// //           <h2 className="text-white text-2xl mt-6">Front-end</h2>
// //           <p className="mt-2 text-sm text-gray-300">
// //             Our frontend developers understand the delicate balance between
// //             aesthetics and functionality.
// //           </p>
// //         </div>

// //         {/* Backend */}
// //         <div className=" p-6 rounded-2xl flex flex-col items-start">
// //           <Image
// //             height={50}
// //             width={50}
// //             className="w-[50px] h-[50px]"
// //             src="/Backend.svg"
// //             alt="Backend Icon"
// //           />
// //           <h2 className="text-white text-2xl mt-6">Back-end</h2>
// //           <p className="mt-2 text-sm text-gray-300">
// //             Our backend developers are the architects of efficiency and
// //             security. They design and build databases and APIs.
// //           </p>
// //         </div>

// //         {/* Data Analysts */}
// //         <div className=" p-6 rounded-2xl flex flex-col items-start">
// //           <Image
// //             height={50}
// //             width={50}
// //             className="w-[50px] h-[50px]"
// //             src="/driver.svg"
// //             alt="Data Analyst Icon"
// //           />
// //           <h2 className="text-white text-2xl mt-6">Data Analysts</h2>
// //           <p className="mt-2 text-sm text-gray-300">
// //             Our data analytics team is a blend of mathematicians, statisticians,
// //             and technology enthusiasts.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Challenge;


"use client";
import Image from "next/image";
import React from "react";

const Challenge = () => {
  return (
    <div className="bg-[#04060B] text-white w-full max-w-[1440px] mx-auto py-16 px-4">
      <h1 className="text-3xl leading-tight text-center max-w-3xl mx-auto">
        We have multidisciplinary teams to meet any{" "}
        <span className="text-[#FF7800]">challenge.</span>
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {/* Frontend */}
        <div className="p-6 rounded-2xl bg-[#0F0802] flex flex-col items-start">
          <Image
            src="/monitor.svg"
            alt="Frontend Icon"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Front-end</h2>
          <p className="text-sm text-gray-300">
            Our frontend developers understand the delicate balance between aesthetics and functionality.
          </p>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl bg-[#0F0802] flex flex-col items-start">
          <Image
            src="/Backend.svg"
            alt="Backend Icon"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Back-end</h2>
          <p className="text-sm text-gray-300">
            Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.
          </p>
        </div>

        {/* Data Analysts */}
        <div className="p-6 rounded-2xl bg-[#0F0802] flex flex-col items-start">
          <Image
            src="/driver.svg"
            alt="Data Analyst Icon"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Data Analysts</h2>
          <p className="text-sm text-gray-300">
            Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
