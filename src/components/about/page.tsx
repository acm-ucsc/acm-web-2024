"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AboutImages from "../aboutImages/page";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start animation when element is within the viewport or component is mounted
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      });
    };

    // Trigger the animation immediately when the component mounts
    animateElements();

    // Add scroll event listener for further animation
    window.addEventListener("scroll", animateElements);

    return () => window.removeEventListener("scroll", animateElements);
  }, [controls]);

  return (
    <div id="about" className="h-auto flex flex-col lg:flex-row justify-center items-center py-10 bg-black">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left w-full lg:w-4/5 animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          ABOUT US
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-white text-center lg:text-left w-full lg:w-4/5 animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The ACM UCSC is the student chapter of the Association for Computing
          Machinery at the University of Colombo School of Computing.
          Comprised of tech-savvy students, our group is dedicated to
          fostering a love for technology and computing.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg text-white mt-4 text-center lg:text-left w-full lg:w-4/5 animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Engaging with our chapter not only advances technological expertise
          but also hones essential personal development skills. Join us to be
          a part of a vibrant community that supports both your technical and
          personal growth.
        </motion.p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <AboutImages />
      </div>
    </div>
  );
}
