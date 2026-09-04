"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.q1"),
      client: t("testimonials.c1"),
      location: t("testimonials.l1"),
    },
    {
      quote: t("testimonials.q2"),
      client: t("testimonials.c2"),
      location: t("testimonials.l2"),
    },
    {
      quote: t("testimonials.q3"),
      client: t("testimonials.c3"),
      location: t("testimonials.l3"),
    },
  ];

  return (
    <section id="testimonials" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground border-t border-[#00F0FF]/15 overflow-hidden px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="w-full">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
            {t("testimonials.tag")}
          </span>
          <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
        </div>

        {/* Carousel Container */}
        <BeveledCard variant="glass">
          <Quote className="w-12 h-12 text-[#00F0FF]/40 mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl"
            >
              <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight uppercase mb-8">
                "{testimonials[activeTestimonial].quote}"
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#00F0FF]/20 gap-4">
                <div>
                  <span className="font-sans text-sm tracking-wider font-semibold text-white uppercase block">
                    {testimonials[activeTestimonial].client}
                  </span>
                  <span className="text-xs font-mono text-[#00F0FF] uppercase font-semibold">
                    {testimonials[activeTestimonial].location}
                  </span>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
                    }
                    className="p-3 border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] hover:text-white transition-colors rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-[#00F0FF]/60">
                    0{activeTestimonial + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
                    }
                    className="p-3 border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] hover:text-white transition-colors rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </BeveledCard>
      </div>
    </section>
  );
};
