"use client";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
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
import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (target && target instanceof HTMLElement) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-primary to-black text-white flex flex-col items-center justify-center p-8 sm:p-16 relative overflow-hidden"
    >
      {/* Logo Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 mt-10">
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={UCSCLogo}
            alt="UCSC Logo"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={ACMLogo}
            alt="ACM Logo"
            width={250}
            height={250}
          />
        </motion.div>
      </div>

      {/* Heading Section */}
      <div className="text-center mt-8">
        <motion.h1
          className="text-2xl sm:text-4xl font-bold text-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Association for Computing Machinery Student Chapter
        </motion.h1>
        <motion.h3
          className="text-md sm:text-xl mt-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          University of Colombo School of Computing
        </motion.h3>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-8 cursor-pointer">
        {[ 
          { href: "https://facebook.com", icon: <FaFacebookF /> },
          { href: "https://twitter.com", icon: <FaTwitter /> },
          { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
          { href: "https://instagram.com", icon: <FaInstagram /> },
          { href: "https://youtube.com", icon: <FaYoutube /> },
          { href: "https://github.com", icon: <FaGithub /> },
        ].map(({ href, icon }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      {/* Scroll Down Icon with Smooth Scroll */}
      <motion.div
        className="mt-16 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "#about")}
        >
          <FaChevronDown className="text-3xl text-white animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
