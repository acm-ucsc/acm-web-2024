"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    title: "NOI 2024",
    description:
      "NOI 2024 is the National Olympiad in Informatics, a prestigious programming competition for high school students in Sri Lanka.",
    date: "2024",
    imageUrl: "/assets/images/events/NOI_2024/NOI_2024.JPG",
  },
  {
    title: "SIGCHI 2024",
    description:
      "Winter School by Colombo ACM SIGCHI Chapter: Connecting South Asia to collaborate and develop research interest in HCI.",
    date: "2nd, 3rd, and 4th January",
    imageUrl: "/assets/images/events/SIGCHI_2024/sigchi_2024.jpg",
  },
  {
    title: "ReidXtream 2024",
    description:
      "ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch of UCSC in collaboration with the ACM Student Chapter of UCSC.",
    date: "7th September",
    imageUrl: "/assets/images/events/ReidXtream_2024/reid_xtreme2024.jpg",
  },
  {
    title: "Linux Kickstart: Hands-On Basics - Monthly Meetup June",
    description:
      "Linux Kickstart: Hands-On Basics - Monthly Meetup June is a hands-on workshop to learn the basics of Linux.",
    date: "29th and 30th June",
    imageUrl:
      "/assets/images/events/Monthly_Meetup_01-Linux_Kickstart/linux_kick_start.jpg",
  },
  {
    title: "Advanced GitHub and Azure Cloud - Monthly Meetup July",
    description:
      "Advanced GitHub and Azure Cloud - Monthly Meetup July is a hands-on workshop to learn advanced GitHub and Azure Cloud.",
    date: "25th July",
    imageUrl:
      "/assets/images/events/Monthly_Meetup_02-GitHub_and_Azure_Cloud/monthly_meetup_github_azure.jpg",
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
            <p className="text-sm text-gray-500 mt-4 text-center">
              {event.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCarousel;
