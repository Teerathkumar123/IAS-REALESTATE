"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HubtownPreloaderProps {
  onComplete: () => void;
}

export const HubtownPreloader: React.FC<HubtownPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="hubtown-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col justify-between items-center bg-[#020A19] p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Top Brand Header */}
          <div className="w-full flex items-center justify-between font-mono text-[11px] tracking-[0.25em] text-[#D5E0FF] uppercase font-bold">
            <span>IAS REAL ESTATE & BUILDERS</span>
            <span>{progress}% LOADED</span>
          </div>

          {/* Center Graphic & Grid Dot Matrix (Hubtown Exact Graphic) */}
          <div className="relative flex flex-col items-center justify-center my-auto">
            {/* Center Flashing Square */}
            <div className="relative mb-8">
              <span className="block w-3 h-3 bg-[#D5E0FF] animate-ping opacity-75" />
              <span className="absolute inset-0 w-3 h-3 bg-[#D5E0FF] shadow-hub-glow" />
            </div>

            {/* SVG Monogram Animation */}
            <svg
              className="w-72 sm:w-96 h-16 text-[#D5E0FF]"
              viewBox="0 0 352 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* I */}
              <rect x="20" y="8" width="12" height="24" fill="currentColor" opacity="0.9" />
              {/* A */}
              <path d="M70 32L85 8L100 32H90L85 22L80 32H70Z" fill="currentColor" opacity="0.9" />
              {/* S */}
              <path
                d="M140 12C140 10 145 8 152 8C160 8 165 11 165 15C165 20 155 21 148 23C142 25 140 28 140 31C140 36 146 39 154 39C162 39 168 36 168 31H158C158 33 154 34 150 34C145 34 144 33 144 31C144 29 148 28 155 26C162 24 168 21 168 15C168 10 160 8 150 8C142 8 136 11 136 16H140Z"
                fill="currentColor"
                opacity="0.9"
              />
              {/* Star Grid Dots */}
              <circle cx="210" cy="20" r="3" fill="#C5A059" />
              <circle cx="230" cy="20" r="3" fill="#D5E0FF" />
              <circle cx="250" cy="20" r="3" fill="#C5A059" />
            </svg>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80 h-[2px] bg-[#D5E0FF]/15 mt-8 relative overflow-hidden">
              <div
                className="h-full bg-[#D5E0FF] transition-all duration-150 ease-out shadow-hub-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Footer Loading Status */}
          <div className="w-full flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-[#D5E0FF]/70 uppercase">
            <span>REAL ESTATE • LAND • DEVELOPMENT</span>
            <span className="text-[#D5E0FF] font-bold">
              {progress < 100 ? "LOADING CONTENT..." : "READY TO EXPLORE"}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
