"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CTA: React.FC = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/918667841110?text=Hello%20IAS%20Real%20Estate%20%26%20Builders%2C%20I%20am%20interested%20in%20your%20property%20services.";

  return (
    <section id="cta" className="relative w-full py-28 md:py-40 bg-[#080C15] text-foreground overflow-hidden border-t border-[#00F0FF]/15 flex items-center justify-center">
      {/* Dark Ambient Glowing Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.4em] text-[#00F0FF] uppercase mb-6 font-bold"
        >
          {t("cta.tag")}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground uppercase tracking-tight leading-[0.95] mb-8"
        >
          {t("cta.titleMain")}<br />
          <span className="gradient-text-cyan italic font-normal">{t("cta.titleCyan")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-[#F8FAFC]/80 font-light max-w-2xl leading-relaxed mb-12"
        >
          {t("cta.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="tel:9600070025"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#00F0FF] text-[#050811] text-xs sm:text-sm font-sans tracking-[0.2em] font-extrabold uppercase hover:bg-white transition-colors shadow-cyan-glow rounded-md"
          >
            <Phone className="w-4 h-4" />
            <span>{t("cta.callBtn")}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs sm:text-sm font-sans tracking-[0.2em] font-bold uppercase hover:bg-[#00F0FF]/20 transition-colors rounded-md"
          >
            <span>{t("cta.whatsappBtn")}</span>
            <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
