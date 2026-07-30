"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Container from "@/components/Container";

const projectMeta = {
  budiman: {
    title: "Budiman",
    role: "Lead Web Developer / Full-Stack",
    tech: "Laravel, React, Tailwind CSS, PostgreSQL",
    year: "2026",
    gallery: ["1.png", "2.png", "3.png", "4.png"],
    overview:
      "The client needed a scalable logistics and ticketing dashboard to manage fleet operations, real-time tracking, and customer support tickets. The existing system was fragmented across spreadsheets and legacy tools, causing bottlenecks in dispatching, inventory visibility, and reporting. The goal was to unify everything into a single, real-time platform.",
  },
};

export default function WorkDetail({ params }) {
  const { slug } = use(params);
  const meta = projectMeta[slug] || {
    title: slug,
    role: "Web Developer",
    tech: "Various Technologies",
    year: "2026",
    gallery: [],
    overview: "",
  };

  return (
    <main className="flex-1 overflow-hidden pt-24 pb-24">
      <Container as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="font-[family-name:var(--font-body)] text-[36px] text-[#f0f0f0] font-bold text-center mt-12 mb-16">
          {meta.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20">
              <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <span className="text-[16px] text-[#f0f0f04d] font-[family-name:var(--font-body)] mb-1.5 block">
                  Role
                </span>
                <p className="text-[16px] text-[#f0f0f0] font-[family-name:var(--font-body)]">
                  {meta.role}
                </p>
              </div>
              <div>
                <span className="text-[16px] text-[#f0f0f04d] font-[family-name:var(--font-body)] mb-1.5 block">
                  Tech Stack
                </span>
                <p className="text-[16px] text-[#f0f0f0] font-[family-name:var(--font-body)]">
                  {meta.tech}
                </p>
              </div>
              <div>
                <span className="text-[16px] text-[#f0f0f04d] font-[family-name:var(--font-body)] mb-1.5 block">
                  Year
                </span>
                <p className="text-[16px] text-[#f0f0f0] font-[family-name:var(--font-body)]">
                  {meta.year}
                </p>
              </div>
            </div>
          </div>
          {meta.overview && (
            <div className="md:col-span-7">
              <p className="text-[18px] text-[#f0f0f0] font-[family-name:var(--font-body)] leading-relaxed">
                {meta.overview}
              </p>
            </div>
          )}
        </div>

        <div className="border border-zinc-800 mb-6 overflow-hidden rounded-none">
          <img
            src={`/images/works/${slug}/cover.png`}
            alt={`${slug} cover`}
            className="w-full h-auto max-h-[60vh] object-cover block"
          />
        </div>

        {meta.gallery.length > 0 && (
          <section className="pb-24">
            <div className="w-full mx-auto">
              <Marquee autoFill pauseOnHover speed={50}>
                {meta.gallery.map((file, i) => (
                  <div key={i} className="mx-3 shrink-0">
                    <img
                      src={`/images/works/${slug}/${file}`}
                      alt={`${slug} gallery ${i + 1}`}
                      className="h-[150px] md:h-[200px] w-auto object-cover border border-white/10 rounded-none"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </section>
        )}

        <Link
          href="/works"
          className="group w-full flex items-center justify-between border-t border-b border-zinc-800 py-8 mt-24 hover:border-neon transition-colors duration-300"
        >
          <span className="font-[family-name:var(--font-body)] text-[24px] text-[#f0f0f0] font-bold group-hover:text-neon transition-colors duration-300">
            Next Project
          </span>
          <span className="text-2xl md:text-3xl text-zinc-600 group-hover:text-neon transition-colors duration-300">
            ↗
          </span>
        </Link>
      </Container>
    </main>
  );
}
