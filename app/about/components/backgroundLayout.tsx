"use client";

import Image from "next/image";
import React from "react";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="relative overflow-hidden">
      {/* 🌌 Background Ellipse 1 (Top) */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <div className="relative w-full h-[800px] overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-full blur-[296.9px]" />
          <Image
            src="/bgImages/about-bg-1.png"
            alt="Background Ellipse 1"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>

      {/* 🌌 Background Ellipse 2 (Middle) */}
      <div className="absolute top-[1200px] left-0 w-full z-0 pointer-events-none">
        <div className="relative w-full aspect-square max-w-[1800px] mx-auto">
          <div className="absolute inset-0 bg-black/20 rounded-full blur-[296.9px]" />
          <Image
            src="/bgImages/about-bg-2.png"
            alt="Background Ellipse 2"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 🌌 Background Ellipse 3 (Bottom) */}
      <div className="absolute top-[2400px] left-0 w-full z-0 pointer-events-none">
        <div className="relative w-full aspect-square max-w-[1800px] mx-auto">
          <div className="absolute inset-0 bg-black/20 rounded-full blur-[296.9px]" />
          <Image
            src="/bgImages/about-bg-3.png"
            alt="Background Ellipse 3"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
