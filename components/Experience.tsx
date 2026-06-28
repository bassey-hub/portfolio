"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experiences } from "@/lib/data";
import {
  slideLeft,
  slideRight,
  staggerContainer,
  springSnappy,
} from "@/lib/motion";

function BracketMarker() {
  return (
    <span className="mr-3 inline-block text-white" aria-hidden>
      ⌞
    </span>
  );
}

const experienceItem = {
  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[90vh] flex-col justify-center px-6 py-24 md:px-12 lg:px-16 lg:py-32"
    >
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-4 md:gap-8 lg:flex-row lg:items-start lg:justify-between"
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.div variants={slideLeft} className="lg:w-1/2">
          <SectionTitle>Experience</SectionTitle>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0)}
          className="flex flex-col gap-12 lg:max-w-md lg:pt-4"
        >
          {experiences.map((item) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              variants={experienceItem}
              className="group text-right"
              whileHover={{
                x: -8,
                transition: springSnappy,
              }}
            >
              <p className="text-sm font-medium uppercase tracking-wide text-accent transition-colors md:text-base">
                <BracketMarker />
                {item.company}, {item.role}
              </p>
              <motion.p
                className="mt-2 text-sm uppercase tracking-wide text-white/80"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, color: "#ffffff" }}
              >
                {item.period}. {item.location}
              </motion.p>

              {/* Animated underline on hover */}
              <motion.div
                className="mt-3 ml-auto h-px bg-gradient-to-l from-accent/60 to-transparent"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}