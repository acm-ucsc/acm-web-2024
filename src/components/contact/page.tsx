"use client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact person data
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
    email: "vihanga123@gmail.com",
  },
];

// Motion variants for animation
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.6 } },
};

// Define the type for the contact person object
interface ContactPerson {
  name: string;
  position: string;
  email: string;
}

// Define the type for the props in ContactCard
interface ContactCardProps {
  person: ContactPerson;
}

// Reusable Contact Card component with typed props
const ContactCard = ({ person }: ContactCardProps) => (
  <motion.div
    className="rounded-lg p-6 shadow-md transform transition duration-500"
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    exit="exit"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="text-xl font-bold text-secondary mb-2 text-center md:text-right">
      {person.name}
    </h2>
    <p className="text-base text-white mb-1 text-center md:text-right">{person.position}</p>
    <p className="text-base text-white text-center md:text-right">{person.email}</p>
  </motion.div>
);

// Define the type for the props in ContactDetail
interface ContactDetailProps {
  icon: JSX.Element;
  text: string;
}

// Reusable Contact Detail Component with typed props
const ContactDetail = ({ icon, text }: ContactDetailProps) => (
  <p className="text-base text-white mb-4 flex items-center gap-2 text-center md:text-left">
    {/* {icon} */}
    {text}
  </p>
);

// Main Contact Component
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 p-4 bg-black rounded-lg shadow-lg">
          Contact Us
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-4/5 mx-auto">
          {/* Contact Details */}
          <motion.div
            className="w-full sm:w-1/3 rounded-lg p-8 shadow-lg transform transition duration-500"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
              Let’s Get In Touch
            </h2>
            <ContactDetail
              icon={<FaEnvelope className="text-secondary" />}
              text="If you have any questions or would like to get in touch with us, feel free to contact us."
            />
            <ContactDetail
              icon={<FaMapMarkerAlt className="text-secondary" />}
              text="ACM UCSC, University of Colombo School of Computing, 35, Reid Avenue, Colombo 7."
            />
            <p className="text-base text-white mb-4 text-center">
              acmucsc@gmail.com
            </p>
            <p className="text-base text-white mb-4 text-center">
              +94 77 123 4567
            </p>
          </motion.div>

          {/* Contact Person Cards */}
          <div className="flex flex-col w-full sm:w-2/3 gap-6">
            {contactPerson.map((person, index) => (
              <ContactCard key={index} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
