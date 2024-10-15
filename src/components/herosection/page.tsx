import Image from "next/image";
import UCSCLogo from "../../../public/assets/images/ucsc-logo.png";
import ACMLogo from "../../../public/assets/images/acm-logo-white.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Navbar from "@/components/navbar/page";

export default function Hero() {
  return (
    <>
      <div
        id="home"
        className="relative min-h-[600px] flex flex-col items-center justify-between p-10 sm:p-24 overflow-hidden pb-20 sm:pb-40 bg-black opacity-50"
      >
        <Navbar />
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center h-auto p-10 sm:p-24 relative"style={{zIndex:40}}>
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <div className="w-[150px] sm:w-1/2 flex flex-col items-center justify-center mb-8 sm:mb-0">
              <Image src={UCSCLogo} alt="UCSC Logo" height={150} width={150} />
            </div>
            <div className="w-[250px] sm:w-1/2 flex flex-col items-center justify-center">
              <Image src={ACMLogo} alt="ACM Logo" height={300} width={300} />
            </div>
          </div>

          {/* Heading Text */}
          <h1 className="text-4xl sm:text-6xl text-white text-center mt-10 fire-animation shadow-md text-outline">
            <b>ACM Student Chapter - UCSC</b>
          </h1>
          <h1 className="text-lg sm:text-2xl text-white text-center mt-4 fire-animation text-outline">
            <b>Association for Computing Machinery Student Chapter</b>
          </h1>
          <h1 className="text-lg sm:text-2xl text-secondary text-center fire-animation text-outline2">
            <b>University of Colombo School of Computing</b>
          </h1>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-center mt-10 space-x-4">
            <a href="https://facebook.com" className="text-white mx-2">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" className="text-white mx-2">
              <FaYoutube size={20} />
            </a>
            <a href="https://github.com" className="text-white mx-2">
              <FaGithub size={20} />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
