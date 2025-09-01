"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Viduranga from "../../../public/assets/images/team/Viduranga.jpg";
import Dineth from "../../../public/assets/images/team/Dineth.webp";
import Senesh from "../../../public/assets/images/team/Senesh.webp";
import Sasanka from "../../../public/assets/images/team/Sasanka.webp";
import Thisam from "../../../public/assets/images/team/Thisam.webp";
import Theekshana from "../../../public/assets/images/team/Theekshana.webp";
import Ramesh from "../../../public/assets/images/team/Ramesh.webp";
import SandaruwanSir from "../../../public/assets/images/team/Dr.-Sanadaruwan.webp";
import AjanthaSir from "../../../public/assets/images/team/Dr.-Ajantha-Athukorale.webp";



import { FaFacebook, FaLinkedin } from "react-icons/fa";

const facultyAdvisorAndSponsor = [
  {
    name: "Dr. Ajantha Atukorale",
    position: "Faculty Sponsor",
    picture: AjanthaSir,
    social: {
      facebook: "https://www.facebook.com/share/1AU3gbTRb7/?mibextid=LQQJ4d",
      linkedin:
        "https://www.linkedin.com/in/ajantha-atukorale-13043423b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      scholer: "https://scholar.google.com/citations?user=245C4lYAAAAJ",
    },
  },
  
  {
    name: "Dr. Damitha Sandaruwan",
    position: "Faculty Advisor",
    picture: SandaruwanSir,
    social: {
      facebook: "https://www.facebook.com/share/1E5uJXgrbF/?mibextid=LQQJ4d",
      linkedin:
        "https://www.linkedin.com/in/damitha-sandaruwan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      scholer: "https://scholar.google.com/citations?user=KUt7bMUAAAAJ",
    },
  },
];

const committeeMembers = [
  {
    name: " Viduranga Landers ",
    position: "Chairperson",
    picture: Viduranga,
  },
  {
    name: "Dineth Palliyaguru",
    position: "Vice Chairperson",
    picture: Dineth,

  },
  {
    name: "Sasanka Wakista",
    position: "Secretary",
    picture: Sasanka,
  },
  {
    name: "Senesh Gamage",
    position: "Membership Chairperson",
    picture: Senesh,
  },
  {
    name: "Thisum Dinujaya",
    position: "Treasurer",
    picture: Thisam,
  },
  {
    name: "Theekshana Dissanayake",
    position: "Design Master",
    picture: Theekshana,
  },
  {
    name: "Ramesh Peshala",
    position: "Web Master",
    picture: Ramesh,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1.1, transition: { duration: 0.6 } },
};

export default function ExecutiveCommittee() {
  return (
    <div id="team" className="pt-16 bg-black">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center mt-4">
        Faculty Sponsor <br className="md:hidden sm:block"></br> and Advisor
      </h1>
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 w-3/4 md:w-1/3">
          {facultyAdvisorAndSponsor.map((member, index) => (
            <motion.div
              key={index}
              className="w-full p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 cursor-pointer mb-3"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={member.picture}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl sm:text-xl font-bold text-white mb-2 text-center">
                {member.name}
              </h2>
              <p className="text-base text-gray-400 mb-4">{member.position}</p>
              <div className="flex gap-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors"
                  >
                    <FaFacebook />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
        Executive <br className="md:hidden sm:block"></br> Committee
      </h1>
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-3/4 md:w-full max-w-screen-lg">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 cursor-pointer mb-2 w-full"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={member.picture}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl sm:text-xl font-bold text-white mb-2 text-center">
                {member.name}
              </h2>
              <p className="text-base text-gray-400 mb-4">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
