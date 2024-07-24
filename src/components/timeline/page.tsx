"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const timelineEvents = [
  {
    date: "January 2024",
    title: "Event 1",
    description: "Description of Event 1",
  },
  {
    date: "February 2024",
    title: "Event 2",
    description: "Description of Event 2",
  },
  {
    date: "March 2024",
    title: "Event 3",
    description: "Description of Event 3",
  },
  {
    date: "April 2024",
    title: "Event 4",
    description: "Description of Event 4",
  },
  {
    date: "May 2024",
    title: "Event 5",
    description: "Description of Event 5",
  },
];

export default function Timeline() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="flex flex-col items-center py-16 bg-black">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center w-full max-w-3xl mb-4">
        2024 Timeline
      </h1>
      <div className="relative w-full max-w-5xl">
        <div className="border-l-2 border-secondary absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col items-center">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`mb-8 w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center`}
              custom={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={controls}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div
                className={`w-full sm:w-1/2 px-4 ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <motion.div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm text-secondary mb-4">
                    <b>{event.date}</b>
                  </p>
                  <p className="text-base text-white">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
