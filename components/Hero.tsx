"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const { t, language } = useLanguage();

  const handleScrollDown = () => {
    const element = document.getElementById("stats") || document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#080C15] pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Best Suited Premium Luxury Architectural Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/hero.jpg"
            alt="IAS Real Estate & Builders Luxury Architectural Property Background"
            className="w-full h-full object-cover filter contrast-110 brightness-90 mono-image"
          />
        </motion.div>

        {/* High-Contrast Dark Obsidian Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-[#080C15]/75 to-[#080C15]/90" />
        
        {/* Soft Electric Cyan Glow Spotlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00F0FF]/05 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/05 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Top Spacer */}
      <div className="h-6 sm:h-10 z-10" />

      {/* Main Centered Hero Content */}
      <div className="relative z-10 w-full my-auto flex flex-col items-center justify-center max-w-5xl mx-auto">
        {/* Top Category Tag */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.2em] sm:tracking-[0.3em] text-[#00F0FF] uppercase mb-4 sm:mb-6 font-extrabold cursor-pointer hover:text-white transition-colors"
        >
          {t("hero.topTag")}
        </motion.span>

        {/* Huge Centered Interactive Headline */}
        <motion.div
          onMouseEnter={() => setIsTitleHovered(true)}
          onMouseLeave={() => setIsTitleHovered(false)}
          className="overflow-hidden mb-6 sm:mb-8 cursor-pointer group w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`font-sans text-2xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase transition-colors duration-500 ${
              language === "ta" ? "leading-[1.2] sm:leading-[1.1]" : "leading-[1.05] sm:leading-[0.95]"
            } ${
              isTitleHovered ? "text-[#00F0FF] drop-shadow-[0_0_18px_rgba(0,240,255,0.35)]" : "text-white"
            }`}
          >
            {t("hero.headlineMain")}<br />
            <span
              className={`block mt-1 sm:mt-2 font-bold italic transition-all duration-500 ${
                isTitleHovered
                  ? "gradient-text-violet scale-[1.01]"
                  : "gradient-text-cyan"
              }`}
            >
              {t("hero.headlineSub")}
            </span>
          </motion.h1>
        </motion.div>

        {/* Center Pill Capsule Badge with Metrics & Counters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={handleScrollDown}
          className="px-4 py-3 sm:px-8 sm:py-3.5 bg-[#0D1424]/90 border border-[#00F0FF]/30 backdrop-blur-md rounded-2xl sm:rounded-full shadow-cyan-glow mb-6 sm:mb-8 max-w-5xl hover:border-[#00F0FF] hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full sm:w-auto"
        >
          <div className="text-[11px] sm:text-xs md:text-base font-mono tracking-wider uppercase text-white font-medium flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 leading-relaxed">
            <span className="inline-flex items-center space-x-1">
              <strong className="text-[#00F0FF] font-extrabold text-xs sm:text-base">
                <AnimatedCounter to={15} suffix="+" duration={2} />
              </strong>
              <span>{t("hero.yearsExp")}</span>
            </span>
            <span className="text-[#00F0FF]/50 hidden xs:inline">•</span>
            <span className="inline-flex items-center space-x-1">
              <strong className="text-[#00F0FF] font-extrabold text-xs sm:text-base">
                <AnimatedCounter to={50} suffix="+" duration={2} />
              </strong>
              <span>{t("hero.projectsDone")}</span>
            </span>
            <span className="text-[#00F0FF]/50 hidden xs:inline">•</span>
            <span className="inline-flex items-center space-x-1">
              <strong className="text-[#00F0FF] font-extrabold text-xs sm:text-base">
                <AnimatedCounter to={2000} suffix="+" duration={2.2} />
              </strong>
              <span>{t("hero.propertiesSold")}</span>
            </span>
            <span className="text-[#00F0FF]/50 hidden xs:inline">•</span>
            <span className="inline-flex items-center space-x-1">
              <strong className="text-[#00F0FF] font-extrabold text-xs sm:text-base">
                <AnimatedCounter to={10000} suffix="+" duration={2.5} />
              </strong>
              <span>{t("hero.plotsSold")}</span>
            </span>
          </div>
        </motion.div>

        {/* Centered Sub-Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs sm:text-base md:text-xl text-[#F8FAFC]/85 font-light max-w-3xl leading-relaxed mb-6 sm:mb-8 hover:text-white transition-colors px-2"
        >
          {t("hero.subDescription")}
        </motion.p>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={handleScrollDown}
        className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#00F0FF] transition-colors mt-2"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-[#F8FAFC]/50">
          {t("hero.scrollToExplore")}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 sm:w-5 h-7 sm:h-8 border border-[#00F0FF]/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-[#00F0FF] rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
