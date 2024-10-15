"use client";
import AboutImages from "../aboutImages/page";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="h-auto flex flex-col lg:flex-row justify-center items-center py-10 bg-black"
    >
      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10"
        initial={{ opacity: 0, y: 50 }} // Initial state
        whileInView={{ opacity: 1, y: 0 }} // Animate to these values when in view
        transition={{ duration: 0.5 }} // Duration of the transition
        viewport={{ once: true }} // Animation only triggers once
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left w-full lg:w-4/5">
          ABOUT US
        </h1>
        <p className="text-base sm:text-lg text-white text-center lg:text-left w-full lg:w-4/5">
          The ACM UCSC is the student chapter of the Association for Computing
          Machinery at the University of Colombo School of Computing. Comprised
          of tech-savvy students, our group is dedicated to fostering a love for
          technology and computing.
        </p>
        <p className="text-base sm:text-lg text-white mt-4 text-center lg:text-left w-full lg:w-4/5">
          Engaging with our chapter not only advances technological expertise
          but also hones essential personal development skills. Join us to be a
          part of a vibrant community that supports both your technical and
          personal growth.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AboutImages />
      </motion.div>
    </div>
  );
}
