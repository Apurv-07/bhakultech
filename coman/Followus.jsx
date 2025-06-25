// import React from "react";

// const Followus = () => {
//   return (
//     <>
//       <div className="p-4 sm:p-8 md:p-16 bg-[#2D58C0]">
//         <div className="bg-[#2D58C0]">
//           <h1 className="text-3xl font-bold text-white">
//             Follow us for the latest updates
//           </h1>
//         </div>
//         <div className="h-10 w-20 flex gap-120 mt-10">
//           <img
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fx-twitter.png&w=1920&q=75"
//             alt=""
//           />
//           <span>klklkl</span>
//           <img
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fyoutube-168-svgrepo-com.png&w=1920&q=75"
//             alt=""
//           />
//           <img
//             src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Flinkedin-rounded-svgrepo-com.png&w=1920&q=75"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Followus;

import React from "react";

const Followus = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 bg-[#2D58C0] text-white">
      <h1 className="text-3xl font-bold mb-6">
        Follow us for the latest updates
      </h1>

      <div className="flex items-center  flex-wrap gap-90">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fx-twitter.png&w=1920&q=75"
            alt="Twitter"
            className="h-8 w-8"
          />
          <span>Twitter</span>
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fyoutube-168-svgrepo-com.png&w=1920&q=75"
            alt="YouTube"
            className="h-8 w-8"
          />
          <span>YouTube</span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Flinkedin-rounded-svgrepo-com.png&w=1920&q=75"
            alt="LinkedIn"
            className="h-8 w-8"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Followus;
