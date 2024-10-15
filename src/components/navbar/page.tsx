"use client";
import { useState } from "react";
import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#timeline", label: "Timeline" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between h-[60px] p-5 sm:p-10" style={{zIndex:100}}>
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="ACM UCSC" height={100} width={100} />
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden sm:flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-secondary transition duration-300"
          >
            <b>{link.label}</b>
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
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation - Slide Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-3/4 h-full bg-gray-900 text-white p-6 flex flex-col space-y-6 transition-transform duration-300 ease-in-out sm:hidden z-50`}
      >
        <button
          onClick={toggleMenu}
          className="text-white self-end"
          aria-label="Close Menu"
        >
          <FaTimes size={24} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg font-semibold transition duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            <h1 className="text-right text-white hover:text-white">{link.label}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
