"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  springSnappy,
  springBouncy,
  floatingAnimation,
} from "@/lib/motion";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const headingLine = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const mascotVariants = {
  hidden: { y: -50, opacity: 0, rotate: -8, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const socialItem = {
  hidden: { opacity: 0, scale: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 pt-24 pb-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* ── Content ── */}
        <motion.div
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
            variants={staggerContainer(0.08, 0)}
          >
            <motion.span variants={headingLine} className="block">
              Have An Idea, Opportunity,
            </motion.span>
            <motion.span variants={headingLine} className="block">
              Or Just Want To Say Hi?
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base text-white/80 md:text-lg"
          >
            my inbox is always open!
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            variants={staggerContainer(0.1, 0)}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                variants={socialItem}
                whileHover={{
                  scale: 1.15,
                  borderColor: "#FF2D2D",
                  rotate: [0, -5, 5, 0],
                  transition: { ...springSnappy, rotate: { duration: 0.4 } },
                }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:text-accent"
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}

            <motion.a
              href="mailto:basiratbasanya16@gmail.com"
              variants={socialItem}
              whileHover={{
                scale: 1.06,
                borderColor: "#FF2D2D",
                transition: springSnappy,
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-colors hover:border-accent"
            >
              email me!
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Mascot with floating animation ── */}
        <motion.div
          className="relative mx-auto lg:mx-0"
          variants={mascotVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div animate={floatingAnimation}>
            <Image
              src="/assets/mini-me.png"
              alt="Cartoon mascot illustration"
              width={500}
              height={263}
              priority
              unoptimized
              className="mx-auto h-auto w-[min(60vw,260px)] lg:w-[320px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <footer className="mx-auto mt-16 max-w-6xl border-t border-white/20 pt-8 pb-8">
        <p className="text-center text-xs text-white/50 md:text-sm">
          © 2026 — Basanya Basirat | Mascot design by Me 
        </p>
      </footer>
    </section>
  );
}