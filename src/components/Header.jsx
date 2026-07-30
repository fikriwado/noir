"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const navLinks = [
  { label: "HOME", target: null },
  { label: "ABOUT", target: "about" },
  { label: "WORKS", target: "works" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "CONTACT", target: "contact" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const linkVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
};

export default function Header() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    if (window.__lenis) {
      isMenuOpen ? window.__lenis.stop() : window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isMenuOpen]);

  const paddingTop = useTransform(scrollY, [0, 60], [30, 0]);
  const borderRadius = useTransform(scrollY, [0, 60], ["8px", "0px"]);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (window.__lenis) window.__lenis.start();
    requestAnimationFrame(() => {
      if (target && window.__lenis) {
        window.__lenis.scrollTo(`#${target}`, { offset: 0 });
      } else if (window.__lenis) {
        window.__lenis.scrollTo(0);
      }
    });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ paddingTop }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center bg-background"
      >
        <Container as={motion.nav} style={{ borderRadius }} className="flex items-center justify-between h-[70px]">
          {/* Burger — left */}
          <div className="flex-1 flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative z-50 flex flex-col justify-center items-start gap-[8px] w-7 h-7 p-0.5 cursor-pointer transition-opacity hover:opacity-70"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-white" strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-center items-start gap-[6px] w-6 h-6"
                  >
                    <span className="block w-full h-[2px] bg-white rounded-[10px]" />
                    <span className="block w-3/4 h-[2px] bg-white rounded-[10px]" />
                    <span className="block w-full h-[2px] bg-white rounded-[10px]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Logo — center */}
          <Link href="/" className="text-2xl font-bold tracking-widest text-[#DFFF00] select-none">
            .Fixwad
          </Link>

          {/* Contact — right */}
          <div className="flex-1 flex items-center justify-end">
            <Button
              variant="secondary"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </Button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex items-center justify-center"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-[70] text-white hover:text-neon transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={2} />
            </button>
            <motion.nav
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={linkVariants}
                  href={link.target ? `#${link.target}` : "#"}
                  onClick={(e) => handleNavClick(e, link.target)}
                   className="font-[family-name:var(--font-body)] text-4xl sm:text-6xl font-bold text-white hover:text-neon uppercase tracking-wide transition-colors duration-300 select-none cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
