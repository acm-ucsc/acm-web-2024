import Image from "next/image";
import UCSCLogo from "../../../public/assets/images/ucsc-logo.png";
import ACMLogo from "../../../public/assets/images/acm-logo-white.png";

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-between p-24 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/backgroundmp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <main className="flex flex-col items-center justify-center h-auto p-24 relative z-10">
          <div className="flex flex-row items-center justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={ACMLogo} alt="ACM Logo" height={500} width={500} />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={UCSCLogo} alt="UCSC Logo" height={175} width={175} />
            </div>
          </div>
          <h1 className="text-8xl text-white text-center mt-10 fire-animation">
            <b>Welcome to ACM UCSC</b>
          </h1>
          <h1 className="text-2xl text-secondary text-center mt-4 fire-animation">
            <b>Association for Computing Machinery Student Chapter</b>
          </h1>
          <h1 className="text-2xl text-secondary text-white text-center fire-animation">
            <b>University of Colombo School of Computing</b>
          </h1>
        </main>
      </div>
    </>
  );
}
