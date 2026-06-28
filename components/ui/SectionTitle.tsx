"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  children: string;
  className?: string;
};

const titleVariants = {
  hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={`font-script text-[clamp(4rem,12vw,9rem)] leading-[0.9] text-[#c8c8c8] ${className}`}
    >
      {children}
    </motion.h2>
  );
}