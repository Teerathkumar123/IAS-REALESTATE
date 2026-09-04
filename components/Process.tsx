"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, FileSearch, CheckCircle, Hammer, Key } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("process.step1"),
      icon: Compass,
      subtitle: t("process.step1Sub"),
      description: t("process.step1Desc"),
    },
    {
      number: "02",
      title: t("process.step2"),
      icon: FileSearch,
      subtitle: t("process.step2Sub"),
      description: t("process.step2Desc"),
    },
    {
      number: "03",
      title: t("process.step3"),
      icon: CheckCircle,
      subtitle: t("process.step3Sub"),
      description: t("process.step3Desc"),
    },
    {
      number: "04",
      title: t("process.step4"),
      icon: Hammer,
      subtitle: t("process.step4Sub"),
      description: t("process.step4Desc"),
    },
    {
      number: "05",
      title: t("process.step5"),
      icon: Key,
      subtitle: t("process.step5Sub"),
      description: t("process.step5Desc"),
    },
  ];

  return (
    <section id="process" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground overflow-hidden border-t border-[#00F0FF]/15 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
                {t("process.tag")}
              </span>
              <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-foreground uppercase leading-[1.02]">
              {t("process.titleMain")}<br />
              <span className="gradient-text-cyan italic font-normal">{t("process.titleCyan")}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#00F0FF]/60 uppercase max-w-sm leading-relaxed">
            {t("process.sub")}
          </p>
        </div>

        {/* Process Step Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-md text-left transition-all duration-300 flex flex-col justify-between h-44 border ${
                  isActive
                    ? "bg-[#00F0FF] text-[#050811] border-[#00F0FF] shadow-cyan-glow scale-[1.02]"
                    : "bg-[#00F0FF]/10 text-foreground border-[#00F0FF]/20 hover:border-[#00F0FF]/50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs tracking-widest font-bold ${isActive ? "text-[#050811]" : "text-[#00F0FF]"}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#050811]" : "text-[#00F0FF]"}`} />
                </div>

                <div>
                  <h3 className={`font-serif text-lg sm:text-xl font-normal uppercase mb-1 ${isActive ? "text-[#050811] font-bold" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-[10px] font-mono tracking-wider uppercase ${isActive ? "text-[#050811]/90 font-bold" : "text-[#00F0FF]/60"}`}>
                    {step.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Display */}
        <BeveledCard variant="glass">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#00F0FF] uppercase block mb-2 font-bold">
                STAGE {steps[activeStep].number} OF 05
              </span>
              <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground uppercase mb-4">
                {steps[activeStep].title} • {steps[activeStep].subtitle}
              </h4>
              <p className="text-sm sm:text-base text-[#F8FAFC]/80 font-light leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-6 py-3 border border-[#00F0FF]/30 hover:border-[#00F0FF] text-xs font-mono tracking-widest text-[#00F0FF] uppercase transition-colors rounded-md"
              >
                PREVIOUS
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-7 py-3 bg-[#00F0FF] text-[#050811] text-xs font-mono tracking-widest font-extrabold uppercase hover:bg-white transition-colors shadow-cyan-glow rounded-md"
              >
                NEXT STAGE →
              </button>
            </div>
          </motion.div>
        </BeveledCard>
      </div>
    </section>
  );
};
