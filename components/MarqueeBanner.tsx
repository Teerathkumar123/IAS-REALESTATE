"use client";

import React from "react";
import { motion } from "framer-motion";

export const MarqueeBanner: React.FC = () => {
  const textItems = [
    "REAL ESTATE",
    "LAND PROMOTION",
    "LAND DEVELOPMENT",
    "RESIDENTIAL PLOTS",
    "COMMERCIAL SPACES",
    "PROPERTY INVESTMENT",
    "STRUCTURAL BUILDERS",
    "TIRUPATHUR DISTRICT",
  ];

  return (
    <div className="w-full bg-[#010611] py-5 border-y border-[#D5E0FF]/15 overflow-hidden select-none pointer-events-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        className="flex items-center whitespace-nowrap space-x-12 w-max"
      >
        {[...textItems, ...textItems, ...textItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span className="font-serif text-2xl sm:text-4xl font-light tracking-widest text-[#D5E0FF]/90 uppercase">
              {item}
            </span>
            <span className="w-2.5 h-2.5 bg-[#C5A059] rotate-45 shrink-0 shadow-gold-glow" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
