import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../public/assets/images/events/1.jpeg";
import image2 from "../../../public/assets/images/events/2.jpeg";
import image3 from "../../../public/assets/images/events/3.jpeg";
import image4 from "../../../public/assets/images/events/4.jpeg";
import image5 from "../../../public/assets/images/events/5.jpeg";
import image6 from "../../../public/assets/images/events/6.jpeg";
import image7 from "../../../public/assets/images/events/7.jpeg";
import image8 from "../../../public/assets/images/events/8.jpeg";
import image9 from "../../../public/assets/images/events/9.jpeg";
import image10 from "../../../public/assets/images/events/10.jpeg";
import image11 from "../../../public/assets/images/events/11.jpeg";
import image12 from "../../../public/assets/images/events/12.jpeg";
import image13 from "../../../public/assets/images/events/13.jpeg";
import image14 from "../../../public/assets/images/events/14.jpeg";
import image15 from "../../../public/assets/images/events/15.jpeg";
import image16 from "../../../public/assets/images/events/16.jpeg";
import image17 from "../../../public/assets/images/events/17.jpeg";
import image18 from "../../../public/assets/images/events/18.jpeg";
import image19 from "../../../public/assets/images/events/19.jpeg";
import image20 from "../../../public/assets/images/events/20.jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto"
        />
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          ❮
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          ❯
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
}
