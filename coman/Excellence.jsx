'use client'
import React from "react";
import CountUp from "react-countup";

const Excellence = () => {
  return (
    <>
      <div className=" p-4 sm:p-8 md:p-16 bg-black text-white">
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
      </div>
    </>
  );
};

export default Excellence;
