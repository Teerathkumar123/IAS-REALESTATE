"use client";

import React from "react";
import { motion } from "framer-motion";

export const ArchitectureSpecs: React.FC = () => {
  const specs = [
    { label: "PROPERTY", value: "Modern Luxury Villa" },
    { label: "BUILT-UP AREA", value: "4,200 sq.ft." },
    { label: "BEDROOMS", value: "4 Bedrooms" },
    { label: "BATHROOMS", value: "5 Bathrooms" },
    { label: "PARKING", value: "2 Covered Spaces" },
    { label: "LOCATION", value: "Tirupathur District, Tamil Nadu" },
    { label: "STATUS", value: "Available for Private Handover" },
  ];

  return (
    <>
      {/* SECTION 03 — ARCHITECTURE */}
      <section id="architecture" className="relative w-full py-28 md:py-36 bg-[#080A0C] text-[#F5F5F2] border-t border-[#2A2F34]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Heading */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-8 h-[1px] bg-[#D6B36A]" />
                <span className="text-[11px] font-sans tracking-widest text-[#D6B36A] font-bold uppercase">
                  DESIGN PHILOSOPHY
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#F5F5F2] uppercase tracking-tight leading-[0.95]"
              >
                FORM.<br />
                LIGHT.<br />
                <span className="italic font-light text-[#D6B36A]">SPACE.</span>
              </motion.h2>
            </div>

            {/* Right Column Long-Form Description */}
            <div className="lg:col-span-7 space-y-6 text-sm md:text-base font-sans text-[#A7ADB4] leading-relaxed font-normal">
              <p>
                Every element of this residence has been conceived through a rigorous architectural lens. The structural massing balances bold horizontal planes with soaring double-height volumes, creating an atmosphere of effortless elegance and acoustic stillness.
              </p>
              <p>
                Material selection prioritizes raw authenticity — polished Italian marble floors reflect natural daylight throughout the day, while warm walnut wall paneling and natural stone cladding ground the interior in tactile organic luxury.
              </p>
              <p>
                Floor-to-ceiling glass facades dissolve the traditional boundary between interior living spaces and surrounding landscaped gardens, allowing ambient light to sculpt the residence from dusk to dawn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — PROPERTY SPECIFICATIONS */}
      <section id="specifications" className="relative w-full py-24 md:py-32 bg-[#111417] text-[#F5F5F2] border-t border-[#2A2F34]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D6B36A] uppercase block mb-3 font-bold">
                ARCHITECTURAL DATA SHEET
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F5F5F2] uppercase tracking-tight">
                PROPERTY SPECIFICATIONS
              </h2>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#A7ADB4] uppercase font-semibold">
              REVISED SPECIFICATIONS • 2026 EDITION
            </span>
          </div>

          {/* Minimal Specification Sheet Grid */}
          <div className="divide-y divide-[#2A2F34] border-t border-b border-[#2A2F34]">
            {specs.map((item) => (
              <div
                key={item.label}
                className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-[#171B1F] transition-colors px-4 rounded-sm"
              >
                <div className="sm:col-span-4 text-xs font-mono tracking-widest text-[#D6B36A] uppercase font-bold">
                  {item.label}
                </div>
                <div className="sm:col-span-8 font-serif text-xl sm:text-2xl text-[#F5F5F2] font-normal tracking-wide">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
