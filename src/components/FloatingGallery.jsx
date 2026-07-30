"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

const HALF_W = 96;
const HALF_H = 64;

const LAYOUTS = {
  1: [{ x: 0, y: -20, rotate: 2, scale: 1.0, z: 20 }],
  2: [
    { x: -60, y: -30, rotate: -6, scale: 0.95, z: 20 },
    { x: 60, y: 10, rotate: 5, scale: 0.95, z: 20 },
  ],
  3: [
    { x: -100, y: -30, rotate: -10, scale: 0.9, z: 10 },
    { x: 0, y: -90, rotate: 0, scale: 1.0, z: 30 },
    { x: 100, y: -30, rotate: 10, scale: 0.9, z: 20 },
  ],
  4: [
    { x: -130, y: -90, rotate: -12, scale: 0.9, z: 10 },
    { x: 50, y: -120, rotate: 10, scale: 1.0, z: 30 },
    { x: 150, y: -20, rotate: -6, scale: 0.85, z: 20 },
    { x: -30, y: 40, rotate: 15, scale: 0.95, z: 40 },
  ],
};

export default function FloatingGallery({ active, springX, springY }) {
  const [fallbackMap, setFallbackMap] = useState({});

  const count = Math.min(active?.images?.length || 1, 4);
  const offsets = LAYOUTS[count] || LAYOUTS[1];

  const imgX0 = useMotionValue(0);
  const imgY0 = useMotionValue(0);
  const imgX1 = useMotionValue(0);
  const imgY1 = useMotionValue(0);
  const imgX2 = useMotionValue(0);
  const imgY2 = useMotionValue(0);
  const imgX3 = useMotionValue(0);
  const imgY3 = useMotionValue(0);

  useEffect(() => {
    const cur = LAYOUTS[count] || LAYOUTS[1];
    const xv = [imgX0, imgX1, imgX2, imgX3];
    const yv = [imgY0, imgY1, imgY2, imgY3];

    const update = () => {
      const vx = springX.get();
      const vy = springY.get();
      for (let i = 0; i < cur.length; i++) {
        xv[i].set(vx + cur[i].x - HALF_W);
        yv[i].set(vy + cur[i].y - HALF_H);
      }
    };

    update();

    const unsubX = springX.on("change", update);
    const unsubY = springY.on("change", update);
    return () => {
      unsubX();
      unsubY();
    };
  }, [springX, springY, count, imgX0, imgX1, imgX2, imgX3, imgY0, imgY1, imgY2, imgY3]);

  const pos = [imgX0, imgY0, imgX1, imgY1, imgX2, imgY2, imgX3, imgY3];

  const handleError = (slug, index) => {
    const key = `${slug}-${index}`;
    setFallbackMap((prev) => {
      if (prev[key]) return prev;
      return { ...prev, [key]: true };
    });
  };

  const getSrc = (slug, index, fallbackUrl) => {
    if (fallbackMap[`${slug}-${index}`]) return fallbackUrl;
    return `/images/works/${slug}/${index + 1}.png`;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      <AnimatePresence>
        {active &&
          Array.from({ length: count }).map((_, i) => {
            const o = offsets[i];
            return (
              <motion.img
                key={`${active.slug}-${i}`}
                src={getSrc(active.slug, i, active.images[i])}
                alt=""
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: o.scale, opacity: 0.95 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: i * 0.04,
                }}
                onError={() => handleError(active.slug, i)}
                style={{
                  position: "absolute",
                  left: pos[i * 2],
                  top: pos[i * 2 + 1],
                  rotate: o.rotate,
                  zIndex: o.z,
                }}
                className="w-48 h-32 object-cover rounded-sm border border-zinc-700/50 shadow-2xl brightness-90 contrast-110"
                draggable={false}
              />
            );
          })}
      </AnimatePresence>
    </div>
  );
}
