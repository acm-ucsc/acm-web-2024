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
    <div className="py-16 bg-black text-white">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-black p-4 rounded-lg shadow-lg text-white">
        Contact Us
      </h1>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-4 w-4/5">
          <div className="flex flex-col w-full sm:w-1/3 h-auto bg-gray-700 rounded-lg p-8 shadow-lg transform transition duration-500 hover:bg-gray-600">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Let’s Get In Touch
            </h2>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaEnvelope className="w-6 h-6 text-secondary" />
              If you have any questions or would like to get in touch with us,
              please feel free to contact us.
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="w-6 h-6 text-secondary" />
              ACM UCSC, University of Colombo School of Computing, 35, Reid
              Avenue, Colombo 7.
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaEnvelope className="w-3 h-3 text-secondary" />
              acmucsc@gmail.com
            </p>
            <p className="text-base text-white mb-4 flex items-center gap-2">
              <FaPhoneAlt className="w-3 h-3 text-secondary" />
              +94 77 123 4567
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-2/3 gap-6">
            {contactPerson.map((person, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-md transform transition duration-500 hover:bg-gray-700 flex flex-col items-start"
              >
                <h2 className="text-xl font-bold text-secondary mb-2">
                  {person.name}
                </h2>
                <p className="text-base text-white mb-1">{person.position}</p>
                <p className="text-base text-white">{person.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
