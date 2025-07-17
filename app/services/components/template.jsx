"use client";
import React, { useState } from "react";

export default function Template() {
  const [filter, setFilter] = useState("all");

  const cards = [
    {
      id: 1,
      title: "Template 1",
      img: "/sectionImages/servictem2.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 2,
      title: "Template 2",
      img: "src/img/image 15 (6).png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 3,
      title: "Template 3",
      img: "src/img/image 15 (6).png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 4,
      title: "Template 4",
      img: "src/img/image 15 (6).png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },

    {
      id: 5,
      title: "Template 5",
      img: "src/img/image 15 (6).png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 6,
      title: "Template 6",
      img: "src/img/image 15 (6).png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
  ];

  const filteredCards =
    filter === "all"
      ? cards
      : cards.filter((card) =>
          card.title.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="w-full bg-[#2f1900] min-h-screen text-white py-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-6 w-full max-w-8xl ">
          {filteredCards.map((card) => (
            <div key={card.id} className=" ">
              <div className="bg-[#92c8ef] rounded p-7 text-black w-full max-w-[552px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full max-w-[483px] max-h-[281px] h-48 object-cover rounded mb-3"
                />
              </div>
              <h3
                className="text-[#FF7800] font-poppins font-semibold not-italic
        text-[20px] sm:text-[28px] md:text-[33.725px] leading-[30px] sm:leading-[40px] md:leading-[49.7px]"
              >
                {card.title}
              </h3>
              <p
                className="text-white w-full sm:w-[90%] md:w-[552px] mt-[10px] text-justify
        font-poppins text-[13px] sm:text-[14px] md:text-[14.2px] not-italic font-normal
        leading-[22px] sm:leading-[24px] md:leading-[24.85px]"
              >
                {card.content}
              </p>
              <p
                className="w-full sm:w-[193px] mt-[21px] text-white font-poppins
        text-[13px] sm:text-[14.2px] not-italic font-medium leading-[140%] sm:leading-[150%]"
              >
                <span className="text-[#FF7800] inline-block align-middle">
                  <i className="ri-arrow-right-line"></i>
                </span>
                {card.content2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
