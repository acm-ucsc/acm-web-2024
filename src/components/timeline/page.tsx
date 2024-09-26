"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaCalendarAlt,
  FaStar,
  FaBolt,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const timelineEvents = [
  {
    date: "January 2024",
    title: "Event 1",
    description: "Description of Event 1",
    icon: <FaCalendarAlt />,
  },
  {
    date: "February 2024",
    title: "Event 2",
    description: "Description of Event 2",
    icon: <FaStar />,
  },
  {
    date: "March 2024",
    title: "Event 3",
    description: "Description of Event 3",
    icon: <FaBolt />,
  },
  {
    date: "April 2024",
    title: "Event 4",
    description: "Description of Event 4",
    icon: <FaRocket />,
  },
  {
    date: "May 2024",
    title: "Event 5",
    description: "Description of Event 5",
    icon: <FaCode />,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

export default function Timeline() {
  return (
    <div className="flex flex-col items-center py-16 bg-black" id="timeline">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center w-full max-w-4xl">
        2024 Timeline
      </h1>
      <div className="relative w-full max-w-5xl">
        <div className="border-l-4 border-secondary absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col items-center">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} index={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineEventProps {
  index: number;
  event: {
    date: string;
    title: string;
    description: string;
    icon: React.ReactElement;
  };
}

const TimelineEvent = ({ index, event }: TimelineEventProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={`mb-12 w-full flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      } items-center`}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <div
        className={`w-full sm:w-1/2 px-4 ${
          index % 2 === 0 ? "order-1" : "order-2"
        }`}
      >
        <motion.div
          className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer relative`}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary p-2 rounded-full">
            <span className="text-white text-2xl">{event.icon}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
          <p className="text-sm text-secondary mb-4">
            <b>{event.date}</b>
          </p>
          <p className="text-base text-white">{event.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
