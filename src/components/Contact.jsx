"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Reveal>
            <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed">
              Have a project in mind, a collaboration idea, or just want to say
              hello? I&apos;m always open to new conversations and opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Available for freelance projects &amp; collaborations.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal delay={0.15}>
            <CopyEmail email="mfikri.khoirurrizal@gmail.com" />
          </Reveal>
          <Reveal delay={0.2}>
            <CopyEmail email="fixwad@soara.id" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-800/60 py-3">
      <span className="text-zinc-300 font-mono text-sm tracking-wide truncate">
        {email}
      </span>
      <button
        onClick={handleCopy}
        className="shrink-0 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-[#DFFF00] transition-colors duration-200 cursor-pointer"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
