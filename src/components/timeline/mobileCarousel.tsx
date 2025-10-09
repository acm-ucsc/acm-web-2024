"use client";
import { useState } from "react";
import Image from "next/image";

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

const MobileCarousel = () => {
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
    <div className="max-w-7xl mx-auto mt-8 space-y-4 p-8">
      {events.map((event, index) => (
        <div key={index} className={`card shadow-xl rounded-xl mb-6 relative overflow-hidden transform transition-all duration-300 hover:scale-102 ${
          event.isOngoing 
            ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 border-2 border-purple-300 shadow-purple-500/50 hover:shadow-purple-500/70 hover:shadow-2xl animate-pulse-slow' 
            : 'bg-primary hover:shadow-lg'
        }`}>
          {event.isOngoing && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold animate-bounce shadow-lg z-10 border border-white/20">
              ⚡ LIVE NOW
            </div>
          )}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              className="rounded-t-xl object-cover transition-transform duration-500 hover:scale-110"
              src={event.imageUrl}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 640px) 100vw"
            />
            {event.isOngoing && (
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            )}
          </div>
          <div className="p-6 flex flex-col h-full justify-center items-center">
            <h5 className={`text-2xl font-bold text-center mb-4 leading-tight transition-colors duration-300 ${
              event.isOngoing ? 'text-white drop-shadow-lg' : 'text-white'
            }`}>
              {event.title}
            </h5>
            <p className={`text-base mt-2 flex-1 text-center leading-relaxed ${
              event.isOngoing ? 'text-purple-100' : 'text-gray-400'
            }`}>
              {event.description}
            </p>
            <p className={`text-sm mt-4 text-center font-semibold ${
              event.isOngoing ? 'text-purple-100 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm' : 'text-white'
            }`}>
              {event.date}
            </p>
            {event.websiteUrl && (
              <div className="mt-6">
                <button
                  onClick={() => {
                    console.log('Mobile button clicked! Opening:', event.websiteUrl);
                    window.open(event.websiteUrl, '_blank');
                  }}
                  className={`px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    event.isOngoing 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 border-2 border-white/20' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  🚀 Join Event
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MobileCarousel;
