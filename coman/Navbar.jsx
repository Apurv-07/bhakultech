"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const toggleMenu = () => setClick(!click);

  const navItems = [
    { name: "Solutions", path: "/Solutions" },
    { name: "Services", path: "/Services" },
    { name: "Industries", path: "/Industries" },
    { name: "Company", path: "/Company" },
    { name: "Careers", path: "/Careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full  z-50 bg-[#1A0D02] shadow">
      <div className="max-w-[1420px] mx-auto px-6 lg:px-[73px] flex  items-center justify-between h-20 font-['Inter']">
        {/* Logo */}
        <div className="text-[#FF7800] text-2xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center w-full justify-center space-x-10">
          {/* <ul className="flex items-center space-x-10 text-[16px]"> */}
          <ul className="flex items-center space-x-10  text-[16px]">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="text-zinc-100 hover:text-[#FF7800] transition text-sm tracking-wide"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {/* <button
            className="ml-10 bg-white md-flex sm-hidden
          text-black rounded-lg hover:text-[#FF7800] w-24 h-8 transition cursor-pointer "
          >
            Contact Us
          </button> */}
        </div>
        <button
          className="ml-10 bg-white hidden
  md:flex   w-24 h-8  justify-center text-center       text-black rounded-lg hover:text-[#FF7800] transition cursor-pointer "
        >
          Contact Us
        </button>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden md:hidden text-2xl text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {click ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="lg:hidden bg-[#0f0f0f] px-6 py-4">
          <ul className="flex flex-col  text-center space-y-4 text-[18px] text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setClick(false)}
                  className="block py-2 hover:bg-slate-800 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div>
              <button className="mt-4 bg-white text-black px-6 py-2  rounded-lg hover:bg-gray-200 transition">
                Contact Us
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
