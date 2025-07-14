"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect  } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Company", path: "/company" },
    { name: "Careers", path: "/careers" },
  ];

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 text-sm bg-background">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-between h-10 md:h-20">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-[#FF7800]">
            <Link href={"/"}>BakhulTech</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 justify-center font-bold">
            <ul className="flex space-x-10 text-base">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-[#FF7800] transition text-sm tracking-wide"
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="hidden md:flex bg-white text-black px-4 py-2 rounded-lg hover:text-[#FF7800] transition font-semibold">
            <Link href={"/contact"}>Contact Us</Link>
          </button>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0f0f0f] px-4 py-4">
            <ul className="flex flex-col text-start space-y-4 text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:bg-slate-800 rounded border-b border-gray-700 hover:text-[#FF7800] font-bold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition font-semibold">
                <Link href={"/contact"}>Contact Us</Link>
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
