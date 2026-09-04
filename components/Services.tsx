"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES, Service } from "@/data/services";

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#080A0C] text-[#F5F5F2] border-t border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono tracking-[0.3em] text-[#D6B36A] uppercase font-bold">
                03 / OUR CAPABILITIES
              </span>
              <span className="h-[1px] w-12 bg-[#D6B36A]/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F2] uppercase leading-[1.05]">
              REAL ESTATE & BUILDER<br />
              <span className="text-[#D6B36A] italic">SOLUTIONS.</span>
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-[#A7ADB4] uppercase max-w-xs font-semibold">
            PROFESSIONAL SERVICES BUILT AROUND TRANSPARENCY, QUALITY & LONG-TERM VALUE.
          </p>
        </div>

        {/* 2-Column Desktop Grid / Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Service Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#2A2F34] border-t border-b border-[#2A2F34]">
            {SERVICES.map((service, index) => {
              const isSelected = activeService.number === service.number;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setActiveService(service);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveService(service)}
                  className={`group py-7 px-4 md:px-6 transition-all duration-500 cursor-pointer flex flex-col justify-between rounded-sm ${
                    isSelected ? "bg-[#171B1F] border-l-4 border-[#D6B36A] shadow-md" : "hover:bg-[#111417]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className="font-mono text-sm tracking-widest text-[#D6B36A] font-bold">
                        {service.number}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#F5F5F2] group-hover:text-[#D6B36A] transition-colors uppercase">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border border-[#2A2F34] transition-transform duration-300 ${
                      isSelected || isHovered ? "bg-[#D6B36A] text-[#080A0C] translate-x-1 -translate-y-1" : "text-[#A7ADB4] bg-[#080A0C]"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expandable description */}
                  <div className="mt-3 pl-12">
                    <p className="text-xs text-[#A7ADB4] font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Service Feature Card */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#171B1F] border border-[#2A2F34] p-8 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl"
              >
                {/* Dynamic Image Preview */}
                <div className="relative h-60 w-full mb-6 overflow-hidden rounded-sm border border-[#2A2F34]">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover mono-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#080A0C]/90 backdrop-blur-md border border-[#2A2F34] text-[9px] font-mono text-[#D6B36A] tracking-widest uppercase font-bold rounded-sm">
                    SERVICE {activeService.number}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-serif text-2xl font-medium text-[#F5F5F2] uppercase mb-2">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-[#A7ADB4] font-normal leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#D6B36A] uppercase block mb-3 font-bold">
                    KEY SCOPE & FEATURES
                  </span>
                  <div className="space-y-2.5 mb-8">
                    {activeService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#F5F5F2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B36A] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3.5 bg-[#D6B36A] text-[#080A0C] text-xs font-sans tracking-[0.2em] font-bold uppercase text-center hover:bg-[#F0D18A] transition-colors rounded-sm shadow-md"
                >
                  REQUEST SERVICE CONSULTATION →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
