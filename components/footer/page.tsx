"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can add your form submit logic here (API call or email service)
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  type socialLink = {
    name: string,
    icon: string,
    url: string,
  };

  const socialLinks: socialLink[] = [
    {
      name: "Facebook",
      icon: "/iconImages/Facebook.svg",
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: "/iconImages/Instagram.svg",
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: "/iconImages/Twiter.svg",
      url: "https://twitter.com",
    },
  ];

  const socialCards = [
    {
      name: "TWITTER",
      url: "https://twitter.com",
      img: "iconImages/twiter-logo.png",
    },
    {
      name: "YOUTUBE",
      url: "https://youtube.com",
      img: "iconImages/youtube-logo.png",
    },
    {
      name: "LINKEDIN",
      url: "https://linkedin.com",
      img: "iconImages/linkdin-logo.png",
    },
  ];

  return (
    <>
      <div className="bg-zinc-950 py-16 px-6 md:px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="row-span-2  flex flex-col">
            <h2 className="text-amber-600 text-4xl font-semibold font-poppins">
              Bakhul Tech
            </h2>
            <p className="text-white text-xl font-semibold font-poppins mt-1">
              IT Solution & Technology Website
            </p>
            <p className="text-white/80 text-sm font-medium font-poppins mt-6 leading-relaxed">
              With our expertise, we help you optimize operations, enhance
              productivity, and stay ahead of the competition.
            </p>
          </div>

          {/* Information */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins ">
              Information
            </h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li>
                <a href="/press-centre">Press Centre</a>
              </li>
              <li>
                <a href="/blog">Our Blog</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">
              Menu
            </h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="row-span-2 flex flex-col gap-2 ">
            <h3 className="text-white text-xl font-semibold font-poppins mb-4">
              Get In Touch
            </h3>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-1 rounded-full"
                >
                  <img src={link.icon} alt={link.name} className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-neutral-200 text-xs font-poppins mb-4">
              Sign up for our newsletter
            </p>
            <div className="max-w-[250px] flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" flex-grow px-3 py-2 text-xs text-black/50 font-poppins outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-amber-600 text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>
          </div>

           {/* Contact */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">
              Contact
            </h3>
            <div className="text-white/80 text-xs font-poppins space-y-2">
              <p>
                <strong>Phone:</strong> +123 456 789
              </p>
              <p>
                <strong>Email:</strong> contact@example.com
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="flex-col gap-[14px] hidden md:flex md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">
              Company
            </h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li>
                <a href="/terms">Term & Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Social Bar */}
      <div className="hidden md:flex bg-blue-700 py-8 px-6 md:px-8 lg:px-10">
  <div className="max-w-[1440px] mx-auto text-center lg:text-left w-full">
    <h3 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-semibold font-inter mb-6">
      Follow us for the latest updates
    </h3>

    <div className="flex flex-wrap justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20">
      {socialCards.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 transition-transform hover:scale-105"
          aria-label={`Follow us on ${item.name}`}
        >
          <img
            src={item.img}
            alt={`${item.name} icon`}
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <p className="text-white text-sm font-medium font-libre_franklin leading-none">
              {item.name}
            </p>
            <p className="text-white text-xs font-libre_franklin opacity-70">
              linkfields
            </p>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>



      {/* <div className="w-[1420px] h-80 relative">
        <div className="w-[1420px] h-80 left-0 top-0 absolute bg-zinc-950" />
        <div className="w-80 h-20 left-[147.84px] top-[180.36px] absolute justify-start text-white/80 text-sm font-medium font-['Poppins'] leading-normal">
          With our expertise, we help you optimize operations, enhance
          productivity, and stay ahead of the competition.{" "}
        </div>
        <div className="w-80 h-20 left-[147.84px] top-[65.79px] absolute justify-start">
          <span className="text-amber-600 text-4xl font-semibold font-['Poppins']">
            Reck
            <br />
          </span>
          <span className="text-white text-xl font-semibold font-['Poppins']">
            IT Solution & Technology Website
          </span>
        </div>
        <div className="w-24 h-5 left-[564.75px] top-[76.14px] absolute justify-start text-white text-sm font-bold font-['Poppins']">
          Information
        </div>
        <div className="w-24 h-5 left-[564.75px] top-[102.75px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Press Centre
        </div>
        <div className="w-24 h-5 left-[564.75px] top-[122.71px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Our Blog
        </div>
        <div className="w-28 h-5 left-[564.75px] top-[141.19px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Term and Condition
        </div>
        <div className="w-20 h-5 left-[564.75px] top-[189.23px] absolute justify-start text-white text-sm font-bold font-['Poppins']">
          Contact
        </div>
        <div className="w-32 h-5 left-[564.75px] top-[215.85px] absolute justify-start">
          <span className="text-white text-xs font-medium font-['Poppins'] leading-tight">
            Phone :
          </span>
          <span className="text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
            {" "}
            +123 456 789
          </span>
        </div>
        <div className="w-36 h-5 left-[564.75px] top-[235.06px] absolute justify-start">
          <span className="text-white text-xs font-medium font-['Poppins'] leading-tight">
            Email :
          </span>
          <span className="text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
            {" "}
            @example.com
          </span>
        </div>
        <div className="w-10 h-5 left-[816.08px] top-[71.70px] absolute justify-start text-white text-sm font-bold font-['Poppins']">
          Menu
        </div>
        <div className="w-11 h-5 left-[816.08px] top-[98.31px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          About
        </div>
        <div className="w-16 h-5 left-[816.08px] top-[117.53px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Services
        </div>
        <div className="w-16 h-5 left-[816.08px] top-[136.75px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Our Team
        </div>
        <div className="w-16 h-5 left-[816.08px] top-[189.23px] absolute justify-start text-white text-sm font-bold font-['Poppins']">
          Company
        </div>
        <div className="w-28 h-5 left-[816.08px] top-[215.85px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Term & conditions
        </div>
        <div className="w-20 h-5 left-[816.08px] top-[235.06px] absolute justify-start text-white/80 text-xs font-normal font-['Poppins'] leading-tight">
          Privacy Policy
        </div>
        <div className="w-36 h-7 left-[1045.23px] top-[71.70px] absolute justify-start text-white text-xl font-semibold font-['Poppins']">
          Get In Touch
        </div>
        <div className="w-6 h-6 left-[1132px] top-[113.84px] absolute bg-white rounded-full cursor-pointer">
          <img src={"iconImages/Twiter.svg"} />
        </div>
        <div className="w-6 h-6 left-[1088.61px] top-[113.84px] absolute bg-white rounded-full cursor-pointer">
          <img src={"iconImages/Instagram.svg"} />
        </div>
        <div className="w-6 h-6 left-[1045.23px] top-[113.84px] absolute bg-white rounded-full cursor-pointer">
          <img src={"iconImages/Facebook.svg"} />
        </div>
        <div className="w-56 h-9 left-[1045.23px] top-[203.28px] absolute bg-white rounded-3xl" />
        <div className="w-28 h-2.5 left-[1057.05px] top-[216.58px] absolute justify-center text-black/50 text-[10.35px] font-normal font-['Poppins']">
          Enter Your Email Here
        </div>
        <div className="w-20 h-7 left-[1181.24px] top-[208.28px] absolute bg-amber-600 rounded-3xl" />
        <div className="w-20 h-4 left-[1184.61px] top-[213.03px] absolute text-center justify-center text-white text-xs font-medium font-['Poppins']">
          Subscribe{" "}
        </div>
        <div className="w-44 h-6 left-[1045.23px] top-[159.67px] absolute justify-start text-neutral-200 text-xs font-normal font-['Poppins']">
          Sign up for our newsletter
        </div>
      </div>
      <div className="w-[1420px] h-40 relative bg-blue-700">
        <div className="w-[971.07px] h-28 left-[73.96px] top-[29.58px] absolute">
          <div className="w-[582.88px] h-11 left-0 top-0 absolute justify-center text-gray-200 text-4xl font-medium font-['Inter'] leading-10">
            Follow us for the latest updates
          </div>
          <div className="w-24 h-7 left-0 top-[78.99px] absolute">
            <div className="w-14 h-7 left-[34.02px] top-0 absolute text-center justify-center">
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin']">
                TWITTER
                <br />
              </span>
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin'] tracking-wide">
                linkfields
              </span>
            </div>
            <img
              className="w-7 h-7 left-0 top-[0.74px] absolute"
              src="iconImages/twiter-logo.png"
            />
          </div>
          <div className="w-24 h-7 left-[500.71px] top-[78.99px] absolute">
            <div className="w-14 h-7 left-[34.02px] top-0 absolute text-center justify-center">
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin']">
                YOUTUBE
                <br />
              </span>
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin'] tracking-wide">
                linkfields
              </span>
            </div>
            <img
              className="w-7 h-7 left-0 top-[0.74px] absolute"
              src="iconImages/youtube-logo.png"
            />
          </div>
          <div className="w-24 h-7 left-[1003.42px] top-[78.99px] absolute">
            <div className="w-14 h-7 left-[34.02px] top-0 absolute text-center justify-center">
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin']">
                LINKEDIN
                <br />
              </span>
              <span className="text-gray-200 text-xs font-normal font-['Libre_Franklin'] tracking-wide">
                linkfields
              </span>
            </div>
            <img
              className="w-7 h-7 left-0 top-[0.74px] absolute"
              src="iconImages/linkdin-logo.png"
            />
          </div>
        </div>
      </div> */}

      {/* <div className="bg-[#0B0D12] flex flex-col ">
        <div className="px-[100px] py-[84px] max-[1560px]:px-[80px] max-[1025px]:px-[40px] max-[1025px]:py-[35px] max-sm:px-[25px] grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-y-10 gap-x-5 md:gap-x-14 sm:gap-x-16"> */}
      {/* Logo and descrapiton */}
      {/* <div className="row-span-2 gap-[24px] flex flex-col ">
            <div className="">
              <h1 className=" text-[30px] leadin-[25px] text-[#DA7600] font-bold ">
                Bakhul Tech
              </h1>
              <div className="text-base leading-[15px] text-[#ffffff] font-bold">
                IT Solution & Technology Website
              </div>
            </div>
            <div className="text-[14px] justify-start text-[#ffffff] opacity-60 leading-[25px]">
              With our expertise, we help you optimize opreations, enhance
              productivity, and stay ahead of the competiton.
            </div>
          </div> */}

      {/* Information */}
      {/* <div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className=" text-[16px] leading-[15px] text-[#ffffff] font-bold">
              Information
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Press Center
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Our Blog
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Cloud Automation
                </span>
              </Link>
            </div>
          </div> */}

      {/* Menu */}

      {/* <div className="flex flex-col gap-[14px] md:flex md:px-[50px]">
            <span className=" text-base leading-[15px] text-[#ffffff]  font-bold">
              Menu
            </span>
            <div className="grid grid-cols-1 xl:gap-1 md:gap-1 sm:gap-2 gap-2">
              <Link href={"/"}>
                <span className=" text-sm text-[#ffffff] opacity-60  font-normal">
                  About
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Services
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Banking
                </span>
              </Link>
            </div>
          </div> */}

      {/* Get In Touch */}
      {/* <div className="row-span-2 flex flex-col xl:gap-[34px] md:gap-[24px] gap-[24px] md:flex">
            <span className=" text-xl leading-[15px] text-[#ffffff]  font-bold">
              Get In Touch
            </span>
           <div className="flex flex-row gap-4">
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[28px] h-[26px] cursor-pointer">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="14"
                  width="14"
                >
                  <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522"></path>
                </svg>
              </div>
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[30px] h-[28px] cursor-pointer">
                <svg fill="none" viewBox="0 0 24 24" height="14" width="14">
                  <path
                    fill="currentColor"
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#ffffff] border rounded-full flex items-center justify-center border-gray-300 w-[28px] h-[26px] cursor-pointer">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="14"
                  width="14"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </div>
            </div>
            <div className=" text-sm leading-[15px] text-[#ffffff] opacity-65 font-normal">
              Sing up for our newsletter
            </div>

            <div className="bg-[#ffffff] border-none md:border rounded-[50px] px-2 py-[2px] mr-7 w-[270px] xl:w-[270px] md:w-[270px] sm:w-[270px]">
              <input
                placeholder="Enter Your Email"
                type="email"
                className="px-1  placeholder:text-[#8A8E8F] text-[#0B0D12] text-base focus:outline-none  font-normal"
              />
              <button
                type="submit"
                className="bg-[#DA7600] text-xs border-none rounded-[50px] px-2 py-[5px]  font-normal cursor-pointer"
              >
                Subcribe
              </button>
            </div>
          </div> */}

      {/* Contact */}

      {/* <div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className="text-base leading-[15px] text-[#ffffff] font-bold">
              Contact
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Phone
                </span>
              </Link>
              <Link href={"/"}>
                <span className=" text-sm text-[#ffffff] opacity-60 font-normal">
                  Email
                </span>
              </Link>
            </div>
          </div>

          {/* Company */}
      {/*<div className="flex-col gap-[14px] hidden md:flex md:px-[50px]">
            <span className="text-base leading-[15px] text-[#ffffff] font-bold">
              Company
            </span>
            <div className="grid grid-cols-1 gap-1">
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  About
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-sm text-[#ffffff] opacity-60 font-normal">
                  Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
