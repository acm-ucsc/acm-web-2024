"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";

import NOI_Image from "./NOI_2024/NOI_2024.png";
import SIGCHI_Image from "./SIGCHI_2024/sigchi_2024.jpg";
import ReidXtreme_Image from "./ReidXtream_2024/reid_xtreme2024.jpg";
import Linux_Kickstart_Image from "./Monthly_Meetup_01-Linux_Kickstart/linux_kick_start.jpg";
import GitHub_Azure_Image from "./Monthly_Meetup_02-GitHub_and_Azure_Cloud/monthly_meetup_github_azure.jpg";


const events = [
  {
    title: "ReidXtream 2024",
    description:
      "ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch of UCSC in collaboration with the ACM Student Chapter of UCSC.",
    date: "7th September",
    imageUrl: ReidXtreme_Image,
  },
  {
    title: "Advanced GitHub and Azure Cloud - Monthly Meetup July",
    description:
      "Advanced GitHub and Azure Cloud - Monthly Meetup July is a hands-on workshop to learn advanced GitHub and Azure Cloud.",
    date: "25th July",
    imageUrl: GitHub_Azure_Image,
  },
  {
    title: "Linux Kickstart: Hands-On Basics - Monthly Meetup June",
    description:
      "Linux Kickstart: Hands-On Basics - Monthly Meetup June is a hands-on workshop to learn the basics of Linux.",
    date: "29th and 30th June",
    imageUrl: Linux_Kickstart_Image,
  },
  {
    title: "NOI 2024",
    description:
      "NOI 2024 is the National Olympiad in Informatics, a prestigious programming competition for high school students in Sri Lanka.",
    date: "2024",
    imageUrl: NOI_Image,
  },
  {
    title: "SIGCHI 2024",
    description:
      "Winter School by Colombo ACM SIGCHI Chapter: Connecting South Asia to collaborate and develop research interest in HCI.",
    date: "2nd, 3rd, and 4th January",
    imageUrl: SIGCHI_Image,
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const totalItems = events.length;
  const maxIndex = totalItems - itemsPerView;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Update itemsPerView based on screen size
  const updateItemsPerView = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(1); // Mobile view
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2); // Tablet view
    } else {
      setItemsPerView(4); // Desktop view
    }
  };

  // Handle window resize
  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-8">
      <div className="relative overflow-hidden rounded-lg">
        <motion.div
          ref={ref}
          className="flex"
          initial={{ x: "0%" }}
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2`}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card bg-primary shadow-md rounded-lg h-full">
                <div className="relative w-full h-56">
                  <Image
                    className="rounded-t-lg object-cover" // Add object-cover to preserve aspect ratio
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover" // Ensure the image doesn't stretch
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex flex-col h-full justify-center items-center">
                  <h5 className="text-xl text-white font-semibold text-center">
                    {event.title}
                  </h5>
                  <p className="text-gray-500 h-auto text-1xl mt-2 flex-1 text-center">
                    {event.description}
                  </p>
                  <p className="text-sm text-white mt-4 text-center">
                    {event.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
            currentIndex === 0 ? "bg-primary" : "bg-black text-white"
          }`}
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
            currentIndex === maxIndex ? "bg-primary" : "bg-black text-white"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
