"use client";
import React, { useState } from "react";

export default function Template() {
  const [filter, setFilter] = useState("all");

  const cards = [
    {
      id: 1,
      title: "Template 1",
      category: "figma",
      img: "/sectionImages/card2.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 2,
      title: "Template 2",
      category: "webflow",
      img: "/sectionImages/card1.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 3,
      title: "Template 3",
      category: "design",
      img: "/sectionImages/card3.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 4,
      title: "Template 4",
      category: "figma",
      img: "/sectionImages/card4.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 5,
      title: "Template 5",
      category: "webflow",
      img: "/sectionImages/card5.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 6,
      title: "Template 6",
      category: "design",
      img: " /sectionImages/card6.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
  ];

  const filteredCards =
    filter === "all" ? cards : cards.filter((card) => card.category === filter);

  return (
    <div className="w-full bg-[#04060C] min-h-screen text-white py-8">
      {/* Filter Buttons */}
      <div className="space-x-4 mb-10 text-center">
        <button
          onClick={() => setFilter("all")}
          className="hover:text-amber-500"
        >
          All
        </button>
        <button
          onClick={() => setFilter("design")}
          className="hover:text-amber-500"
        >
          UI Design
        </button>
        <button
          onClick={() => setFilter("webflow")}
          className="hover:text-amber-500"
        >
          Webflow Design
        </button>
        <button
          onClick={() => setFilter("figma")}
          className="hover:text-amber-500"
        >
          Figma Design
        </button>
      </div>

      {/* Cards Grid */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-6 w-full max-w-8xl gap-6 mx-auto">
          {filteredCards.map((card) => (
            <div key={card.id}>
              <div className="bg-[#92c8ef] rounded text-black w-full max-w-[552px] min-h-[337px] p-4 flex flex-col-2 flex-col-3  justify-center text-center mx-4 sm:mx-6 md:mx-10 lg:mx-auto">
                <img
                  src={card.img}
                  alt={card.title}
                  className=" object-cover rounded mx-4 my-4 w-full h-auto flex flex-col-2 
         max-w-[483px] max-h-[281px]"
                />
              </div>
              <div className=" gap-[30px]  mx-[42px]">
                <h3 className="text-[#FF7800] font-poppins font-semibold not-italic text-[20px] sm:text-[28px] md:text-[33.725px] leading-[30px] mt-[21px] sm:leading-[40px] md:leading-[49.7px]">
                  {card.title}
                </h3>
                <p className="text-white w-full sm:w-[90%] md:w-[552px] mt-[10px] text-justify font-poppins text-[13px] sm:text-[14px] md:text-[14.2px] not-italic font-normal leading-[22px] sm:leading-[24px] md:leading-[24.85px]">
                  {card.content}
                </p>
                <p className="w-full sm:w-[193px] mt-[21px] mb-[57px] text-white font-poppins text-[13px] sm:text-[14.2px] not-italic font-medium leading-[140%] sm:leading-[150%]">
                  <span className="text-[#FF7800] inline-block align-middle">
                    <i className="ri-arrow-right-line"></i>
                  </span>{" "}
                  {card.content2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#04060C] max-w-[1420px] mx-auto py-12 px-4 text-center">
        <h1 className="text-white font-poppins text-[32px] sm:text-[42.6px] not-italic font-semibold leading-[1.3] max-w-[647px] mx-auto">
          Let's build something great together
        </h1>

        <p className="text-white font-poppins text-[14.2px] not-italic font-medium leading-[24.85px] max-w-[498px] mx-auto mt-4">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>

        <button className="flex w-[204.125px] h-[56.8px] px-[58.575px] pt-[14.2px] pb-[13.6px] justify-center items-center rounded-[36px] bg-[#FF7800] mx-auto mt-6 mb-10">
          <span className="text-[#1B1C2B] font-manrope text-[15.975px] not-italic font-semibold leading-[28.4px]">
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
}
