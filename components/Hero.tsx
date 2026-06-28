"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  springSmooth,
} from "@/lib/motion";
import { getAssetUrl } from "@/lib/utils";

function RedMarker({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans text-sm leading-none text-accent ${className}`}>
      *
    </span>
  );
}

/* Animated line that draws itself in */
function AnimatedDashedLine({
  direction,
  delay = 0,
}: {
  direction: "horizontal" | "vertical";
  delay?: number;
}) {
  const isH = direction === "horizontal";
  return (
    <motion.div
      initial={{ [isH ? "scaleX" : "scaleY"]: 0, opacity: 0 }}
      animate={{ [isH ? "scaleX" : "scaleY"]: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      style={{ originX: 0, originY: 0 }}
      className={
        isH
          ? "h-px flex-1 border-t border-dashed border-white/70"
          : "border-l border-dashed border-white/70"
      }
    />
  );
}

/* Scattered background dots */
function BackgroundDots() {
  // Deterministic dot positions for consistency
  const dots = [
    { x: 5, y: 8, size: 2, opacity: 0.4 },
    { x: 12, y: 15, size: 1.5, opacity: 0.3 },
    { x: 25, y: 5, size: 2, opacity: 0.5 },
    { x: 35, y: 20, size: 1.5, opacity: 0.25 },
    { x: 45, y: 10, size: 2, opacity: 0.35 },
    { x: 55, y: 25, size: 1.5, opacity: 0.4 },
    { x: 65, y: 8, size: 2, opacity: 0.3 },
    { x: 75, y: 18, size: 1.5, opacity: 0.45 },
    { x: 85, y: 12, size: 2, opacity: 0.35 },
    { x: 92, y: 22, size: 1.5, opacity: 0.3 },
    { x: 8, y: 35, size: 2, opacity: 0.25 },
    { x: 18, y: 45, size: 1.5, opacity: 0.4 },
    { x: 30, y: 40, size: 2, opacity: 0.3 },
    { x: 42, y: 50, size: 1.5, opacity: 0.35 },
    { x: 58, y: 42, size: 2, opacity: 0.25 },
    { x: 70, y: 38, size: 1.5, opacity: 0.4 },
    { x: 80, y: 48, size: 2, opacity: 0.3 },
    { x: 90, y: 35, size: 1.5, opacity: 0.35 },
    { x: 15, y: 60, size: 2, opacity: 0.3 },
    { x: 28, y: 65, size: 1.5, opacity: 0.25 },
    { x: 48, y: 62, size: 2, opacity: 0.4 },
    { x: 62, y: 55, size: 1.5, opacity: 0.3 },
    { x: 78, y: 60, size: 2, opacity: 0.35 },
    { x: 88, y: 70, size: 1.5, opacity: 0.25 },
    { x: 10, y: 78, size: 2, opacity: 0.35 },
    { x: 22, y: 82, size: 1.5, opacity: 0.3 },
    { x: 38, y: 75, size: 2, opacity: 0.25 },
    { x: 52, y: 80, size: 1.5, opacity: 0.4 },
    { x: 68, y: 72, size: 2, opacity: 0.3 },
    { x: 82, y: 85, size: 1.5, opacity: 0.35 },
    { x: 95, y: 78, size: 2, opacity: 0.25 },
    { x: 3, y: 92, size: 1.5, opacity: 0.3 },
    { x: 33, y: 90, size: 2, opacity: 0.35 },
    { x: 72, y: 88, size: 1.5, opacity: 0.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: dot.opacity, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5 + i * 0.04,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-28 md:px-12 lg:px-16"
    >
      {/* ── Scattered dots ── */}
      <BackgroundDots />

      {/* ── Scrolling text behind photo (two rows, opposite directions) ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[16%] z-[1] select-none sm:top-[14%] md:top-[12%]"
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
      >
        <div className="-rotate-[10deg] skew-x-[-8deg] space-y-1 md:space-y-2">
          {/* Row 1 — scrolls left */}
          <div className="flex w-max animate-marquee-left whitespace-nowrap">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="mx-4 font-stretch text-[clamp(8rem,25vw,18rem)] uppercase leading-[0.85] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] md:mx-8 md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.18)]"
              >
                Basirat
              </span>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex w-max animate-marquee-right whitespace-nowrap">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="mx-4 font-stretch text-[clamp(8rem,25vw,18rem)] uppercase leading-[0.85] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] md:mx-8 md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.18)]"
              >
                Basanya
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Main content (above marquee) ── */}
      <div className="relative z-[2] mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* ── Portrait ── */}
        <motion.div
          className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
          initial={{ y: 80, opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        >
          <Image
            src={getAssetUrl("/assets/photo.png")}
            alt="Basirat Basanya portrait"
            width={1186}
            height={1520}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* ── Role tag (centered below portrait) ── */}
        <motion.div
          className="relative z-10 mt-8 w-fit text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.7,
          }}
        >
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <motion.span
              className="overflow-hidden whitespace-nowrap font-ticketing text-xs uppercase tracking-[0.25em] text-white/90 md:text-sm lg:text-base"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              frontend developer
            </motion.span>
            
            <div className="flex items-center gap-3 md:gap-4">
              {/* Pulsing status dot */}
              <motion.div
                className="relative h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  boxShadow: [
                    "0 0 0 0 rgba(255,45,45,0.4)",
                    "0 0 0 10px rgba(255,45,45,0)",
                    "0 0 0 0 rgba(255,45,45,0)",
                  ],
                }}
                transition={{
                  scale: { delay: 1.5, duration: 0.3 },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
                }}
              />
              <motion.span
                className="overflow-hidden whitespace-nowrap font-ticketing text-xs uppercase tracking-[0.25em] text-white/90 md:text-sm lg:text-base"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.4, delay: 1.8 }}
              >
                creative
              </motion.span>
            </div>

            {/* Blinking cursor */}
            <motion.span
              className="inline-block h-4 w-[2px] bg-accent md:h-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                opacity: { duration: 1, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>
        </motion.div>

        {/* ── Info section below portrait ── */}
        <div className="relative mt-12 w-full max-w-2xl md:mt-16">
          <div className="flex justify-center">
            {/* ── Description with corner brackets ── */}
            <motion.div
              className="relative z-10 w-full max-w-[420px]"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.1,
              }}
            >
              {/* Corner bracket frame */}
              <div className="relative px-6 py-5">
                {/* Top-left corner */}
                <motion.div
                  className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white/40"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{ delay: 2.0, duration: 0.4 }}
                  style={{ originX: 0, originY: 0 }}
                />
                {/* Top-right corner */}
                <motion.div
                  className="absolute right-0 top-0 h-5 w-5 border-r border-t border-white/40"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{ delay: 2.1, duration: 0.4 }}
                  style={{ originX: 1, originY: 0 }}
                />
                {/* Bottom-left corner */}
                <motion.div
                  className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/40"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                  style={{ originX: 0, originY: 1 }}
                />
                {/* Bottom-right corner */}
                <motion.div
                  className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-accent/60"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{ delay: 2.3, duration: 0.4 }}
                  style={{ originX: 1, originY: 1 }}
                />

                {/* Description text with staggered word reveal */}
                <motion.p
                  className="font-ticketing text-sm leading-[1.8] text-white/85 md:text-[15px]"
                  variants={staggerContainer(0.04, 1.8)}
                  initial="hidden"
                  animate="visible"
                >
                  {`passionate about building modern web applications, solving real-world problems, and creating intuitive user experiences in the prettiest way possible.`
                    .split(" ")
                    .map((word, i) => (
                      <motion.span
                        key={i}
                        className="mr-[0.3em] inline-block"
                        variants={staggerItem}
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
