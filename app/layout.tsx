import "./globals.css";

import type { Metadata } from "next";

import { Inter, Epilogue, Poppins ,Geist_Mono , Geist} from 'next/font/google';
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

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
  subsets: ['latin'],
  variable: '--font-inter',
})

const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: "--font-epilogue",
  
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "BakhulTech ",
  description: "IT Solution & Technology ",
  icons:{
    icon:"/fevicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${epilogue.variable} ${poppins.variable}`}
    >
      <body className="max-w-[1440px] mx-auto bg-black text-white font-inter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
