"use client";

import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";

export default function FixedUI() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowBackToTop(rect.top <= window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SocialLinks showBackToTop={showBackToTop} />
  );
}
