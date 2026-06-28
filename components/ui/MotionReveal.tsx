"use client";

import {
  motion,
  type Variants,
  type Transition,
  type TargetAndTransition,
  type VariantLabels,
} from "framer-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "section" | "article" | "li" | "p" | "h2" | "h3";
  variants?: Variants;
  /** If true, animates on scroll into view instead of on mount */
  whileInView?: boolean;
  /** IntersectionObserver "amount" (0-1) — how much must be visible */
  viewAmount?: number;
  /** Custom viewport margin */
  viewMargin?: string;
  /** Override transition */
  transition?: Transition;
  /** Framer Motion initial state override */
  initial?: boolean | TargetAndTransition | VariantLabels;
  /** Framer Motion animate state override */
  animate?: boolean | TargetAndTransition | VariantLabels;
  /** Only animate once? (default true) */
  once?: boolean;
  style?: React.CSSProperties;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

// Map tag names to motion components
const motionComponents = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const;

export function MotionReveal({
  children,
  className,
  delay = 0,
  as = "div",
  variants = defaultVariants,
  whileInView: scrollTriggered = false,
  viewAmount = 0.2,
  viewMargin,
  transition,
  initial,
  animate,
  once = true,
  style,
}: MotionRevealProps) {
  const Component = motionComponents[as];

  const mergedTransition: Transition = {
    ...transition,
    delay,
  };

  // Scroll-triggered mode
  if (scrollTriggered) {
    return (
      <Component
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewAmount, margin: viewMargin }}
        transition={mergedTransition}
        className={className}
        style={style}
      >
        {children}
      </Component>
    );
  }

  // Immediate / mount mode
  return (
    <Component
      initial={initial ?? "hidden"}
      animate={animate ?? "visible"}
      variants={variants}
      transition={mergedTransition}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}