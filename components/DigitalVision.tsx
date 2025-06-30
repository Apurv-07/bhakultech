import Image from "next/image";
import React from "react";

const DigitalVision = () => {
  return (
    <>
      <div className="p-4 sm:p-8 md:p-16 bg-black text-white">
        <div className="text-center px-4 py-6">
          <h1 className="text-2xl font-semibold text-white ">
            Empowering Your Digital Vision: Our<br></br> Comprehensive Tech
            Services.
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  text-gray-600 text-[18px]">
          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <Image 
            height={50} width={50}
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="/document-code.svg"
              alt=""
            />

            <h1 className="text-xl text-gray-700 w-50">
              Custom SoftwareDevelopment
            </h1>
            <p className="text-[15px]">
              Crate custom softwars tailored for your unique needs,including
              front-end and core cack-end technology
            </p>
          </div>

          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <img
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="src/assets/dev-removebg-preview.png"
              alt=""
            />
            
            <h1 className="text-xl text-gray-800 w-50">QA and Testing</h1>
            <p className="text-[15px]">
              Create custom software tailored for your unique needs. including
              front-end.and core back-end technology{" "}
            </p>
          </div>

          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <img
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="src/assets/dev-removebg-preview.png"
              alt=""
            />
            <h1 className="text-xl text-gray-800 w-50">Al and Data Science</h1>
            <p className="text-[15px]">
              Use leading Al. machine learning, and data engineering
              technologies fo unlock business value.
            </p>
          </div>
          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <img
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="src/assets/dev-removebg-preview.png"
              alt=""
            />
            <h1 className="text-xl text-gray-800 w-50">UX/Ul Design</h1>
            <p className="text-[15px]">
              Create beautiful. pixel-perfect, and easy- to-uso designs that
              delight yourond |
            </p>
          </div>
          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <img
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="src/assets/dev-removebg-preview.png"
              alt=""
            />
            <h1 className="text-xl text-gray-800 w-50">
              Mobile App Development
            </h1>
            <p className="text-[15px]">
              Build performant. scalable. and secure| mobile applications for
              105 and Android devices
            </p>
          </div>
          <div className="border-0 p-4 rounded-4xl h-[96%] w-[80%]   bg-orange-400 ">
            <img
              className="h-20 w-20 sm-h-10 text-amber-600"
              src="src/assets/dev-removebg-preview.png"
              alt=""
            />
            <h1 className="text-xl text-gray-800 w-50">
              Platform and Infrastructure
            </h1>
            <p className="text-[15px]">
              Ensure applications are secure, fault tolerant and highly
              available with our DexOps and Security engineers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalVision;
