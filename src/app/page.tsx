import Herosection from "@/components/herosection/page";
import About from "@/components/about/page";
import WhatACMDo from "@/components/whatACMDo/page";
import Timeline from "@/components/timeline/page";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <WhatACMDo />
      <Timeline />
    </>
  );
}
