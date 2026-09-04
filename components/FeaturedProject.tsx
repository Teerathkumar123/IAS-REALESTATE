"use client";

import React from "react";
import { motion } from "framer-motion";

export const FeaturedProject: React.FC = () => {
  return (
    <>
      {/* SECTION 01 — FEATURED PROPERTY */}
      <section id="featured" className="relative w-full py-28 md:py-36 bg-[#080A0C] text-[#F5F5F2] border-t border-[#2A2F34]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Editorial Heading */}
            <div className="lg:col-span-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-8 h-[1px] bg-[#D6B36A]" />
                <span className="text-[11px] font-sans tracking-widest text-[#D6B36A] font-bold uppercase">
                  FEATURED RESIDENCE
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F5F2] uppercase tracking-tight leading-[1.05] mb-6"
              >
                ARCHITECTURE THAT MAKES AN <span className="italic font-light text-[#D6B36A]">IMPRESSION.</span>
              </motion.h2>

              <p className="text-xs sm:text-sm font-sans text-[#A7ADB4] leading-relaxed font-normal max-w-lg mb-8">
                A masterpiece of contemporary residential design engineered with precision, volumetric space, double-height glazing, and timeless natural stone accents.
              </p>
            </div>

            {/* Right Property Info Specs Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 pt-4 border-t border-[#2A2F34]">
              <div className="py-4 border-b border-[#2A2F34]">
                <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] block uppercase mb-1 font-bold">
                  BEDROOMS
                </span>
                <span className="font-serif text-3xl md:text-4xl text-[#F5F5F2] font-normal">
                  4 BEDROOMS
                </span>
              </div>

              <div className="py-4 border-b border-[#2A2F34]">
                <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] block uppercase mb-1 font-bold">
                  BATHROOMS
                </span>
                <span className="font-serif text-3xl md:text-4xl text-[#F5F5F2] font-normal">
                  5 BATHROOMS
                </span>
              </div>

              <div className="py-4 border-b border-[#2A2F34]">
                <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] block uppercase mb-1 font-bold">
                  TOTAL AREA
                </span>
                <span className="font-serif text-3xl md:text-4xl text-[#F5F5F2] font-normal">
                  4,200 SQ.FT.
                </span>
              </div>

              <div className="py-4 border-b border-[#2A2F34]">
                <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] block uppercase mb-1 font-bold">
                  AMENITIES
                </span>
                <span className="font-serif text-3xl md:text-4xl text-[#F5F5F2] font-normal">
                  PRIVATE GARDEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROPERTY SHOWCASE (Full-Width Parallax Image) */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-[#080A0C]">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/hero_sequence/media_1788269718674.jpg"
            alt="Designed For Modern Living - Luxury Villa Interior"
            className="w-full h-full object-cover mono-image opacity-70"
          />
        </motion.div>

        {/* Minimal Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-[#080A0C]/30 to-[#080A0C]/60" />

        {/* Overlay Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] uppercase block mb-3 font-bold">
            LUXURY INTERIOR & EXTERIOR HARMONY
          </span>
          <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F5F2] uppercase tracking-wider">
            DESIGNED FOR MODERN LIVING
          </h3>
        </div>
      </section>
    </>
  );
};
