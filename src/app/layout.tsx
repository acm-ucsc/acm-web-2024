import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCSC ACM Student Chapter - Association for Computing Machinery Student Chapter",
  description:
    "Join the UCSC ACM Student Chapter, a vibrant community at the University of Colombo School of Computing (UCSC), promoting knowledge in computing and technology. Explore cutting-edge innovations, collaborate, and develop professional skills.",
  keywords: [
    "ACM",
    "UCSC",
    "ACM Student Chapter",
    "UCSC",
    "University of Colombo School of Computing",
    "Computing Club",
    "Technology Community",
    "Programming",
    "Innovation",
  ],
  authors: [{ name: "UCSC ACM Student Chapter", url: "https://ucscacm.org" }],
  robots: "index, follow",
  openGraph: {
    title: "UCSC ACM Student Chapter - Association for Computing Machinery Student Chapter",
    description:
      "Join the UCSC ACM Student Chapter, a vibrant community at the University of Colombo School of Computing (UCSC), promoting knowledge in computing and technology. Explore cutting-edge innovations, collaborate, and develop professional skills.",
    url: "https://ucscacm.org", // Update to your actual domain
    images: [
      {
        url: "/assets/images/acm-ucsc-logo-social.jpg", // Add a social share image
        width: 600,
        height: 350,
        alt: "UCSC ACM Student Chapter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ucsc_acm", // Your Twitter handle
    creator: "@ucsc_acm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
