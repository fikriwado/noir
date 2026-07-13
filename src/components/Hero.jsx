"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fikriY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const wadoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const exploreY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const globeParallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 mb-52">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={fontsReady ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div style={{ y: eyebrowY }} className="relative z-20">
            <motion.p
              variants={itemVariants}
              className="text-[14px] uppercase tracking-[0.3em] text-gray-400 mb-12 sm:mb-10"
            >
              HELLO THERE <motion.span animate={{ rotate: [0, 14, -8, 14, -8, 0] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }} className="inline-block">👋</motion.span>
            </motion.p>
          </motion.div>

          {/* Massive Typography */}
          <div className="relative flex flex-col items-center gap-0 z-10">
            {/* FIKRI */}
            <motion.div style={{ y: fikriY }} variants={itemVariants} className="relative z-10">
              <h1 className="font-[family-name:var(--font-heading)] text-[25vw] sm:text-[15vw] leading-[0.8] sm:leading-[0.85] tracking-tighter font-black text-neon">
                FIKRI
              </h1>
            </motion.div>

            {/* WADO */}
            <motion.div style={{ y: wadoY }} variants={itemVariants} className="relative z-10">
              <h1 className="font-[family-name:var(--font-heading)] text-[25vw] sm:text-[15vw] leading-[0.8] sm:leading-[0.85] tracking-tighter font-black text-neon">
                WADO
              </h1>
            </motion.div>
          </div>

          {/* Sub-headline */}
          <motion.div style={{ y: subY }} className="relative z-20">
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-center text-[22px] leading-relaxed font-[family-name:var(--font-body)] px-6 sm:px-0"
            >
              I&apos;m a Web Developer &amp; Designer. I enjoy writing clean code, building practical apps, and constantly learning.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{ y: exploreY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0"
      >
        <span className="font-[family-name:var(--font-heading)] text-[35vw] sm:text-[25vw] font-black uppercase whitespace-nowrap leading-none text-white/[0.02]">
          EXPLORE
        </span>
      </motion.div>

      {/* Floating Globe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        style={{ y: globeParallaxY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1350px] pointer-events-none z-0 select-none hidden min-[810px]:block"
      >
        <motion.img
          src="/images/globe.png"
          alt=""
          aria-hidden="true"
          initial={{ y: 200 }}
          animate={{ y: [200, 160, 200] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full opacity-20 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-6 pb-8 sm:pb-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">
          Scroll
        </span>
        <div className="relative w-[3px] h-[33px] bg-gradient-to-b from-gray-500 to-transparent">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[3px] h-3 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
