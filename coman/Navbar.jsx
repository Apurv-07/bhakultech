import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#0A0A0A] max-w-[1440px] border border-red-500 mx-auto">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]">
        <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
          <div className="text-white font-bold">Logo</div>
          <div className="flex items-center space-x-6 text-white">
            <Link href="/Solutions">Solutions</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Industries">Industries</Link>
            <Link href="/Company">Company</Link>
            <Link href="/Careers">Careers</Link>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
