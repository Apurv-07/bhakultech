

// import Image from "next/image";
// import React from "react";

// const services = [
//   {
//     icon: "/document-code.svg",
//     title: "Custom Software Development",
//     description:
//       "Create custom software tailored to your unique needs, including front-end and back-end technologies.",
//   },
//   {
//     icon: "/setting-5.svg",
//     title: "QA and Testing",
//     description:
//       "Ensure quality with robust testing strategies across front-end and back-end components.",
//   },
//   {
//     icon: "/data.svg",
//     title: "AI and Data Science",
//     description:
//       "Leverage AI, machine learning, and data engineering to unlock business value.",
//   },
//   {
//     icon: "/brush.svg",
//     title: "UX/UI Design",
//     description:
//       "Design beautiful, pixel-perfect, and user-friendly interfaces that engage users.",
//   },
//   {
//     icon: "/mobile.svg",
//     title: "Mobile App Development",
//     description:
//       "Build performant, scalable, and secure mobile apps for iOS and Android.",
//   },
//   {
//     icon: "/shapes.svg",
//     title: "Platform & Infrastructure",
//     description:
//       "Ensure secure, fault-tolerant, and scalable systems with DevOps and Security expertise.",
//   },
// ];

// const DigitalVision = () => {
//   return (
//     <div className="w-full bg-black text-white py-10 px-4 sm:px-8 max-w-[1420px] h- mx-auto">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h1 className="text-[32px] sm:text-[40px] font-medium leading-[44px] sm:leading-[60px] text-[#E6ECED]">
//           Empowering Your Digital Vision: <br className="hidden sm:block" />
//           Our Comprehensive Tech Services.
//         </h1>
//       </div>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-orange-400 rounded-2xl p-6 flex flex-col gap-4 h-full"
//           >
//             <Image
//               src={service.icon}
//               alt={service.title}
//               width={50}
//               height={50}
//               className="text-amber-600 mt-[27px]"
//             />
//             <h2 className="text-xl font-semibold text-gray-800 mt-[35px] w-[327px]">
//               {service.title}
//             </h2>
//             <p className="  text-[#525252] font-epilogue text-base font-normal leading-6  [text-decoration-skip-ink:none] mb-[38px]">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalVision;




import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/document-code.svg",
    title: "Custom Software Development",
    description:
      "Create custom software tailored to your unique needs, including front-end and back-end technologies.",
  },
  {
    icon: "/setting-5.svg",
    title: "QA and Testing",
    description:
      "Ensure quality with robust testing strategies across front-end and back-end components.",
  },
  {
    icon: "/data.svg",
    title: "AI and Data Science",
    description:
      "Leverage AI, machine learning, and data engineering to unlock business value.",
  },
  {
    icon: "/brush.svg",
    title: "UX/UI Design",
    description:
      "Design beautiful, pixel-perfect, and user-friendly interfaces that engage users.",
  },
  {
    icon: "/mobile.svg",
    title: "Mobile App Development",
    description:
      "Build performant, scalable, and secure mobile apps for iOS and Android.",
  },
  {
    icon: "/shapes.svg",
    title: "Platform & Infrastructure",
    description:
      "Ensure secure, fault-tolerant, and scalable systems with DevOps and Security expertise.",
  },
];

const DigitalVision = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-4 sm:px-8 lg:px-16 max-w-[1420px] mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug sm:leading-[44px] lg:leading-[60px] text-[#E6ECED]">
          Empowering Your Digital Vision: <br className="hidden sm:block" />
          Our Comprehensive Tech Services.
        </h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-400 rounded-[35px] p-6 lg:p-7 flex flex-col w-[385px] h-[321px] gap-6 "
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="mt-[27px]"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-[#525252] font-epilogue text-base font-normal leading-6   mb-[38px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalVision;
