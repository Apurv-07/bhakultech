"use client";
import React from "react";
import CountUp from "react-countup";

const Excellence = () => {
  return (
    <>
      {/* <div className=" p-4 sm:p-8 md:p-16 bg-black text-white">
        <div>
          <h1 className="text-3xl font-bold mt-4 w-80">
            16 years of Delivering Excellence
          </h1>
          <p className="text-[18px] md:text-[24px] text-gray-400 mt-4">
            Helping global enterprises with digital transformations that help
            them grow, adapt, scale, and reinvent themselves
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-5 mt-5">
          <div>
            <h1 className="text-8xl font-bold text-zinc-400 ">
              <CountUp start={0} end={20} />yrs
            </h1>
            <p className="text-2xl mt-7">avg client tenure</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400 "><CountUp start={0} end={80} /></h1>
            <p className="text-2xl mt-7">solutions delivered</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400 "><CountUp start={0} end={60} />mn</h1>
            <p className="text-2xl mt-7">daily digital journeys</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400 "><CountUp start={0} end={200} />x</h1>
            <p className="text-2xl mt-7">increase in operations growth</p>
          </div>
        </div>
      </div> */}

      <div className="w-[1420px] h-80 relative">
        <div className="w-[498.09px] h-20 left-[73.96px] top-[96.89px] absolute">
          <div className="w-96 h-24 left-0 top-[-2.96px] absolute justify-center text-gray-200 text-4xl font-medium font-['Inter'] leading-10">
            16 years of Delivering
            <br />
            Excellence
          </div>
        </div>
        <div className="w-[484.92px] h-12 left-[73.96px] top-[200.43px] absolute justify-center text-zinc-400 text-lg font-normal font-['Libre_Franklin'] leading-normal">
          Helping global enterprises with digital transformations that
          <br />
          help them grow, adapt, scale, and reinvent themselves
        </div>
        <div className="w-24 h-14 left-[742.90px] top-[93.93px] absolute justify-center text-neutral-400 text-5xl font-medium font-['Inter'] leading-[49.55px]">
          <CountUp start={0} end={20} />
          yrs
        </div>
        <div className="w-36 h-4 left-[742.90px] top-[153.83px] absolute justify-center text-gray-200 text-lg font-normal font-['Libre_Franklin'] leading-none">
          avg client tenure
        </div>
        <div className="w-14 h-14 left-[1050.38px] top-[93.93px] absolute justify-center text-neutral-400 text-5xl font-medium font-['Inter'] leading-[49.55px]">
          <CountUp start={0} end={80} />+
        </div>
        <div className="w-40 h-4 left-[1050.38px] top-[153.83px] absolute justify-center text-gray-200 text-lg font-normal font-['Libre_Franklin'] leading-none">
          solutions delivered
        </div>
        <div className="w-24 h-14 left-[742.90px] top-[187.18px] absolute justify-center text-neutral-400 text-5xl font-medium font-['Inter'] leading-[49.55px]">
          <CountUp start={0} end={60} />
          mn
        </div>
        <div className="w-40 h-4 left-[742.90px] top-[247.09px] absolute justify-center text-gray-200 text-lg font-normal font-['Libre_Franklin'] leading-none">
          daily digital journeys
        </div>
        <div className="w-14 h-14 left-[1050.38px] top-[187.18px] absolute justify-center text-neutral-400 text-5xl font-medium font-['Inter'] leading-[49.55px]">
          <CountUp start={0} end={200} />x
        </div>
        <div className="w-60 h-4 left-[1050.38px] top-[247.09px] absolute justify-center text-gray-200 text-lg font-normal font-['Libre_Franklin'] leading-none">
          increase in operations growth
        </div>
      </div>
    </>
  );
};

export default Excellence;
