"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const Profile = [
    {
      id: 1,
      stars: 5,
      title: "Exceptional Solutions, Exceeded Expectations!",
      message:
        "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
      name: "Mary Johnson",
      role: "CEO of TechCraft Solutions",
      logo: "https://landing-page-eta-nine-30.vercel.app/Image/review-icon-1.svg",
    },
    {
      id: 2,
      stars: 5,
      title: "Transformed Our Business with Innovative Tech!",
      message:
        "We owe a significant part of our success to Company Name. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      name: "Mark Williams",
      role: "COO of InnovateNow Inc",
      logo: "https://landing-page-eta-nine-30.vercel.app/Image/review-icon-2.svg",
    },
    {
      id: 3,
      stars: 5,
      title: "Sculpted User Experiences Beyond Imagination!",
      message:
        "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
      name: "Emily Clark",
      role: "CMO of Visionary Apps",
      logo: "https://landing-page-eta-nine-30.vercel.app/Image/review-icon-3.svg",
    },
    {
      id: 4,
      stars: 5,
      title: "Transformed Our Business with Innovative Tech!",
      message:
        "We owe a significant part of our success to Company Name. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      name: "Mark Williams",
      role: "COO of InnovateNow Inc",
      logo: "https://landing-page-eta-nine-30.vercel.app/Image/review-icon-2.svg",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // lg & below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm & below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = (count) =>
    Array.from({ length: count }, (_, i) => (
      <span key={i} className="text-[#FF7800]">
        ★
      </span>
    ));

  return (
    <>
      <div className="flex flex-col t-container">
        <div className="px-[100px] pt-[64px] max:[1560px]:px-[100px] max-[1025px]:px-[35px] max-[1025px]:py-[40px] max-sm:px-[25px] ">
          <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[25px]">
            {/* Image Section  */}
            <img
              alt="reviews-page-background"
              loading="lazy"
              width={609}
              height={575}
              decoding="async"
              data-nimg="1"
              className=" mx-auto w-[399.5px] h-[285.17px] sm:h-[575px] sm:w-[708.93px] text-transparent"
              src={
                "https://landing-page-eta-nine-30.vercel.app/_next/image?url=%2FImage%2FReviewsBackground.png&w=1920&q=75"
              }
            />

            {/* content section  */}
            <div className="mx-auto xl:mt-[68px] xl:max-w-[547px] sm:pb-7">
              <div className="text-[#FF7800] text-[26px] font-medium leading-[45px] sm:text-[40px]">
                We've stopped counting. Over 500 brands count on us.
              </div>
              <div className="text-[#E6ECED] text-base font-medium leading-[25px] mt-[20px]">
                Our 4,000 team expertise in almost everyprogramming language.
              </div>
            </div>
          </div>

          {/* slick slider */}
          <div className="relative xl:-top-60 md:-top-60 mx-auto sm:-top-70">
            <Slider {...settings}>
              {Profile.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between outline-none">
                    <div>
                      <div className="mb-3">{renderStars(item.stars)}</div>
                      <h3 className="text-xl font-bold mb-2 text-[#1E1B39]">
                        {item.title}
                      </h3>
                      <p className="text-[#6E6C83] mb-6">{item.message}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t ">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                      />
                      <div>
                        <p className="text-base font-bold text-[#1E1B39]">
                          {item.name}
                        </p>
                        <p className="text-sm text-[#6E6C83] mb-2">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
