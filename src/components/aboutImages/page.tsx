"use client";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import img1 from "../../../public/assets/images/events/6.jpeg";
import img2 from "../../../public/assets/images/events/7.jpeg";
import img3 from "../../../public/assets/images/events/12.jpeg";
import img4 from "../../../public/assets/images/events/13.jpeg";
import img5 from "../../../public/assets/images/events/14.jpeg";
import img6 from "../../../public/assets/images/events/16.jpeg";
import img7 from "../../../public/assets/images/events/18.jpeg";
import img8 from "../../../public/assets/images/events/19.jpeg";
import img9 from "../../../public/assets/images/events/20.jpeg";

interface ImageData {
  src: StaticImageData;
  name: string;
  description: string;
}

interface ZoomInImageProps {
  item: ImageData;
  index: number;
}

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
    name: "Annual General Meeting 2023",
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
    name: "Twilio Session",
    description: "",
  },
  {
    src: img9,
    name: "NOI 2023 ",
    description: "NOI 2023 OC",
  },
];

export default function AboutImages() {
  return (
    <div className="p-6 pt-[80px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageData.map((item, index) => (
          <ZoomInImage key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

const ZoomInImage = ({ item, index }: ZoomInImageProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.9, opacity: 0 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-500 ${
        index % 5 === 0
          ? "col-span-2 row-span-2"
          : index % 4 === 0
          ? "col-span-1 row-span-2"
          : "col-span-1 row-span-1"
      }`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
  );
};
