import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Epilogue } from 'next/font/google';
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/index";

// Font config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ 
  variable: "--font-inter", 
  subsets: ["latin"] 
});

const epilogue = Epilogue({ 
  variable: "--font-epilogue", 
  subsets: ["latin"] 
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${epilogue.variable}`}
    >
      <body className="max-w-[1440px] mx-auto bg-black text-white font-inter">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
