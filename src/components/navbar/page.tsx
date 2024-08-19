import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between shadow-lg h-[60px] p-10 bg-black">
      <div className="text-xl font-bold">
        <Image src={logo} alt="ACM UCSC" height={100} width={100}></Image>
      </div>
      <nav className="flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-white transition duration-300 hover:text-secondary"
          >
            <b>{link.label}</b>
          </a>
        ))}
      </nav>
    </div>
  );
}
