"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll to prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const duration = 2000; // Total 2 seconds load time
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          // Unlock scroll when preloader exits
          document.body.style.overflow = "";
        }, 400); // Small pause at 100% before sliding away
      }
      setProgress(Math.round(currentProgress));
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed left-0 top-0 z-[99999] flex h-[100dvh] w-screen flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Mascot with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-12 flex w-full items-center justify-center"
          >
            {/* Animated Glow Backdrop strictly centered */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2D2D]/30 blur-[40px]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/assets/mini-me.png"
              alt="Mascot Loading"
              width={300}
              height={300}
              priority
              unoptimized
              className="relative z-10 h-auto w-32 object-contain md:w-40"
            />
          </motion.div>

          {/* Percentage Counter */}
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              className="font-stretch text-4xl text-white md:text-5xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {progress}%
            </motion.div>
            
            {/* Loading Bar */}
            <motion.div 
              className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
