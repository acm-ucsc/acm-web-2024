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

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-between p-24 overflow-hidden pb-40">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] mt-6 mb-4"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/backgroundmp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <main className="flex flex-col items-center justify-center h-auto p-24 relative z-10">
          <div className="flex flex-row items-center justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={ACMLogo} alt="ACM Logo" height={500} width={500} />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={UCSCLogo} alt="UCSC Logo" height={175} width={175} />
            </div>
          </div>
          <h1 className="text-6xl text-white text-center mt-10 fire-animation shadow-md">
            <b>UCSC ACM Student Chapter</b>
          </h1>
          <h1 className="text-2xl text-secondary text-center mt-4 fire-animation">
            <b>Association for Computing Machinery Student Chapter</b>
          </h1>
          <h1 className="text-2xl text-secondary text-center fire-animation">
            <b>University of Colombo School of Computing</b>
          </h1>
          <div className="flex flex-row items-center justify-center mt-10">
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
