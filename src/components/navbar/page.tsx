"use client";
import { useState, useEffect } from "react";
import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#acm", label: "ACM" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > window.innerHeight);
    setLogoVisible(scrollPosition > window.innerHeight); // Hide logo when scrolled
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target && target instanceof HTMLElement) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] p-5 sm:p-10 transition-colors duration-300 ${
        scrolled
          ? "bg-primary md:bg-black/80 md:backdrop-blur-md"
          : "bg-gradient-to-b from-black to-primary sm:bg-gradient-to-b sm:from-black sm:to-primary"
      }`}
    >
      {/* Logo - Mobile View */}
      <div
        className={`text-xl font-bold transition-all duration-500 ${
          logoVisible ? "opacity-100" : "opacity-100"
        } sm:opacity-100`} // Always visible in desktop view
      >
        <button onClick={scrollToTop}>
          <Image src={logo} alt="ACM UCSC" height={85} width={120} />
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden sm:flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-lg font-semibold text-white hover:text-secondary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu Icon - Mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-primary z-40 flex flex-col items-center justify-between sm:hidden py-8 transform transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-70" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          aria-label="Close Menu"
        >
          <FaTimes size={25} />
        </button>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-semibold text-white hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
