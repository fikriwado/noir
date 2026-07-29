"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section id="contact" className="!py-16 md:!py-20 lg:!py-24">
      <Reveal>
        <div className="bg-neon text-black rounded-none p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center [&_*::selection]:!bg-black [&_*::selection]:!text-neon">
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-black text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
            LET&apos;S BUILD SOMETHING.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-[family-name:var(--font-body)] text-black/80 font-medium leading-relaxed">
              Have a project in mind, a collaboration idea, or just want to say
              hello? I&apos;m always open to new conversations and opportunities.
            </p>
            <div className="flex flex-col">
              <CopyRow email="mfikri.khoirurrizal@gmail.com" />
              <CopyRow email="fixwad@soara.id" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function CopyRow({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      onClick={handleCopy}
      className="flex justify-between items-center py-4 border-b-2 border-black w-full cursor-pointer group hover:bg-black/5 transition-colors text-left"
    >
      <span className="font-[family-name:var(--font-body)] text-black text-lg font-medium truncate">
        {email}
      </span>
      <span className="font-[family-name:var(--font-body)] text-xs text-black uppercase tracking-widest font-black shrink-0 ml-4">
        {copied ? "Copied!" : "COPY"}
      </span>
    </button>
  );
}