import Herosection from "@/components/herosection/page";
import About from "@/components/about/page";
import WhatACMDo from "@/components/whatACMDo/page";
import Timeline from "@/components/timeline/page";
import ExecutiveCommittee from "@/components/executiveCommittee/page";
import Contact from "@/components/contact/page";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <WhatACMDo />
      <Timeline />
      <ExecutiveCommittee />
      <Contact />
    </>
  );
}
