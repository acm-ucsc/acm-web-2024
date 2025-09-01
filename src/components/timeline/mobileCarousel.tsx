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


const events = [
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
    <div className="max-w-7xl mx-auto mt-8 space-y-4 p-8">
      {events.map((event, index) => (
        <div key={index} className="card bg-primary shadow-md rounded-lg mb-4">
          <div className="relative w-full h-56">
            <Image
              className="rounded-t-lg object-cover"
              src={event.imageUrl}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 640px) 100vw"
            />
          </div>
          <div className="p-4 flex flex-col h-full justify-center items-center">
            <h5 className="text-xl text-white font-semibold text-center">
              {event.title}
            </h5>
            <p className="text-gray-500 text-1xl mt-2 flex-1 text-center">
              {event.description}
            </p>
            <p className="text-sm text-white mt-4 text-center">
              {event.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCarousel;
