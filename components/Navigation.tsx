"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { springSnappy } from "@/lib/motion";

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-6 pointer-events-none md:px-12 md:py-8 lg:px-16"
        initial="hidden"
        animate="visible"
      >
        <Link href="/#home" className="pointer-events-auto relative z-50 shrink-0" onClick={() => setIsOpen(false)}>
          <motion.div
            variants={logoVariants}
            whileHover={{
              scale: 1.08,
              rotate: 3,
              transition: springSnappy,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/assets/logo-ish.png"
              alt="Basirat Basanya logo"
              width={478}
              height={458}
              priority
              sizes="(max-width: 768px) 64px, 88px"
              className="h-auto w-[64px] md:w-[88px]"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          className="pointer-events-auto hidden md:flex flex-col items-end gap-3.5"
          variants={navContainer}
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={navItem}>
              <Link href={link.href}>
                <motion.span
                  className="font-ticketing text-[12px] md:text-[13px] lowercase tracking-wide text-white/80"
                  whileHover={{
                    x: -8,
                    color: "#FF2D2D",
                    textShadow: "0 0 12px rgba(255,45,45,0.4)",
                  }}
                  transition={springSnappy}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Hamburger Button */}
        <div className="pointer-events-auto relative z-50 mt-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-px w-5 bg-white origin-center transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-5 bg-white transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-px w-5 bg-white origin-center transition-all duration-300"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pointer-events-auto fixed inset-0 z-40 flex flex-col items-end justify-start bg-[#131313] px-6 pt-32 md:hidden"
          >
            <motion.nav
              variants={navContainer}
              className="flex flex-col items-end gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={navItem}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    <motion.span
                      className="font-ticketing text-2xl lowercase tracking-widest text-white"
                      whileHover={{ color: "#FF2D2D" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}