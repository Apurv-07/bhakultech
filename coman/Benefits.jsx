import React from "react";

const Benefits = () => {
  return (
    <>
      <div className="bg-[#08080c] text-white p-4 sm:p-8 md:p-16">
        <h1 className="text-center text-4xl">
          The benefits of working with us
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  text-gray-600 text-[18px]">
          <div className="border-0 p-4  h-[96%] w-[80%]   bg-white ">
            <img className="h-6 w-7 sm-h-10" src="/Group.png" alt="" />

            <h1 className="text-xl text-gray-700 w-50 mt-5">
              Customize with ease
            </h1>
            <p className="text-[15px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>

          <div className="border-0 p-4  h-[96%] w-[80%]   bg-white ">
            <img className="h-7 w-7 sm-h-10" src="/Vector.svg" alt="" />

            <h1 className="text-xl text-gray-700 w-50 mt-5">
              Perfectly Responsive
            </h1>
            <p className="text-[15px]  mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>

          <div className="border-0 p-4  h-[96%] w-[80%]   bg-white ">
            <img className="h-6 w-8 sm-h-10" src="/Icon@2x.png" alt="" />

            <h1 className="text-xl text-gray-700 w-50 mt-5">
              Friendly Support
            </h1>
            <p className="text-[15px]  mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
        

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 w-full max-w-[160px] md:max-w-full">
          <img src="/Logo Number.svg" alt="Logo 1" />
          <img src="/Logo 2.svg" alt="Logo 2" />
          <img src="/Logo 2.svg" alt="Logo 3" />
          <img src="/Logo 2.svg" alt="Logo 4" />
          <img src="/Logo 2.svg" alt="Logo 5" />
          <img src="/Logo 2.svg" alt="Logo 6" />
        </div>
      </div>
    </>
  );
};

export default Benefits;
