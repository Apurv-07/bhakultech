"use client";

import React from "react";

export default function CompanyWork() {
  return (
    <>
      <div className="w-[1420px] h-[552px] left-0 top-[0px] relative bg-neutral-50/100 overflow-hidden">
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
      </div>
    </>
  );
}
