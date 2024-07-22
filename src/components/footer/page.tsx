import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center w-full p-10">
        <Image src={logo} alt="ACM Logo" width={200} height={200} />
        <div className="flex flex-col justify-center items-center md:items-start md:ml-10 mt-4 md:mt-0">
            <h1 className="text-1xl font-bold text-center w-full">Association for Computing Machinery Student Chapter</h1>
            <h1 className="text-1xl font-bold text-center w-full text-secondary">University of Colombo School of Computing</h1>
          <div className="flex space-x-4 w-full justify-center items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 w-full" />
      <div className="pt-4 mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} ACM UCSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
