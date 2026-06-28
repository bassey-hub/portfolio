"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/lib/data";
import {
  slideLeft,
  staggerContainer,
  springSnappy,
  springBouncy,
} from "@/lib/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100, filter: "blur(12px)", scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-32 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SectionTitle>Projects</SectionTitle>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: springBouncy,
              }}
              className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/30 p-8 md:min-h-[380px] md:p-10"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,45,45,0.06), transparent 40%)",
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-lg font-bold uppercase leading-tight tracking-wide text-accent md:text-xl"
                  whileHover={{ x: 4 }}
                  transition={springSnappy}
                >
                  {project.title}
                </motion.h3>
                <p className="mt-6 text-sm leading-relaxed text-white/80 md:text-base">
                  {project.description}
                </p>
              </div>

              <Link href={project.href} className="relative z-10 mt-10 inline-flex w-fit self-center">
                <motion.span
                  whileHover={{
                    scale: 1.06,
                    borderColor: "#FF2D2D",
                    color: "#FF2D2D",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={springSnappy}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-colors"
                >
                  view project
                </motion.span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}