"use client";

import React from "react";
import { motion } from "framer-motion";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const WhyChooseIAS: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("why.p1Title"),
      tagline: t("why.p1Tag"),
      detail: t("why.p1Detail"),
    },
    {
      title: t("why.p2Title"),
      tagline: t("why.p2Tag"),
      detail: t("why.p2Detail"),
    },
    {
      title: t("why.p3Title"),
      tagline: t("why.p3Tag"),
      detail: t("why.p3Detail"),
    },
    {
      title: t("why.p4Title"),
      tagline: t("why.p4Tag"),
      detail: t("why.p4Detail"),
    },
  ];

  return (
    <section id="why-choose-us" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground overflow-hidden border-t border-[#00F0FF]/15 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
            {t("why.tag")}
          </span>
          <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-foreground uppercase tracking-tight mb-16 md:mb-24"
        >
          {t("why.title")}
        </motion.h2>

        {/* Statement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pillars.map((pillar, index) => (
            <BeveledCard key={pillar.title} variant="glass">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline space-x-4 mb-4">
                    <span className="font-mono text-xs text-[#00F0FF] tracking-widest font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-light text-foreground tracking-tight uppercase">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="font-serif text-lg sm:text-xl text-[#00F0FF] font-light italic mb-4">
                    "{pillar.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#F8FAFC]/80 font-light leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </motion.div>
            </BeveledCard>
          ))}
        </div>
      </div>
    </section>
  );
};
