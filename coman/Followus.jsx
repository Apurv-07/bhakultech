import React from "react";

const Followus = () => {
  return (
    <div className="bg-[#2D58C0] px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-[#E6ECED] font-[Inter] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38.828px] font-medium leading-tight text-center lg:text-left">
          Follow us for the latest updates
        </h1>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center mt-12 gap-4 sm:gap-10 md:gap-[30px] lg:gap-[450px]">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fx-twitter.png&w=1920&q=75"
              alt="Twitter"
              className="h-6 w-6"
            />
            <span className="text-[#E6ECED] text-[11.833px] font-[Libre_Franklin] leading-none">
              Twitter
            </span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Fyoutube-168-svgrepo-com.png&w=1920&q=75"
              alt="YouTube"
              className="h-6 w-6"
            />
            <span className="text-[#E6ECED] text-[11.833px] font-[Libre_Franklin] leading-none">
              YouTube
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="https://www.linkfields.com/_next/image?url=https%3A%2F%2Fimages-linkfields-poc.s3.eu-west-2.amazonaws.com%2Flinkedin-rounded-svgrepo-com.png&w=1920&q=75"
              alt="LinkedIn"
              className="h-6 w-6"
            />
            <span className="text-[#E6ECED] text-[11.833px] font-[Libre_Franklin] leading-none">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Followus;
