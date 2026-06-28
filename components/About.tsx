"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { fadeUp, slideLeft, staggerContainer, staggerItem } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <motion.div
        className="relative mx-auto w-full max-w-4xl"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Large overlapping background title */}
        <motion.div variants={slideLeft} className="relative z-0">
          <SectionTitle className="!text-[clamp(5rem,12vw,10rem)] leading-[0.8]">
            About
          </SectionTitle>
        </motion.div>

        {/* Indented text content positioned below the title */}
        <motion.div
          variants={staggerContainer(0.15, 0)}
          className="relative z-10 mt-4 flex flex-col gap-10 sm:ml-16 md:mt-8 md:ml-32 lg:ml-40"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-ticketing text-sm leading-[1.8] tracking-wide text-white md:text-base lg:text-lg"
          >
            I&apos;m basirat, a frontend developer passionate about building
            responsive, user-friendly web experiences.
            I enjoy turning ideas into clean, functional interfaces that are both visually appealing and
            easy to use.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex items-center gap-8"
          >
            <OutlineButton
              href="/assets/resume.pdf"
              external
              download="Basirat_Basanya_Resume.pdf"
              className="font-ticketing !lowercase tracking-[0.1em]"
            >
              my resume
            </OutlineButton>
            {/* Decorative horizontal line */}
            <div className="h-[1px] w-24 bg-white/40 sm:w-32 md:w-48" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}