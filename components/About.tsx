"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Building2, Compass, Award, Scale, CheckCircle2, Layers } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground overflow-hidden border-t border-[#00F0FF]/15 px-6 sm:px-12 md:px-20 lg:px-28">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full">
        {/* Editorial Section Label */}
        <div className="flex items-center space-x-3 mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
            {t("about.tag")}
          </span>
          <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
        </div>

        {/* 2-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground uppercase leading-[1.02] mb-8 md:mb-10"
            >
              {t("about.titleMain")}<br />
              <span className="gradient-text-cyan italic font-normal">{t("about.titleCyan")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#F8FAFC]/80 font-light leading-relaxed mb-10 md:mb-12 max-w-3xl"
            >
              {t("about.desc")}
            </motion.p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 md:pt-10 border-t border-[#00F0FF]/20">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2.5 text-[#00F0FF]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold text-white">{t("about.trust")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8FAFC]/60 font-light leading-relaxed">{t("about.trustDesc")}</p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2.5 text-[#00F0FF]">
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold text-white">{t("about.quality")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8FAFC]/60 font-light leading-relaxed">{t("about.qualityDesc")}</p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2.5 text-[#00F0FF]">
                  <Compass className="w-5 h-5" />
                  <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold text-white">{t("about.vision")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8FAFC]/60 font-light leading-relaxed">{t("about.visionDesc")}</p>
              </div>
            </div>
          </div>

          {/* Right Column: FundingPips Electric Cyan Glass Showcase Card */}
          <div className="lg:col-span-5 relative">
            <BeveledCard variant="glass">
              <div className="relative group p-8 sm:p-10 flex flex-col justify-between h-96 sm:h-[480px] bg-gradient-to-br from-[#00F0FF]/15 via-[#0D1424] to-[#080C15] border border-[#00F0FF]/30 rounded-xl shadow-cyan-glow">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase font-bold flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-[#00F0FF]" />
                      <span>{t("about.cardTag")}</span>
                    </span>
                    <span className="px-3 py-1 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[10px] font-mono text-[#00F0FF] uppercase font-bold rounded-sm">
                      EST. 2000
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                    {t("about.cardTitle")}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F8FAFC]/70 font-light leading-relaxed mb-6">
                    {t("about.cardDesc")}
                  </p>
                </div>

                <div className="p-4 bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-between rounded-md">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase block font-bold">
                      {t("about.cardFramework")}
                    </span>
                    <span className="text-xs font-serif font-medium text-white uppercase">
                      {t("about.cardPrecision")}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#00F0FF] shrink-0" />
                </div>
              </div>
            </BeveledCard>
          </div>
        </div>

        {/* DEDICATED FOUNDER PROFILE SECTION */}
        <div className="pt-16 md:pt-24 border-t border-[#00F0FF]/20">
          <div className="flex items-center space-x-3 mb-10 md:mb-16">
            <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
              {t("about.founderTag")}
            </span>
            <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
          </div>

          <BeveledCard variant="cyan">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Founder Portrait Column */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-[340px] sm:max-w-sm md:w-96 h-auto aspect-[3/4] border-2 border-[#00F0FF]/60 p-2 bg-[#080C15] mb-8 rounded-xl shadow-cyan-glow"
                >
                  <img
                    src="/images/founder.jpg"
                    alt="K. Mohammed Ibrahim B.A., LL.B. - Founder of IAS Real Estate & Builders"
                    className="w-full h-full object-cover rounded-lg filter contrast-105"
                  />
                </motion.div>

                <div className="flex items-center space-x-2.5 px-4 py-2 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-xs font-mono tracking-wider text-[#00F0FF] uppercase font-bold rounded-md">
                  <Scale className="w-4 h-4 shrink-0 text-[#00F0FF]" />
                  <span>{t("about.founderBadge")}</span>
                </div>
              </div>

              {/* Founder Bio Column */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase block mb-2 font-bold">
                  {t("about.founderProfile")}
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase mb-3">
                  {t("about.founderName")} <span className="gradient-text-cyan font-normal">{t("about.founderDegree")}</span>
                </h3>

                <p className="text-xs sm:text-base font-mono tracking-wider text-[#00F0FF] uppercase font-bold mb-8">
                  {t("about.founderSub")}
                </p>

                <div className="space-y-5 text-[#F8FAFC]/80 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-10">
                  <p>{t("about.bio1")}</p>
                  <p>{t("about.bio2")}</p>
                  <p>{t("about.bio3")}</p>
                </div>

                {/* Key Founder Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#00F0FF]/20">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    <span>{t("about.pillar1")}</span>
                  </div>

                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-white">
                    <Award className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    <span>{t("about.pillar2")}</span>
                  </div>

                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-white">
                    <Scale className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    <span>{t("about.pillar3")}</span>
                  </div>
                </div>
              </div>
            </div>
          </BeveledCard>
        </div>
      </div>
    </section>
  );
};
