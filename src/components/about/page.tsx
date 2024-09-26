"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AboutImages from "../aboutImages/page";

export default function About() {
  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll handler on component mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      <div id="about" className="h-auto flex flex-row justify-center items-center py-10 bg-black">
        <div className="flex flex-col justify-center items-center w-1/2 p-10">
          <motion.h1
            className="text-4xl font-bold text-white mb-4 text-left w-4/5 animate-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            className="text-1xl text-white w-4/5 animate-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The ACM UCSC is the student chapter of the Association for Computing
            Machinery at the University of Colombo School of Computing.
            Comprised of tech-savvy students, our group is dedicated to
            fostering a love for technology and computing. We aim to create a
            collaborative environment where students can learn, share, and grow
            together. Through organizing a variety of events, workshops, and
            competitions, we help students enhance their skills and expand their
            knowledge in computing. Additionally, we offer students the chance
            to connect with industry professionals, keeping them updated on the
            latest technological trends.
          </motion.p>
          <motion.p
            className="text-1xl text-white mt-4 w-4/5 animate-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Engaging with our chapter not only advances technological expertise
            but also hones essential personal development skills. By
            participating in our activities, students can develop
            organizational, leadership, and interpersonal skills, preparing them
            for future professional challenges. Join us to be a part of a
            vibrant community that supports both your technical and personal
            growth.
          </motion.p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 p-10 pr-20">
          <AboutImages />
        </div>
      </div>
    </>
  );
}
