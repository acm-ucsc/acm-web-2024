import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-10 px-6 flex flex-col items-center">
      <div className="container mx-auto flex flex-col justify-center items-center md:items-start md:flex-row w-full p-6 md:p-10">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
          <Image src={logo} alt="ACM Logo" width={150} height={150} />
        </div>
        <div className="flex flex-col items-center md:items-start md:ml-10 text-center md:text-left w-full md:w-2/3">
          <h1 className="text-2xl md:text-2xl font-bold mb-2">Association for Computing Machinery Student Chapter</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">University of Colombo School of Computing</h2>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 w-3/4 my-6" />
      <div className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ACM UCSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
