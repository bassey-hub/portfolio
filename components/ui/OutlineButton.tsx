"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type OutlineButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  download?: boolean | string;
  className?: string;
};

export function OutlineButton({
  href,
  children,
  external = false,
  download,
  className = "",
}: OutlineButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-[#888] px-8 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:border-accent hover:bg-accent/5 ${className}`}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" download={download}>
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}