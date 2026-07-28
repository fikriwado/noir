"use client";

import Marquee from "react-fast-marquee";
import Container from "./Container";
import Reveal from "./Reveal";

const logos = [
  { src: "/images/lifeat/blibli.png", alt: "blibli", h: 40 },
  { src: "/images/lifeat/elgensip.png", alt: "elgensip", h: 35 },
  { src: "/images/lifeat/syl.png", alt: "shapeyourlifeid", h: 40 },
  { src: "/images/lifeat/meatmap.png", alt: "meatmap", h: 35 },
  { src: "/images/lifeat/iam.png", alt: "iam", h: 40 },
  { src: "/images/lifeat/movexa.png", alt: "movexa", h: 35 },
  { src: "/images/lifeat/smactactic.png", alt: "smactactic", h: 40 },
];

export default function LifeAt() {
  return (
    <section id="lifeat" className="relative w-full py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="font-[family-name:var(--font-body)] text-[18px] text-[#f0f0f0] text-center mb-8">
            Teams, Orgs, &amp; Companies I&apos;ve Grown With
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="w-[628px] max-w-full mx-auto"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
            }}
          >
            <Marquee autoFill pauseOnHover speed={50}>
              {logos.map((logo, i) => (
                <div key={i} className="mx-6 shrink-0 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.h}
                    className="object-contain"
                    style={{ height: logo.h, width: "auto" }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
