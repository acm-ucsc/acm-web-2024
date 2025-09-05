"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect, useRef } from "react";

// Define the activities array
const activities = [
  {
    title: "EVENTS",
    description:
      "We host various events throughout the year to help students enhance their skills and expand their knowledge in computing.",
  },
  {
    title: "WORKSHOPS",
    description:
      "We conduct workshops to allow students to learn new technologies and tools. Our workshops cover a wide range of topics.",
  },
  {
    title: "COMPETITIONS",
    description:
      "We organize competitions to challenge students and help them apply their knowledge in a competitive environment.",
  },
  {
    title: "MONTHLY MEETUPS",
    description:
      "We conduct monthly meetups to allow students to connect with professionals and learn about the latest technological trends.",
  },
  {
    title: "MEMBER MEETUPS",
    description:
      "We organize fun and interactive meetups to build friendships, foster teamwork, and develop leadership skills among members.",
  },
];

export default function WhatACMDo(): ReactElement {
  return (
    <div className="min-h-[750px] w-full bg-black py-16 px-4" id="acm">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center w-full max-w-4xl mx-auto mt-4">
        WHAT ACM UCSC DO
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-3/4 md:w-full">
        {activities.map((activity, index) => (
          <FadeInSlideUp key={index} index={index} activity={activity} />
        ))}
      </div>
    </div>
  );
}

interface Activity {
  title: string;
  description: string;
}

interface FadeInSlideUpProps {
  index: number;
  activity: Activity;
}

const FadeInSlideUp = ({
  index,
  activity,
}: FadeInSlideUpProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 0.1 }
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

  //test

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg cursor-pointer overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-secondary mb-2 text-center">
          {activity.title}
        </h1>
        <p className="text-sm sm:text-base text-white text-center">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );
};
