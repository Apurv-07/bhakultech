"use client";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full bg-amber-950 max-w-[1420px] h-auto max-h-[920px] px-4">
      {/* Heading Section */}
      <div className="text-center mt-[138px]">
        <h1 className="font-poppins text-[42.6px] not-italic font-semibold leading-[56.8px] text-white">
          Contact Us
        </h1>
        <p className="font-poppins text-[14px] font-normal leading-6 text-white max-w-[498px] mx-auto mt-3.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Form Section */}
      <div className="h-auto w-full max-w-[941px] bg-amber-50 rounded-[10.65px] mt-[56px] mx-auto p-[48px]">
        <form className="space-y-6 text-black">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm font-medium mb-2 ">
                Name
              </label>
              <input
                id="name"
                name="FullName"
                type="text"
                placeholder="Your Name"
                className="w-full border  border-gray-300 rounded-lg px-[28.4px] py-[15.975px]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-[28.4px] py-[15.975px]"
              />
            </div>
          </div>

          {/* Phone and Subject */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-[#000]"
              >
                Subject
              </label>
              <input
                id="phone"
                name="Phone"
                type="tel"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-[28.4px] py-[15.975px]"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="Subject"
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-[28.4px] py-[15.975px]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-[120px]"
            ></textarea>
          </div>
          <button className="flex w-[225px] h-[56px] p-[13px] justify-center text-center gap-[8px] bg-[#FF7800] rounded-[36px]">
            <span
              className="text-[#F4F6FC] font-manrope text-[15.975px] not-italic font-semibold leading-[28.4px]
"
            >
              {" "}
              Send message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
