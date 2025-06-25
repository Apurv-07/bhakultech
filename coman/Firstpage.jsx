// import React from "react";

// const Firstpage = () => {
//   return (
//     <>
//       <div className="bg-amber-800 ">
//         <div className="flex ">
//           <div className=" mt-30 p-20">
//             <h1 className="text-white text-3xl font-bold ">
//               Swift deployment of human
//               <br /> emulation bots.
//             </h1>

//             <p className="text-white text-1xl mt-5">
//               Harnessing emerging technologies and innovation to drive
//               transformation,
//               <br /> shaping a connected, accessible and intelligent
//               <br />
//               future for the business world.
//             </p>
//             <button className="bg-[#FF7800] text-white text-2xl p-2 rounded-lg mt-5">
//               Explore more
//               <span>
//                 <i class="ri-arrow-right-line"></i>
//               </span>
//             </button>
//           </div>

//           {/* img */}
//           <div>
//             <img src="src/img/white-background-designify.png" alt="lkl" />
//           </div>
//         </div>
//         {/* full img section */}
//         <div className="flex gap-40">
//           <img
//             className="h-20 w-30"
//             src="src/assets/amazon-dark-logo-png-transparent-removebg-preview.png"
//             alt=""
//           />
//           <img
//             className="h-16 w-30"
//             src="src/assets/images-removebg-preview (1).png"
//             alt=""
//           />
//           <img
//             className="h-20 w-30"
//             src="src/assets/logo-on-gray-removebg-preview.png"
//             alt=""
//           />
//           <img
//             className="h-20 w-30"
//             src="src/assets/odoo-removebg-preview.png"
//             alt=""
//           />
//           <img
//             className="h-24 w-30"
//             src="src/assets/blue-removebg-preview.png"
//             alt=""
//           />
//         </div>
//       </div>{" "}
//     </>
//   );
// };

// export default Firstpage;

import React from "react";

const Firstpage = () => {
  return (
    <>
      <div className="bg-black w-full">
        {/* Main content container */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 py-10">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 p-4">
            <h1 className="text-white text-3xl lg:text-5xl font-bold leading-snug">
              Swift deployment of human
              <br /> emulation bots.
            </h1>

            <p className="text-white text-base lg:text-xl mt-5 leading-relaxed">
              Harnessing emerging technologies and innovation to drive
              transformation, shaping a connected, accessible and intelligent
              future for the business world.
            </p>

            <button className="bg-[#FF7800] text-white text-lg lg:text-2xl px-4 py-2 rounded-lg mt-5 flex items-center gap-2">
              Explore more
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2  flex justify-center p-4">
            <img
              src="src/assets/mn-removebg-preview.png"
              alt="hero"
              className="w-full max-w-md h-[100%]"
            />
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-wrap justify-center gap-8 px-5 py-10">
          <img
            className="h-10 lg:h-16 object-contain"
            src="src/assets/amazon-dark-logo-png-transparent-removebg-preview.png"
            alt="Amazon"
          />
          <img
            className="h-10 lg:h-16 object-contain"
            src="src/assets/images-removebg-preview (1).png"
            alt="Logo 2"
          />
          <img
            className="h-10 lg:h-16 object-contain"
            src="src/assets/logo-on-gray-removebg-preview.png"
            alt="Logo 3"
          />
          <img
            className="h-10 lg:h-16 object-contain"
            src="src/assets/odoo-removebg-preview.png"
            alt="Logo 4"
          />
          <img
            className="h-10 lg:h-16 object-contain"
            src="src/assets/blue-removebg-preview.png"
            alt="Logo 5"
          />
        </div>
      </div>
    </>
  );
};

export default Firstpage;
