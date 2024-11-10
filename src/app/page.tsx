import Herosection from "@/components/herosection/page";
import About from "@/components/about/page";
import WhatACMDo from "@/components/whatACMDo/page";
import Timeline from "@/components/timeline/page";
import ExecutiveCommittee from "@/components/executiveCommittee/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <div className="z-20">
      <Navbar />
      <Herosection />
      <About />
      <WhatACMDo />
      <Timeline />
      <ExecutiveCommittee />
      <Contact />
      <Footer />
    </div>
  );
}
