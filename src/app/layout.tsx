import type { Metadata } from "next";
import Navbar from "@/components/navbar/page";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCSC ACM Student Chapter",
  description: "The official website of the UCSC ACM Student Chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] mt-3 mb-4"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/backgroundmp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </body>
    </html>
  );
}
