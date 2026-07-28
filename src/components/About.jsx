"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const p1Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const p2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Section id="about" title="About Me" className="pt-40 sm:pt-52">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Reveal>
            <motion.p style={{ y: p1Y }} className="text-lg sm:text-xl text-[#f0f0f0] font-light leading-relaxed">
              I am an independent web developer dedicated to helping business owners thrive in the digital space. You know how to run your business. I know how to translate that into a seamless online experience. I build systems that simply work, from engaging websites to custom web applications that streamline your operations.
            </motion.p>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.p style={{ y: p2Y }} className="text-lg sm:text-xl text-[#f0f0f0] font-light leading-relaxed">
              My goal is to take away the technical headaches. You won&apos;t need to worry about code, servers, or design jargon. I handle the entire technical process from start to finish, allowing you to focus entirely on growing your business and serving your customers.
            </motion.p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-10 pt-2 lg:pt-0">
          <div>
            <Reveal delay={0.05}>
              <h3 className="text-xs text-zinc-500 tracking-widest font-bold mb-5 uppercase">Capabilities</h3>
            </Reveal>
            <ul className="flex flex-col">
              {[
                "Business Websites",
                "Custom Web Applications",
                "Client Portals & Dashboards",
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <li className="flex items-center gap-6 border-b border-zinc-800/60 py-3 text-zinc-300 font-light">
                    <span className="text-zinc-400 text-xs font-[family-name:var(--font-body)] tabular-nums tracking-widest uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal delay={0.3}>
              <h3 className="text-xs text-zinc-500 tracking-widest font-bold mb-4 uppercase">The Approach</h3>
              <p className="text-sm text-[#f0f0f0] leading-relaxed">
                I deliver fast, mobile-ready, and hassle-free digital experiences. Every project is optimized from day one and requires zero technical maintenance on your end, so you can focus purely on business growth.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}