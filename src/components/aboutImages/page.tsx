import Image from "next/image";

// Define your image data array directly in this file
const imageData = [
  {
    src: "/assets/images/events/6.jpeg",
    name: "SigCHI Winter School 2024",
    description:
      "The ACM SIGCHI Winter School 2024 was a unique opportunity for students to learn HCI from the best in the field.",
  },
  {
    src: "/assets/images/events/7.jpeg",
    name: "IOI 2023",
    description:
      "1 bronze medal",
  },
  {
    src: "/assets/images/events/12.jpeg",
    name: "Winter School OC",
    description: "",
  },
  {
    src: "/assets/images/events/13.jpeg",
    name: "Ballet Code",
    description: "",
  },
  {
    src: "/assets/images/events/14.jpeg",
    name: "Annual Genaral Meeting 2023",
    description: "",
  },
  {
    src: "/assets/images/events/16.jpeg",
    name: "Postman API Day",
    description:
      "The Postman API Day was a huge success with over 150 participants.",
  },
  {
    src: "/assets/images/events/18.jpeg",
    name: "Postman API Day",
    description: "",
  },
  {
    src: "/assets/images/events/19.jpeg",
    name: "Twillio Session",
    description: "",
  },
  {
    src: "/assets/images/events/20.jpeg",
    name: "NOI 2023 ",
    description: "NOI 2023 OC",
  },
];

export default function AboutImages() {
  return (
    <div className="p-6 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageData.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-500 ${
              index % 5 === 0
                ? "col-span-2 row-span-2"
                : index % 4 === 0
                ? "col-span-1 row-span-2"
                : "col-span-1 row-span-1"
            }`}
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
          </div>
        ))}
      </div>
    </div>
  );
}
