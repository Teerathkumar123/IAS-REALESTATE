"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Building2, Home, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

export const Stats: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const statItems = [
    {
      value: 15,
      suffix: "+",
      label: t("stats.expLabel"),
      icon: Award,
      detail: t("stats.expDetail"),
      accent: "from-[#00F0FF] to-[#3B82F6]",
      percentage: 100,
    },
    {
      value: 50,
      suffix: "+",
      label: t("stats.projectsLabel"),
      icon: Building2,
      detail: t("stats.projectsDetail"),
      accent: "from-[#3B82F6] to-[#6366F1]",
      percentage: 95,
    },
    {
      value: 2000,
      suffix: "+",
      label: t("stats.propsLabel"),
      icon: Home,
      detail: t("stats.propsDetail"),
      accent: "from-[#6366F1] to-[#8B5CF6]",
      percentage: 98,
    },
    {
      value: 10000,
      suffix: "+",
      label: t("stats.plotsLabel"),
      icon: MapPin,
      detail: t("stats.plotsDetail"),
      accent: "from-[#00F0FF] to-[#6366F1]",
      percentage: 100,
    },
  ];

  return (
    <section id="stats" className="relative py-24 md:py-36 bg-[#080C15] text-white border-y border-[#00F0FF]/15 overflow-hidden">
      {/* Dynamic Background Motion Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/05 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6366F1]/05 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1424] border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-cyan-glow"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{t("stats.trackRecord")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-sans ${
              language === "ta" ? "leading-tight" : "leading-none"
            }`}
          >
            {t("stats.titleMain")}{" "}
            <span className="gradient-text-cyan">{t("stats.titleCyan")}</span>
          </motion.h2>
        </div>

        {/* 4 Animated Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-pointer"
              >
                {/* 3D Glass Card Base */}
                <div
                  className={`h-full p-6 sm:p-8 rounded-2xl bg-[#0D1424]/80 backdrop-blur-xl border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                    isHovered
                      ? "border-[#00F0FF] shadow-[0_0_35px_rgba(0,240,255,0.25)] -translate-y-2"
                      : "border-[#00F0FF]/20 shadow-lg"
                  }`}
                >
                  {/* Top Glowing Edge Light Beam */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-40"
                    }`}
                  />

                  {/* Card Header: Icon & Pulse Ring */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "bg-[#00F0FF] text-[#080C15] scale-110 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                            : "bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded-full border border-[#00F0FF]/20">
                        <TrendingUp className="w-3 h-3 text-[#00F0FF]" />
                        <span>{t("stats.verified")}</span>
                      </div>
                    </div>

                    {/* Animated Large Number */}
                    <div className="mb-2">
                      <h3
                        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transition-colors duration-300 font-sans ${
                          isHovered ? "text-[#00F0FF]" : "text-white"
                        }`}
                      >
                        <AnimatedCounter to={item.value} suffix={item.suffix} duration={2.2} />
                      </h3>
                    </div>

                    {/* Metric Label */}
                    <span className="text-xs sm:text-sm font-mono tracking-[0.1em] text-[#00F0FF] uppercase block font-bold mb-4 leading-snug">
                      {item.label}
                    </span>

                    {/* Animated Progress Line */}
                    <div className="w-full h-1.5 bg-[#080C15] rounded-full overflow-hidden mb-5 border border-[#00F0FF]/20">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${item.accent} rounded-full`}
                      />
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xs sm:text-sm text-[#F8FAFC]/75 font-light leading-relaxed group-hover:text-white transition-colors">
                      {item.detail}
                    </p>
                  </div>

                  {/* Corner Glow Accent */}
                  <div
                    className={`absolute -bottom-10 -right-10 w-28 h-28 bg-[#00F0FF]/10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
