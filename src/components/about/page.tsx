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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left w-full lg:w-4/5 mt-4">
          ABOUT US
        </h1>
        <p className="text-base sm:text-lg text-white text-center lg:text-left w-full lg:w-4/5">
          The ACM Student Chapter at the University of Colombo School of
          Computing (UCSC) is a dynamic community of passionate, tech-driven
          students committed to advancing knowledge in computing and technology.
          As part of the global Association for Computing Machinery, we provide
          a platform to explore cutting-edge technologies, collaborate on
          innovative ideas, and build essential personal and professional
          skills.
        </p>
        <p className="text-base sm:text-lg text-white mt-4 text-center lg:text-left w-full lg:w-4/5">
          Join us to be part of an inspiring network that nurtures technical
          expertise and leadership, empowering you to thrive in the
          ever-evolving computing world.
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
