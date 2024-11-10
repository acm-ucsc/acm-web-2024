"use client";
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
import { motion } from "framer-motion"; // Import motion

export default function Hero() {
  return (
    <>
      <div
        id="home"
        className="relative min-h-[600px] flex flex-col items-center justify-between p-10 sm:p-24 overflow-hidden pb-20 sm:pb-40 bg-black opacity-50"
      >
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
        <main className="flex flex-col items-center justify-center h-auto p-10 sm:p-24 relative" style={{ zIndex: 40 }}>
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <motion.div
              className="w-[150px] sm:w-1/2 flex flex-col items-center justify-center mb-8 sm:mb-0"
              initial={{ scale: 0.9, opacity: 0 }} // Initial state
              animate={{ scale: 1, opacity: 1 }} // Animate to this state
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              <Image src={UCSCLogo} alt="UCSC Logo" height={150} width={150} />
            </motion.div>
            <motion.div
              className="w-[250px] sm:w-1/2 flex flex-col items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }} // Initial state
              animate={{ scale: 1, opacity: 1 }} // Animate to this state
              transition={{ duration: 0.5, delay: 0.2 }} // Duration of the animation with delay
            >
              <Image src={ACMLogo} alt="ACM Logo" height={300} width={300} />
            </motion.div>
          </div>

          {/* Heading Text */}
          <motion.h1
            className="text-2xl sm:text-6xl text-white text-center mt-10 fire-animation shadow-md"
            initial={{ scale: 0.9, opacity: 0 }} // Initial state
            animate={{ scale: 1, opacity: 1 }} // Animate to this state
            transition={{ duration: 0.5, delay: 0.4 }} // Duration of the animation with delay
          >
            <b>ACM Student Chapter - UCSC</b>
          </motion.h1>
          <motion.h1
            className="text-lg sm:text-2xl text-white text-center mt-4 fire-animation"
            initial={{ scale: 0.9, opacity: 0 }} // Initial state
            animate={{ scale: 1, opacity: 1 }} // Animate to this state
            transition={{ duration: 0.5, delay: 0.6 }} // Duration of the animation with delay
          >
            <b>Association for Computing Machinery Student Chapter</b>
          </motion.h1>
          <motion.h1
            className="text-lg sm:text-2xl text-white text-center fire-animation"
            initial={{ scale: 0.9, opacity: 0 }} // Initial state
            animate={{ scale: 1, opacity: 1 }} // Animate to this state
            transition={{ duration: 0.5, delay: 0.8 }} // Duration of the animation with delay
          >
            <b>University of Colombo School of Computing</b>
          </motion.h1>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-center mt-10 space-x-4">
            <motion.a href="https://facebook.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a href="https://twitter.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaTwitter size={20} />
            </motion.a>
            <motion.a href="https://linkedin.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a href="https://instagram.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaInstagram size={20} />
            </motion.a>
            <motion.a href="https://youtube.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaYoutube size={20} />
            </motion.a>
            <motion.a href="https://github.com" className="text-white mx-2" whileHover={{ scale: 1.2 }}>
              <FaGithub size={20} />
            </motion.a>
          </div>
        </main>
      </div>
    </>
  );
}
