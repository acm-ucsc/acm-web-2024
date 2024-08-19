"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import img1 from "../../../public/assets/images/events/6.jpeg";
import img2 from "../../../public/assets/images/events/7.jpeg";
import img3 from "../../../public/assets/images/events/12.jpeg";
import img4 from "../../../public/assets/images/events/13.jpeg";
import img5 from "../../../public/assets/images/events/14.jpeg";
import img6 from "../../../public/assets/images/events/16.jpeg";
import img7 from "../../../public/assets/images/events/18.jpeg";
import img8 from "../../../public/assets/images/events/19.jpeg";
import img9 from "../../../public/assets/images/events/20.jpeg";

// Define your image data array directly in this file
const imageData = [
  {
    src: img1,
    name: "SigCHI Winter School 2024",
    description:
      "The ACM SIGCHI Winter School 2024 was a unique opportunity for students to learn HCI from the best in the field.",
  },
  {
    src: img2,
    name: "IOI 2023",
    description: "1 bronze medal",
  },
  {
    src: img3,
    name: "Winter School OC",
    description: "",
  },
  {
    src: img4,
    name: "Ballet Code",
    description: "",
  },
  {
    src: img5,
    name: "Annual Genaral Meeting 2023",
    description: "",
  },
  {
    src: img6,
    name: "Postman API Day",
    description:
      "The Postman API Day was a huge success with over 150 participants.",
  },
  {
    src: img7,
    name: "Postman API Day",
    description: "",
  },
  {
    src: img8,
    name: "Twillio Session",
    description: "",
  },
  {
    src: img9,
    name: "NOI 2023 ",
    description: "NOI 2023 OC",
  },
];

export default function AboutImages() {
  const controls = useAnimation();

  // Function to handle scroll animation
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll handler on component mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="p-6 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-500 ${
              index % 5 === 0
                ? "col-span-2 row-span-2"
                : index % 4 === 0
                ? "col-span-1 row-span-2"
                : "col-span-1 row-span-1"
            } animate-on-scroll`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={item.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <div className="text-white text-center transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
