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
              className="h-13 w-13"
              src="/monitor.svg"
              alt=""
            />
            <h1 className="text-#ffff text-2xl w-82  mt-9">Front-end</h1>
            <p className="mt-2 w-56">
              Our frontend developers understand the delicate balance between
              aesthetics and functionality
            </p>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <Image
            height={50} width={50}
              className="h-13 w-13" 
              src="/Backend.svg"
              alt=""
            />
            <h1 className="text-text-#ffff  text-2xl mt-9">Back-end</h1>
            <p className="mt-2 w-64 ">
              ur backend developers are the architects, f efficiency and
              security. They design and wild the databases andAPis
            </p>
          </div>
          <div className="border-0 p-4 rounded-2xl  ">
            <Image
            height={50} width={50}
              className="h-13 w-13"
              src="/driver.svg"
              alt=""
            />
            <h1 className="text-#ffff  text-2xl mt-9">Data Analysts</h1>
            <p className="mt-2   w-60  ">
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
