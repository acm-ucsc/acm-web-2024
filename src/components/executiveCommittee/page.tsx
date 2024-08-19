"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Samudi from "../../../public/assets/images/team/Samudi.jpg";
import Sineth from "../../../public/assets/images/team/Sineth.jpg";
import Dasun from "../../../public/assets/images/team/Dasun.jpg";
import Vihanga from "../../../public/assets/images/team/Vihanga.jpg";
import Ravindu from "../../../public/assets/images/team/Ravindu.jpg";
import Gayandee from "../../../public/assets/images/team/Gayandee.jpg";
import Kasun from "../../../public/assets/images/team/Kasun.jpg";
import SandaruwanSir from "../../../public/assets/images/team/Dr. Sanadaruwan.png";
import AjanthaSir from "../../../public/assets/images/team/Dr.-Ajantha Athukorale.jpg";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const facultyAdvisorAndSponsor = [
  {
    name: "Dr. Ajantha Atukorale",
    position: "Faculty Sponsor",
    picture: AjanthaSir,
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Dr. Damitha Sandaruwan",
    position: "Faculty Advisor",
    picture: SandaruwanSir,
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
];

const committeeMembers = [
  {
    name: "Samudi Perera",
    position: "Chairperson",
    picture: Samudi,
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Sineth Dhananjaya",
    position: "Vice President",
    picture: Sineth,
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Vihanga Vithanawasam",
    position: "Secretary",
    picture: Vihanga,
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Dasun Thathsara",
    position: "Membership Chair",
    picture: Dasun,
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Ravindu Hasanka",
    position: "Treasurer",
    picture: Ravindu,
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Gayandee Rajapaksha",
    position: "Design Master",
    picture: Gayandee,
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Kasun Udara",
    position: "Web Master",
    picture: Kasun,
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 }, // Initial state with scale
  visible: { opacity: 1, y: 0, scale: 1.1, transition: { duration: 0.6 } }, // Animated state with scale
};

export default function ExecutiveCommittee() {
  return (
    <div className="py-16 bg-black">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
        Faculty Sponsor and Advisor
      </h1>
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <div className="flex flex-wrap justify-center px-4 w-3/4 mx-auto">
          {facultyAdvisorAndSponsor.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 cursor-pointer m-6 min-w-[250px] min-h-[280px]"
              variants={itemVariants}
              whileInView="visible" // Trigger animation when the component is in view
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }} // Adjusted viewport settings
            >
              <Image
                src={member.picture}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-1xl font-bold text-white mb-2">
                {member.name}
              </h2>
              <p className="text-base text-gray-400 mb-4">{member.position}</p>
              <div className="flex gap-4">
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
        Executive Committee
      </h1>
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-4/5">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 cursor-pointer m-4 min-w-[250px] min-h-[280px]"
              variants={itemVariants}
              whileInView="visible" // Trigger animation when the component is in view
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }} // Adjusted viewport settings
            >
              <Image
                src={member.picture}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-1xl font-bold text-white mb-2">
                {member.name}
              </h2>
              <p className="text-base text-gray-400 mb-4">{member.position}</p>
              <div className="flex gap-4">
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
