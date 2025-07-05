import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
const Navbar = () => {
  return (
    // <div className="bg-[#0A0A0A] max-w-[1440px] border border-red-500 mx-auto">
    //   <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]">
    //     <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
    //       <div className="text-white font-bold">Logo</div>
    //       <div className="flex items-center space-x-6 text-white">
    //         <Link href="/Solutions">Solutions</Link>
    //         <Link href="/Services">Services</Link>
    //         <Link href="/Industries">Industries</Link>
    //         <Link href="/Company">Company</Link>
    //         <Link href="/Careers">Careers</Link>
    //       </div>
    //       <button className="bg-white text-black px-4 py-2 rounded-lg">
    //         Contact us
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="w-[1420px] h-20 left-0 top-0 fixed z-50">
      <div className="w-[1420px] h-20 left-0 top-0 absolute bg-black/70">
        <div className="w-20 h-5 left-[443.11px] top-[27.73px] absolute">
          <div className="w-16 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
            <Link
              className="hover:text-[#FF7800] hover:transition"
              href="/Solutions"
            >
              Solutions
            </Link>
          </div>
          <div className="w-2 h-1.5 left-[73.40px] top-[5.92px] absolute overflow-hidden">
            <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
              <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
                <img src={"/iconImages/dropdown-arrow.svg.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-5 left-[573.34px] top-[27.73px] absolute">
          <div className="w-14 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
            <Link
              className="hover:text-[#FF7800] hover:transition"
              href="/Services"
            >
              Services
            </Link>
          </div>
          <div className="w-2 h-1.5 left-[65.45px] top-[5.92px] absolute overflow-hidden">
            <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
              <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
                <img src={"/iconImages/dropdown-arrow.svg.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-5 left-[695.62px] top-[27.73px] absolute">
          <div className="w-16 h-4 left-[0.12px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
            <Link
              className="hover:text-[#FF7800] hover:transition"
              href="/Industries"
            >
              Industries
            </Link>
          </div>
          <div className="w-2 h-1.5 left-[77.82px] top-[5.92px] absolute overflow-hidden">
            <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
              <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
                <img src={"/iconImages/dropdown-arrow.svg.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-5 left-[830.28px] top-[27.73px] absolute">
          <div className="w-16 h-4 left-[0.11px] top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] tracking-wide cusor-pointer">
            <Link
              className="hover:text-[#FF7800] hover:transition"
              href="/Company"
            >
              Company
            </Link>
          </div>
          <div className="w-2 h-1.5 left-[73px] top-[5.92px] absolute overflow-hidden">
            <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
              <div className="w-2 h-1.5 left-0 top-0 absolute overflow-hidden">
                <img src={"/iconImages/dropdown-arrow.svg.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-12 h-5 left-[960.12px] top-[27.73px] absolute">
          <div className="w-12 h-4 left-0 top-[0.74px] absolute justify-center text-zinc-100 text-sm font-normal font-['Inter'] cusor-pointer">
            <Link
              className="hover:text-[#FF7800] hover:transition"
              href="/Careers"
            >
              Careers
            </Link>
          </div>
        </div>
        <div className="w-24 h-8 left-[1244.33px] top-[20.71px] absolute">
          <div className="w-24 h-8 left-0 top-0 absolute bg-white rounded-lg outline-[0.74px] outline-offset-[-0.74px] outline-zinc-100/80">
            <div className="w-16 h-4 left-[15.53px] top-[7.40px] absolute text-center justify-center text-neutral-800 text-sm font-medium font-['Inter'] leading-none cusor-pointer">
              <Link
                className="hover:text-[#FF7800] hover:transition"
                href="/contact"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-32 h-9 left-[73.96px] top-[19.97px] absolute" />
      </div>
    </div>
  );
};

export default Navbar;
