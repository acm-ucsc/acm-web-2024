"use client";

const activities = [
  {
    title: "EVENTS",
    description:
      "ACM UCSC hosts a variety of events throughout the year to help students enhance their skills and expand their knowledge in computing.",
  },
  {
    title: "WORKSHOPS",
    description:
      "We conduct workshops to provide students with the opportunity to learn new technologies and tools. Our workshops cover a wide range of topics.",
  },
  {
    title: "COMPETITIONS",
    description:
      "We organize competitions to challenge students and help them apply their knowledge in a competitive environment.",
  },
  {
    title: "MONTHLY MEETUPS",
    description:
      "We conduct monthly meetups to provide students with the opportunity to connect with professionals and learn about the latest technological trends.",
  },
  {
    title: "SEMINARS",
    description:
      "We organize seminars on various topics related to computing and technology, bringing in experts to share their knowledge and insights.",
  },
  
];

export default function WhatACMDo() {
  return (
    <>
      <div className="min-h-[750px] w-full flex flex-col justify-center items-center bg-black py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center w-full max-w-3xl">
          WHAT ACM UCSC DO
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full sm:w-1/4 bg-gray-800  p-6 m-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 min-h-[200px] cursor-pointer"
            >
              <h1 className="text-2xl font-bold text-secondary mb-4 text-center">
                {activity.title}
              </h1>
              <p className="text-base text-white text-center">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
