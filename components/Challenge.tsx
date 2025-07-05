import Image from "next/image";
import React from "react";

const Challenge = () => {
  return (
    <>
      {/* <div className="bg-black text-white p-16 ">
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
      </div> */}
 
      <div className="w-[1420px] h-[492px] relative">
    <div className="w-[1420px] h-[492px] left-0 top-[0.48px] absolute overflow-hidden">
        <div className="w-[1425.92px] h-[969.59px] left-[-2.96px] top-[-238.77px] absolute overflow-hidden">
            <img className="w-[1420px] h-[959.24px] left-[2.96px] top-[0.74px] absolute" src="bgImages/our_solutions_bg.svg fill.png" />
        </div>
    </div>
    <div className="w-[1439px] h-[520px] left-[-16px] top-[0.48px] absolute inline-flex flex-col justify-center items-center gap-11">
        <div className="w-[929px] justify-start"><span className="text-white text-3xl font-medium font-['Epilogue'] leading-[60px]">We have multidisciplinary teams to meet any</span><span className="text-blue-600 text-3xl font-medium font-['Epilogue'] leading-[60px]"> </span><span className="text-orange-500 text-3xl font-medium font-['Epilogue'] leading-[60px]">challenge.</span></div>
        <div className="w-[1344px] h-64 relative bg-stone-950 rounded-[35.39px] shadow-[0px_5.661764621734619px_14.154411315917969px_0px_rgba(0,0,0,0.13)] overflow-hidden">
            <div className="left-[66.50px] top-[32.50px] absolute inline-flex flex-col justify-center items-center gap-14">
                <div className="inline-flex justify-start items-start gap-28">
                    <div className="inline-flex flex-col justify-center items-start gap-9">
                        <div className="w-12 h-12 relative">
                          <img src={"iconImages/monitor.svg"} />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="w-80 justify-start text-gray-200 text-3xl font-medium font-['Epilogue'] leading-10">Front-end</div>
                            <div className="w-80 justify-start text-white text-base font-normal font-['Epilogue'] leading-normal">Our frontend developers understand the delicate balance between aesthetics and functionality. </div>
                        </div>
                    </div>
                    <div className="inline-flex flex-col justify-center items-start gap-9">
                        <div className="w-12 h-12 relative">
                          <img src={"iconImages/Backend.svg"} />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <div className="w-80 justify-start text-gray-200 text-3xl font-medium font-['Epilogue'] leading-10">Back-end</div>
                            <div className="w-80 justify-start text-gray-200 text-base font-normal font-['Epilogue'] leading-normal">Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.</div>
                        </div>
                    </div>
                    <div className="inline-flex flex-col justify-center items-start gap-9">
                        <div className="w-12 h-12 relative">
                          <img src={"iconImages/driver.svg"} />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="w-80 justify-start text-gray-200 text-3xl font-medium font-['Epilogue'] leading-10">Data Analysts</div>
                            <div className="w-80 justify-start text-gray-200 text-base font-normal font-['Epilogue'] leading-normal">Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default Challenge;
