// import React from "react";

// const Theprocess = () => {
//   return (
//     <div className="bg-[#04060C] py-16 px-4">
//       {/* Heading */}
//       <div className="max-w-[453px] mx-auto text-center mb-12">
//         <h1 className="text-white font-[Poppins] text-[42.6px] font-semibold leading-[56.8px]">
//           The process we follow
//         </h1>
//       </div>

//       {/* Process Step */}
//       <div className="max-w-[1136px] mx-auto">
//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="242"
//             height="34"
//             viewBox="0 0 242 34"
//             fill="none"
//             className="mb-4"
//           >
//             <circle cx="10.65" cy="11.15" r="10.65" fill="#FF7800" />
//             <line
//               opacity="0.4"
//               x1="43.4876"
//               y1="32.1296"
//               x2="240.513"
//               y2="32.1296"
//               stroke="#FF7800"
//               strokeWidth="1.775"
//               strokeLinecap="round"
//               strokeDasharray="1.77 7.1"
//             />
//           </svg>
//           <h2 className="text-white font-[Poppins] text-[21.3px] font-medium leading-[31.95px] mb-2">
//             Planning
//           </h2>
//           <p className="text-white font-[Poppins] text-[14.2px] font-normal leading-[24.85px] w-full max-w-[241px]">
//             Lorem ipsum dolor sit amet, tetur sadipscing elitr.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Theprocess;

import React from "react";

const steps = [
  {
    title: "Planning",
    description: "Lorem ipsum dolor sit amet, tetur sadipscing elitr.",
  },
  {
    title: "Design",
    description: "Eirmod tempor invidunt ut labore et dolore magna.",
  },
  {
    title: "Development",
    description: "Consetetur sadipscing elitr, sed diam nonumy eirmod.",
  },
  {
    title: "Launch",
    description: "Dolore magna aliquyam erat, sed diam voluptua.",
  },
];

const Theprocess = () => {
  return (
    <div className="bg-[#04060C] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-white font-[Poppins] text-[42.6px] font-semibold leading-[56.8px] max-w-[453px] mx-auto">
          The process we follow
        </h1>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-y-16 gap-x-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start w-[250px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="34"
              viewBox="0 0 242 34"
              fill="none"
              className="mb-4 "
            >
              <circle cx="10.65" cy="11.15" r="10.65" fill="#FF7800" />
              <line
                opacity="0.4"
                x1="43.4876"
                y1="32.1296"
                x2="240.513"
                y2="32.1296"
                stroke="#FF7800"
                strokeWidth="1.775"
                strokeLinecap="round"
                strokeDasharray="1.77 7.1"
              />
            </svg>
            <h2 className="text-white text-[21.3px] font-medium leading-[31.95px] font-[Poppins] mb-2">
              {step.title}
            </h2>
            <p className="text-white text-[14.2px] font-normal leading-[24.85px] font-[Poppins]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theprocess;
