"use client";
import { useState, useEffect } from "react";
import MobileCarousel from "./mobileCarousel"; // Ensure this is correctly imported
import Carousel from "./carousel"; // Your desktop/tablet carousel

const CarouselWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true); // Mobile view (under 640px)
    } else {
      setIsMobile(false); // Desktop/tablet view
    }
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile); // Listen to window resize
    return () => {
      window.removeEventListener("resize", updateIsMobile); // Cleanup listener
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileCarousel /> // Only show MobileCarousel on mobile view
      ) : (
        <Carousel /> // Show original carousel for desktop/tablet
      )}
    </div>
  );
};

export default CarouselWrapper;
