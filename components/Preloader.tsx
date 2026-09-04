"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#080C15] p-8 md:p-16 text-[#F8FAFC] overflow-hidden"
        >
          {/* Top Header */}
          <div className="w-full flex items-center justify-between text-[11px] tracking-widest text-[#00F0FF] uppercase font-sans font-bold">
            <span>IAS REAL ESTATE & BUILDERS</span>
            <span>ARCHITECTURAL PORTFOLIO</span>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center text-center my-auto max-w-xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-16 md:w-20 md:h-20 mb-6 rounded-md overflow-hidden border border-[#00F0FF]/40 p-1 bg-[#0D1424] shadow-cyan-glow"
            >
              <img
                src="/images/logo.png"
                alt="IAS Real Estate & Builders Logo"
                className="w-full h-full object-contain rounded-md"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] font-mono tracking-widest text-[#00F0FF] mb-3 uppercase font-bold"
            >
              LUXURY ARCHITECTURAL EXPERIENCE
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-3xl md:text-5xl font-normal tracking-tight uppercase leading-tight"
            >
              BUILDING VALUE.<br />
              <span className="italic text-[#00F0FF] font-light">CREATING LEGACIES.</span>
            </motion.h1>

            {/* Expanding Electric Cyan Line */}
            <div className="relative w-48 md:w-72 h-[1px] bg-[#00F0FF]/20 my-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute inset-0 bg-[#00F0FF]"
              />
            </div>
          </div>

          {/* Bottom Status */}
          <div className="w-full flex items-center justify-between text-[10px] tracking-widest text-[#F8FAFC]/60 uppercase font-sans font-semibold">
            <span>REAL ESTATE • LAND • DEVELOPMENT</span>
            <span className="animate-pulse text-[#00F0FF]">INITIALIZING SCENE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
