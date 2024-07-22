import Image from "next/image";
import image1 from "../../../public/assets/images/events/1.jpeg";
import image6 from "../../../public/assets/images/events/6.jpeg";
import image7 from "../../../public/assets/images/events/7.jpeg";
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
  image6,
  image7,  
  image12,
  image13,
  image14,
  image16,
  image18,
  image19,
  image20,
];

export default function AboutImages() {
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover hoverLopacity-75"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
