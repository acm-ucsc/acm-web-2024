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
import Project_Verse_Image from "./Monthly_Meetup_03-Project_Verse/monthly_Meetup_project_verse.jpeg";
import ACM_Introductory_Image from "./ACM_Introductory_Session/acm_introductory_session.jpeg";
import Qiskit_Fall_Fest_Image from "./Qiskit_Fall_Fest_2025/qiskit_fall_fest_2025.png";


const events = [
  {
    title: "Qiskit Fall Fest 2025",
    description:
      "Join us for an exciting quantum computing workshop and hackathon featuring IBM Qiskit. Learn quantum programming and compete in quantum challenges.",
    date: "October 2025 - Ongoing",
    imageUrl: Qiskit_Fall_Fest_Image,
    isOngoing: true,
    websiteUrl: "https://ucsc.acm.org/qiskitfallfest",
  },
  {
    title: "ACM Introductory Session 2025",
    description:
      "The ACM Introductory Session is an event aimed at welcoming new members and introducing them to the ACM community.",
    date: "27th August 2025",
    imageUrl: ACM_Introductory_Image,
  },
  {
    title: "Project Verse 1.0 - Monthly Meetup July 2025",
    description:
      "Project Verse 1.0 - Monthly Meetup July 2025 is a hands-on workshop to learn about Project Verse, a new way to collaborate on projects.",
    date: "24th July 2025",
    imageUrl: Project_Verse_Image,
  },
  {
    title: "ReidXtream 2024",
    description:
      "ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch of UCSC in collaboration with the ACM Student Chapter of UCSC.",
    date: "7th September",
    imageUrl: ReidXtreme_Image,
  },
  {
    title: "Advanced GitHub and Azure Cloud - Monthly Meetup July 2024",
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
    if (window.innerWidth < 768) {
      setItemsPerView(1); // Mobile view
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2); // Tablet view
    } else if (window.innerWidth < 1280) {
      setItemsPerView(3); // Small desktop
    } else {
      setItemsPerView(4); // Large desktop view
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
    <>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    <div className="relative max-w-7xl mx-auto mt-8 px-4">
      <div className="relative overflow-hidden rounded-lg">
        <motion.div
          ref={ref}
          className="flex gap-4"
          initial={{ x: "0%" }}
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`card shadow-lg rounded-lg h-full relative transform transition-all duration-300 hover:scale-105 ${
                event.isOngoing 
                  ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 border-2 border-purple-300 shadow-purple-500/50 hover:shadow-purple-500/70 hover:shadow-2xl animate-pulse-slow' 
                  : 'bg-primary hover:shadow-xl'
              }`}>
                {event.isOngoing && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-2 rounded-full text-xs font-bold animate-bounce z-10 shadow-lg border border-white/20">
                    ⚡ LIVE NOW
                  </div>
                )}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    className="rounded-t-lg object-cover transition-transform duration-500 hover:scale-110"
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                  {event.isOngoing && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h5 className={`text-lg font-bold text-center mb-2 transition-colors duration-300 ${
                      event.isOngoing ? 'text-white drop-shadow-lg' : 'text-white'
                    }`}>
                      {event.title}
                    </h5>
                    <p className={`text-sm text-center mb-3 leading-relaxed ${
                      event.isOngoing ? 'text-purple-100' : 'text-gray-400'
                    }`}>
                      {event.description}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-semibold mb-3 ${
                      event.isOngoing ? 'text-purple-100' : 'text-white'
                    }`}>
                      {event.date}
                    </p>
                    {event.websiteUrl && (
                      <button
                        onClick={() => {
                          console.log('Button clicked! Opening:', event.websiteUrl);
                          window.open(event.websiteUrl, '_blank');
                        }}
                        className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                          event.isOngoing 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 border-2 border-white/20' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        🚀 Join Event
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full shadow-lg transition-all duration-200 z-10 ${
            currentIndex === 0 
              ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
              : "bg-white text-black hover:bg-gray-100 hover:shadow-xl"
          }`}
        >
          &#8249;
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full shadow-lg transition-all duration-200 z-10 ${
            currentIndex >= maxIndex 
              ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
              : "bg-white text-black hover:bg-gray-100 hover:shadow-xl"
          }`}
        >
          &#8250;
        </button>
      </div>
    </div>
    </>
  );
};

export default Carousel;
