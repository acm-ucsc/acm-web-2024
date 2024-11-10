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
    <div
      className="fixed top-0 left-0 right-0 !z-50 flex items-center justify-between h-[60px] p-5 sm:p-10 navbar mt-2"
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="ACM UCSC" height={120} width={170} />
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden sm:flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg font-semibold transition duration-300 transform hover:scale-105 text-center text-sm text-white rounded-md w-[60px] !z-50"
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
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation - Drop-Down Menu */}
      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } navbar fixed top-0 left-0 right-0 text-white p-4 flex flex-col space-y-2 transition-transform duration-300 ease-in-out sm:hidden z-50`}
      >
        <button
          onClick={toggleMenu}
          className="text-white self-end"
          aria-label="Close Menu"
        >
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col justify-center items-end">
          <div className="w-5/6 grid grid-cols-4 gap-4 p-2 rounded-md pr-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-semibold transition duration-300 transform hover:scale-105 text-center text-sm text-white w-[60px] !z-50"
                onClick={toggleMenu}
                style={{zIndex: 50}}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
