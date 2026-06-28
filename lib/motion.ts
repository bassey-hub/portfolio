import type { Variants, Transition } from "framer-motion";

/* ─── Shared easing curve ─────────────────────────────────────── */
const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ─── Shared spring presets ────────────────────────────────────── */
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 15,
};

/* ─── Fade Up (default section reveal) ────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEase },
  },
};

/* ─── Fade In (simple opacity) ────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ─── Slide from left ─────────────────────────────────────────── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: smoothEase },
  },
};

/* ─── Slide from right ────────────────────────────────────────── */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: smoothEase },
  },
};

/* ─── Scale up from smaller ───────────────────────────────────── */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/* ─── Stagger container ───────────────────────────────────────── */
export const staggerContainer = (
  staggerDelay = 0.12,
  delayChildren = 0.1,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/* ─── Stagger item (used inside staggerContainer) ─────────────── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: smoothEase },
  },
};

/* ─── Character-by-character text reveal ──────────────────────── */
export const charContainer = (staggerDelay = 0.03): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const charVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

/* ─── Line draw (for decorative dividers) ─────────────────────── */
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

/* ─── Floating / idle animation ───────────────────────────────── */
export const floatingAnimation = {
  y: [-8, 8, -8],
  rotate: [-1, 1, -1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

/* ─── Magnetic hover helper ───────────────────────────────────── */
export const magneticHover = {
  scale: 1.05,
  transition: springSnappy,
};

export const magneticTap = {
  scale: 0.95,
  transition: springSnappy,
};
