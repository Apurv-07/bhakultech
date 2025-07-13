"use client";

import React from "react";

const companySectionBg =
  "/bgImages/56a90a3ec0a84e28f5b9ea575ab167521baaf9d6.jpg";

const companies = [
  "spotify",
  "google",
  "uber",
  "microsoft",
  "shopify",
  "evernote",
  "adobe",
  "paypal",
  "amazon",
  "asana",
];

export default function CompanyWork() {
  return (
    <>
      <div className="relative w-full mt-8 md:mt-110 lg:mt-100 xl:mt-70">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${companySectionBg})` }}
        ></div>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/95"></div>

        {/* Content */}
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-16 z-10">
          <h2 className="text-center text-black text-xl md:text-2xl xl:text-4xl font-medium  capitalize mb-12">
            Companies we Work with
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20 justify-items-center">
            {companies.map((company) => (
              <div
                key={company}
                data-company={company}
                className="w-24 h-8 md:w-36 md:h-12 relative"
              >
                <img
                  src={`iconImages/${company}.svg`}
                  alt={`${company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-[1420px] h-[552px] left-0 top-[0px] relative bg-neutral-50/100 overflow-hidden">
        <div className="w-[481px] left-[479px] top-[78px] absolute text-center justify-start text-black text-4xl font-medium font-['General_Sans_Variable'] capitalize">
          Companies we Work with
        </div>
        <div className="w-[1200px] left-[120px] top-[227px] absolute inline-flex justify-between items-center">
          <div
            data-company="Spotify"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/spotify.svg"} />
            </div>
          </div>
          <div
            data-company="Google"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/google.svg"} />
            </div>
          </div>
          <div
            data-company="Uber"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/uber.svg"} />
            </div>
          </div>
          <div
            data-company="Microsoft"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/microsoft.svg"} />
            </div>
          </div>
          <div
            data-company="Shopify"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/shopify.svg"} />
            </div>
          </div>
        </div>
        <div className="w-[1200px] left-[120px] top-[369px] absolute inline-flex justify-between items-center">
          <div
            data-company="Evernote"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/evernote.svg"} />
            </div>
          </div>
          <div
            data-company="Adobe"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/adobe.svg"} />
            </div>
          </div>
          <div
            data-company="PayPal"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/paypal.svg"} />
            </div>
          </div>
          <div
            data-company="Amazon"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/amazon.svg"} />
            </div>
          </div>
          <div
            data-company="Asana"
            className="w-36 h-12 relative overflow-hidden"
          >
            <div className="w-36 h-10 left-[0.07px] top-[3.08px] absolute">
              <img src={"iconImages/asana.svg"} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
