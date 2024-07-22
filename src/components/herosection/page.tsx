import Image from "next/image";
import UCSCLogo from "../../../public/assets/images/ucsc-logo.png";
import ACMLogo from "../../../public/assets/images/acm-logo-white.png";

export default function Hero() {
  return (
    <>
      <div className="flex min-h-screen h-auto flex-col items-center justify-between p-24 bg-primary">
        <main className="flex h-auto flex-col items-center justify-between p-24">
          <div className="flex flex-row items-center justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={ACMLogo} alt="ACM Logo" height={500} width={500} />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={UCSCLogo} alt="UCSC Logo" height={175} width={175} />
            </div>
          </div>
          <h1 className="text-8xl text-white text-center mt-10">
            <b>Welcome to ACM UCSC</b>
          </h1>
          <h1 className="text-2xl text-secondary text-center mt-4">
            <b>Association for Computing Machinary Student Chapter</b>
          </h1>
          <h1 className="text-2xl text-white text-white text-center">
            <b>University of Colombo School of Computing</b>
          </h1>
        </main>{" "}
      </div>
    </>
  );
}
