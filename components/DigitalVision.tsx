// import Image from "next/image";
// import React from "react";

// const DigitalVision = () => {
//   return (
//     <>
//       <div className="p-4 sm:p-8 w-[1420px] bg-black text-white">
//         <div className="text-center px-4 py-6">
//           <h1 className="text-[40px] font-medium leading-[60px] text-[#E6ECED] ">
//             Empowering Your Digital Vision: Our<br></br> Comprehensive Tech
//             Services.
//           </h1>
//         </div>
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  text-gray-600 text-[18px]">
//           <div className="border-0 display:flexflex flex-col items-start gap-[35px]
//  rounded-4xl h-[321px] w-[385px]   bg-orange-400 ">
//             <Image 
//             height={50} width={50}
//               className="h-13 w-13 sm-h-10 text-amber-600"
//               src="/document-code.svg"
//               alt=""
//             />

//             <h1 className="text-xl text-gray-700 w-50">
//               Custom SoftwareDevelopment
//             </h1>
//             <p className="text-[15px]">
//               Crate custom softwars tailored for your unique needs,including
//               front-end and core cack-end technology
//             </p>
//           </div>

//           <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
//             <Image 
//             height={50} width={50}
//               className="h-12 w-12 sm-h-10 text-amber-600"
//               src="/setting-5.svg"
//               alt=""
//             />

//             <h1 className="text-xl text-gray-800 w-50">QA and Testing</h1>
//             <p className="text-[15px]">
//               Create custom software tailored for your unique needs. including
//               front-end.and core back-end technology{" "}
//             </p>
//           </div>

//           <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
//             <Image
//             height={50} width={50}
//               className="h-12 w-12 sm-h-10"
//               src="/data.svg"
//               alt=""
//             />
//             <h1 className="text-xl text-gray-800 w-50">Al and Data Science</h1>
//             <p className="text-[15px]">
//               Use leading Al. machine learning, and data engineering
//               technologies fo unlock business value.
//             </p>
//           </div>
//           <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
//             <img
//               className="h-13 w-13 sm-h-10 text-amber-600"
//               src="/brush.svg"
//               alt=""
//             />
//             <h1 className="text-xl text-gray-800 w-50">UX/Ul Design</h1>
//             <p className="text-[15px]">
//               Create beautiful. pixel-perfect, and easy- to-uso designs that
//               delight yourond |
//             </p>
//           </div>
//           <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
//             <Image
//             height={50} width={50}
//               className="h-12 w-9 sm-h-10 text-amber-600"
//               src="/mobile.svg"
//               alt=""
//             />
//             <h1 className="text-xl text-gray-800 w-50">
//               Mobile App Development
//             </h1>
//             <p className="text-[15px]">
//               Build performant. scalable. and secure| mobile applications for
//               105 and Android devices
//             </p>
//           </div>
//           <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
//             <Image
//             height={50} width={50}
//               className="h-12 w-12 sm-h-10"
//               src="/shapes.svg"
//               alt=""
//             />
//             <h1 className="text-xl text-gray-800 w-50">
//               Platform and Infrastructure
//             </h1>
//             <p className="text-[15px]">
//               Ensure applications are secure, fault tolerant and highly
//               available with our DexOps and Security engineers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
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
    <div className="w-full bg-black text-white py-10 px-4 sm:px-8 max-w-[1420px] mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-[32px] sm:text-[40px] font-medium leading-[44px] sm:leading-[60px] text-[#E6ECED]">
          Empowering Your Digital Vision: <br className="hidden sm:block" />
          Our Comprehensive Tech Services.
        </h1>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-400 rounded-2xl p-6 flex flex-col gap-4 h-full"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="text-amber-600"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalVision;
