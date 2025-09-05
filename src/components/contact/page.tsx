"use client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Motion variants for animation
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.6 } },
};

// Define the type for the props in ContactDetail
interface ContactDetailProps {
  icon: JSX.Element;
  text: string;
}

// Reusable Contact Detail Component with typed props
const ContactDetail = ({ icon, text }: ContactDetailProps) => (
  <p className="text-base text-white mb-4 flex items-center gap-2 justify-center flex flex-col md:flex-row text-center">
    {icon}
    {text}
  </p>
);

// Main Contact Component
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white mt-8">
          Contact Us
        </h1>
        <motion.div
          className="bg-black text-white p-8 rounded-lg shadow-lg w-full mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Let`s Connect!</h2>
          <p className="text-base text-white mb-4 text-center">Do you have questions or want to collaborate with us? We’d love to hear from you!</p>
          <ContactDetail
            icon={<FaMapMarkerAlt className="text-secondary" />}
            text="ACM UCSC, University of Colombo School of Computing, 35, Reid Avenue, Colombo 7."
          />
          <ContactDetail
            icon={<FaEnvelope className="text-secondary" />}
            text="ucscacmsc@gmail.com"
          />
          <p className="text-base text-white mb-4 text-center">Feel free to reach out – let’s shape the future of technology together.</p>
        </motion.div>
      </div>
    </section>
  );
}
