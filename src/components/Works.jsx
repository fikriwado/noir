"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import FloatingGallery from "./FloatingGallery";

const projects = [
  {
    slug: "budiman",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=400&auto=format&fit=crop",
    ],
    alt: "Project 1",
    label: "Logo Design",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </>
    ),
  },
  {
    slug: "budiman",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop",
    ],
    alt: "Project 2",
    label: "Web Application",
    icon: <polygon points="12 2 2 22 22 22" />,
  },
  {
    slug: "budiman",
    img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
    ],
    alt: "Project 3",
    label: "UI/UX Design",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    slug: "budiman",
    img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=400&auto=format&fit=crop",
    ],
    alt: "Project 4",
    label: "Open Source",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </>
    ),
  },
];

export default function Works() {
  const [activeProject, setActiveProject] = useState(null);
  const isTouchDevice = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(pointer: coarse)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(pointer: coarse)").matches,
    () => false,
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <Section id="works" title="Selected Works">
      <div
        onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div
              onMouseEnter={() => !isTouchDevice && setActiveProject(p)}
              onMouseLeave={() => !isTouchDevice && setActiveProject(null)}
              className="group relative w-full aspect-video lg:aspect-auto lg:h-[320px] overflow-hidden bg-zinc-900 cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.alt}
                className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125 opacity-10 mix-blend-luminosity group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black mix-blend-multiply pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:scale-95 transition-transform duration-500"
                >
                  {p.icon}
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-transparent group-hover:border-[#DFFF00] transition-all duration-300 ease-out z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bg-[#DFFF00] text-black font-bold text-sm uppercase tracking-widest px-5 py-2.5 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                {p.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {!isTouchDevice && (
        <FloatingGallery
          active={activeProject}
          springX={springX}
          springY={springY}
        />
      )}
    </Section>
  );
}
