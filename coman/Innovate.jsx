// import React from "react";

// const Innovate = () => {
//   return (
// <div className="bg-[#ff7800]  p-20">
//   <div className="flex flex-col md:flex-row gap-30 items-center  mb-12">
//     <div className="md:w-1/2">
//       <h2 className="text-[#282938] text-sm uppercase tracking-wide">
//         Our Mission
//       </h2>
//       <h3 className="text-[#282938] text-3xl font-semibold mt-2">
//         Inspire, Innovate, Share
//       </h3>
//       <p className="mt-4 text-[#282938] max-w-xl">
//         Our mission is to inspire creativity, drive innovation, and share
//         knowledge across the globe. We believe in building solutions that
//         empower people and communities to achieve more through technology
//         and collaboration.
//       </p>
//     </div>

//     <div className="md:w-1/2 w-full">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXvNbr4569cuOaqmx1-TDVIcywjgY9FJu2gIIFMZXiYNXQG1IqwZgGpcALYzjtbf-4mk&usqp=CAU"
//         alt="Team working on mission"
//         className=""
//       />
//     </div>
//   </div>

//   <div className="flex flex-col md:flex-row-reverse gap-10 items-center md:items-start">
//     <div className="md:w-1/2">
//       <h2 className="text-[#282938] text-sm uppercase tracking-wide">
//         Our Vision
//       </h2>
//       <h3 className="text-[#282938] text-3xl font-semibold mt-2">
//         Laser Focus
//       </h3>
//       <p className="mt-4 text-[#282938] max-w-xl">
//         Our vision is to lead with purpose and precision. We aim to create
//         sustainable tech solutions with a laser focus on quality,
//         scalability, and user-centered design—bringing long-lasting impact
//         to every project.
//       </p>
//     </div>

//     <div className="md:w-1/2 w-full">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXvNbr4569cuOaqmx1-TDVIcywjgY9FJu2gIIFMZXiYNXQG1IqwZgGpcALYzjtbf-4mk&usqp=CAU"
//         alt="Focused vision illustration"
//         className=""
//       />
//     </div>
//   </div>
// </div>
//   );
// };

// export default Innovate;

import React from "react";

const Innovate = () => {
  const images = [
    "/01f160663a70e704917f40e1fc7c23c2bbe34f88.png",
    "/9b8af8f439709c5f6b1201a1eca31bdc4097c6b4.png",
  ];
  return (
    <>
      <div className="bg-[#ff7800]  p-20">
        <div className="flex flex-col md:flex-row gap-30 items-center  mb-12">
          <div className="md:w-1/2">
            <h2 className="text-[#282938] text-sm uppercase tracking-wide">
              Our Mission
            </h2>
            <h3 className="text-[#282938] text-3xl font-semibold mt-2">
              Inspire, Innovate, Share
            </h3>
            <p className="mt-4 text-[#282938] max-w-xl">
              Our mission is to inspire creativity, drive innovation, and share
              knowledge across the globe. We believe in building solutions that
              empower people and communities to achieve more through technology
              and collaboration.
            </p>
          </div>
          {/* img */}
          <img
            className="w-full max-w-100 h-50"
            src={images[0]}
            alt=""
            srcSet=""
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-center md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-[#282938] text-sm uppercase tracking-wide">
              Our Vision
            </h2>
            <h3 className="text-[#282938] text-3xl font-semibold mt-2">
              Laser Focus
            </h3>
            <p className="mt-4 text-[#282938] max-w-xl">
              Our vision is to lead with purpose and precision. We aim to create
              sustainable tech solutions with a laser focus on quality,
              scalability, and user-centered design—bringing long-lasting impact
              to every project.
            </p>
          </div>
          {/* img */}
          <img
            className="w-full max-w-100 h-50"
            src={images[1]}
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};

export default Innovate;
