import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const contactPerson = [
  {
    name: "Samudi Perera",
    position: "Chairperson",
    email: "samudiperera125@gmail.com",
  },
  {
    name: "Sineth Dhananjaya",
    position: "Vice President",
    email: "sinethdananjaya@gmail.com",
  },
  {
    name: "Vihanga Vithanawasam",
    position: "Secretary",
    email: "vihangavithanawasam@gmail.com",
  },
];

export default function Contact() {
  return (
    <>
      <div className="py-16 bg-secondary text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-black text-center mb-12">
          Contact Us
        </h1>

        <div className="w-full flex flex-row justify-center items-center gap-8">
          <div className="flex flex-col w-1/3 h-[450px] justify-center items-center bg-black rounded-lg p-10">
            <h1 className="text-2xl font-bold text-secondary mb-12 w-full text-left">
              <b>Let`s Get In Touch</b>
            </h1>
            <p className="text-base text-white mb-4 flex items-center gap-2 w-full">
              <FaEnvelope className="w-6 h-6 text-secondary m-2" />
              If you have any questions or would like to get in touch with us,
              please feel free to contact us
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="w-6 h-6 text-secondary m-2" />
              ACM UCSC, University of Colombo School of Computing, 35, Reid
              Avenue, Colombo 7.
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaEnvelope className="w-6 h-6 text-secondary m-2 p-1" />
              acmucsc@gmail.com
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaPhoneAlt className="w-6 h-6 text-secondary m-2 p-1" />
              +94 77 123 4567
            </p>
          </div>
          <div className="flex flex-col w-1/3 h-[450px] justify-center items-center bg-black rounded-lg p-10">
            {/* <h1 className="text-2xl font-bold text-secondary mb-12 w-full text-left">
              <b>Contact Us</b>
            </h1> */}
            {contactPerson.map((person, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-center items-center transform transition duration-500 cursor-pointer p-4"
              >
                <h1 className="text-1xl font-bold text-secondary text-center w-full">
                  {person.name}
                </h1>
                <p className="text-base text-white text-center w-full">
                  {person.position}
                </p>
                <p className="text-base text-white text-center w-full">
                  {person.email}
                </p>
                <hr className="w-3/4 border-1 border-secondary my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
