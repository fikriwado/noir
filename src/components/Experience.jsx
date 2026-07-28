"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";

const experienceData = [
  {
    id: 1,
    year: "2024 — PRESENT",
    role: "Lead Web Developer",
    company: "Soara Dev",
    description:
      "Lead a team building high-performance web applications and POS systems. Architect scalable solutions with Laravel, React, and modern DevOps pipelines. Manage client relationships from discovery through deployment.",
  },
  {
    id: 2,
    year: "2023 — 2024",
    role: "Full-Stack Developer",
    company: "Soara Dev",
    description:
      "Built custom web applications end-to-end — database design, API development, and responsive frontends. Worked directly with clients to translate business requirements into technical solutions delivered on time.",
  },
  {
    id: 3,
    year: "2022 — 2023",
    role: "Freelance Developer",
    company: "Independent",
    description:
      "Partnered with small businesses, agencies, and startups on websites, e-commerce platforms, and internal dashboards. Managed full project lifecycle independently — scoping, design, development, and deployment.",
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <Section id="experience" title="Experience">
      <div ref={sectionRef} className="relative">
        <motion.div
          style={{ y: bgY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0"
        >
          <span className="font-[family-name:var(--font-heading)] text-[25vw] sm:text-[18vw] font-black uppercase tracking-tighter whitespace-nowrap leading-none text-white/[0.008]"
  style={{
    maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
  }}
>
            EXPERIENCE
          </span>
        </motion.div>
        <div className="relative z-10">
          {experienceData.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.12}>
                <div className="border-b border-zinc-800/50">
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="group flex w-full items-center justify-between py-6 md:py-8 text-left cursor-pointer"
                  >
                    <div className="relative flex items-center min-w-0 flex-1">
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 size-2 bg-[#DFFF00] transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                      <h3 className={`text-[20px] font-medium transition-all duration-300 font-[family-name:var(--font-body)] ${isOpen ? 'text-[#DFFF00] translate-x-5' : 'text-white group-hover:text-[#DFFF00] group-hover:translate-x-5'}`}>
                        {item.role}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between w-56 md:w-64 shrink-0">
                      <span className="text-zinc-500 tabular-nums text-sm font-[family-name:var(--font-body)]">
                        {item.year}
                      </span>
                      <span className="text-[#DFFF00] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-body)]">
                        {item.company}
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === item.id && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-[#f0f0f0] leading-relaxed text-sm md:text-base font-[family-name:var(--font-body)]">
                          {item.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}