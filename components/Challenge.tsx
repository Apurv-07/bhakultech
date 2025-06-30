import Image from "next/image";
import React from "react";

const Challenge = () => {
  return (
    <>
      <div className="bg-black text-white p-16 ">
        <h1 className="text-2xl justify-center text-center">
          We have multidisciplinary teams to meet any<span> challenge.</span>
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20  text-white text-[18px]">
          <div className="border-0 p-4 rounded-2xl  ">
            <Image
            height={50} width={50}
              className="h-20 w-30 sm-h-20"
              src="/monitor.svg"
              alt=""
            />
            <h1 className="text-white text-2xl ">Front-end</h1>
            <p className="mt-5 ">
              Our frontend developers understand the delicate balance between
              aesthetics and functionality
            </p>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <Image
            height={50} width={50}
              className="h-20 w-30 sm-h-20"
              src="/Backend.svg"
              alt=""
            />
            <h1 className="text-white text-2xl">Back-end</h1>
            <p className="mt-5 ">
              ur backend developers are the architects, f efficiency and
              security. They design and wild the databases andAPis
            </p>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <Image
            height={50} width={50}
              className="h-20 w-30 sm-h-20"
              src="/driver.svg"
              alt=""
            />
            <h1 className="text-white text-2xl">Data Analysts</h1>
            <p className="mt-5 ">
              Our data analytics team is a blend of mathematicians,
              statisticians, and technology enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge;
