import React from "react";

const Goalfocussed = () => {
  return (
    <>
      <div className="bg-[#4f2808] py-16 px-4">
        <div className="bg-[#4060C] w-full max-w-[1419px] flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row w-full max-w-[1136px] bg-[#FF7800] mx-auto mt-20 mb-16 gap-8 p-6 lg:p-10 rounded-lg ">
            <div className="ml-[71px] ">
              <h1 className=" mt-[71px]  text-sm md:text-base font-medium leading-6 text-[#282938] font-[Poppins] ">
                Who we are
              </h1>
              <h1 className="text-[#282938] mt-[13px] w-[457px] h-[50px] text-[33.725px] font-semibold leading-[49.7px] font-[Poppins]">
                Goal focussed
              </h1>
              <p
                className="text-[#282938] w-full max-w-[457px] text-sm sm:text-base font-normal leading-relaxed mb-12 font-[Poppins]
"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing eit, sed do.
                siusmoct tempor incidcunt ut labore ot doors magna arcu, Ut enim
                od minim veriom, quis nostrud eerciaton ulameo labs is ut aiuip
                oxo commodo consequot.
              </p>
            </div>

            <div className="mr-[96px]">
              <h1
                className="text-[#282938] w-full max-w-[457px] text-2xl sm:text-3xl md:text-[32px] font-semibold leading-snug mt-[99px] font-[Poppins]
"
              >
                Continuous improvement
              </h1>
              <p className=" text-[#282938] w-full max-w-[457px] text-sm sm:text-base font-normal leading-relaxed mb-12 font-[Poppins]">
                Lorern ipsum dolor si amet, consectetur adipiscing ef, sed do
                siusmod tempor inididunt ut labors o dolore magna allua. Ut rien
                0d mines verso, qs postrud excitation ulameo labors vs ut qu x60
                comma consequat
              </p>
            </div>
          </div>
          <div className="max-w-[1136px] h-auto mx-auto ">
            <img
              src="/243ebdcf77583630b5c592cfe693a45ac8529324.jpg"
              alt="Who we are"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            {/* <div className="max-w-[1136px] h-auto mx-auto ">
              <img
                src="/243ebdcf77583630b5c592cfe693a45ac8529324.jpg"
                alt="Who we are"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div> */}
          </div>
          {/* <div className="max-w-[1136px] h-auto mx-auto ">
            <img
              src="/243ebdcf77583630b5c592cfe693a45ac8529324.jpg"
              alt="Who we are"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Goalfocussed;
