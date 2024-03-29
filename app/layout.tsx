import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">  
      <body className={inter.className}>
      <div className="relative h-screen w-full">
        <Image src="/chimney.jpg" alt="Background image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-40 z-20">
          <Navbar />
            {children}    
            </div>
        </div>
      </body>

    </html>
  );
}