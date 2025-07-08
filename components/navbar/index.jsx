"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white font-['Inter'] text-sm tracking-wide">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-10 sm:h-20 px-4 sm:px-8 dm:px-12 xl:px-16">
        {/* Logo or placeholder */}
        <div className="text-xl font-bold text-[#FF7800]">Logo</div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-10 items-center">
          {["Solutions", "Services", "Industries", "Company", "Careers"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLocaleUpperCase}`}
                className="text-sm hover:text-[#FF7800] transition"
              >
                {item}
              </Link>
            )
          )}
        </nav>
        <div className="hidden sm:flex">
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 rounded-lg hover:text-[#FF7800] transition"
          >
            Contact us
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-black/90 px-4 pb-4">
          {["Solutions", "Services", "Industries", "Company", "Careers"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase}`}
                className="block py-4 text-sm border-b border-gray-700 hover:text-[#FF7800]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block mt-3 bg-white text-black text-center px-4 py-2 rounded-lg hover:text-[#FF7800]"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </header>

    // <div className="w-[1420px] h-20 left-0 top-0 fixed z-50">
    //   <div className="w-[1420px] h-20 left-0 top-0 absolute bg-black/70">
    //     <div className="w-20 h-5 left-[443.11px] top-[27.73px] absolute">
    //       <div className="w-16 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
    //         <Link
    //           className="hover:text-[#FF7800] hover:transition"
    //           href="/Solutions"
    //         >
    //           Solutions
    //         </Link>
    //       </div>
    //       <div className="w-2 h-1.5 left-[73.40px] top-[5.92px] absolute overflow-hidden">
    //         <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //           <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //             <img src={"/iconImages/dropdown-arrow.svg.svg"} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-20 h-5 left-[573.34px] top-[27.73px] absolute">
    //       <div className="w-14 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
    //         <Link
    //           className="hover:text-[#FF7800] hover:transition"
    //           href="/Services"
    //         >
    //           Services
    //         </Link>
    //       </div>
    //       <div className="w-2 h-1.5 left-[65.45px] top-[5.92px] absolute overflow-hidden">
    //         <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //           <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //             <img src={"/iconImages/dropdown-arrow.svg.svg"} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-20 h-5 left-[695.62px] top-[27.73px] absolute">
    //       <div className="w-16 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
    //         <Link
    //           className="hover:text-[#FF7800] hover:transition"
    //           href="/Industries"
    //         >
    //           Industries
    //         </Link>
    //       </div>
    //       <div className="w-2 h-1.5 left-[77.82px] top-[5.92px] absolute overflow-hidden">
    //         <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //           <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //             <img src={"/iconImages/dropdown-arrow.svg.svg"} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-20 h-5 left-[830.28px] top-[27.73px] absolute">
    //       <div className="w-16 h-4 left-[0.11px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
    //         <Link
    //           className="hover:text-[#FF7800] hover:transition"
    //           href="/Company"
    //         >
    //           Company
    //         </Link>
    //       </div>
    //       <div className="w-2 h-1.5 left-[73px] top-[5.92px] absolute overflow-hidden">
    //         <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //           <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
    //             <img src={"/iconImages/dropdown-arrow.svg.svg"} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-12 h-5 left-[960.12px] top-[27.73px] absolute">
    //       <div className="w-12 h-4 left-0 top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] cusor-pointer">
    //         <Link
    //           className="hover:text-[#FF7800] hover:transition"
    //           href="/Careers"
    //         >
    //           Careers
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="w-24 h-8 left-[1244.33px] top-[20.71px] absolute">
    //       <div className="w-24 h-8 left-0 top-0 absolute bg-white rounded-lg outline-[0.74px] outline-offset-[-0.74px] outline-zinc-100/80">
    //         <div className="w-16 h-4 left-[15.53px] top-[7.40px] absolute text-center justify-center text-neutral-800 text-sm font-medium font-['Inter'] leading-none cusor-pointer">
    //           <Link
    //             className="hover:text-[#FF7800] hover:transition"
    //             href="/contact"
    //           >
    //             Contact us
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-32 h-9 left-[73.96px] top-[19.97px] absolute" />
    //   </div>
    // </div>
  );
}
