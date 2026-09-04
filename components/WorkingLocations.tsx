"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Building, ArrowUpRight } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const WorkingLocations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(0);
  const { t } = useLanguage();

  const locations = [
    {
      id: 1,
      name: t("loc.vaniyambadi"),
      tag: t("loc.vaniyambadiTag"),
      state: "TAMIL NADU",
      desc: "Headquarters & Primary Operations Center. Specialized in commercial layout development, residential land promotion, and structural building.",
      type: "HEADQUARTERS",
      coords: { x: 50, y: 40 },
    },
    {
      id: 2,
      name: t("loc.tirupathur"),
      tag: t("loc.tirupathurTag"),
      state: "TAMIL NADU",
      desc: "District Headquarters Hub. Promoters of DTCP-approved residential layouts, prime plots, and institutional building projects.",
      type: "DISTRICT CAPITAL",
      coords: { x: 38, y: 55 },
    },
    {
      id: 3,
      name: t("loc.jolarpet"),
      tag: t("loc.jolarpetTag"),
      state: "TAMIL NADU",
      desc: "Key Rail & Transport Hub Corridor. Strategic land plot promotion near major railway lines and highway connecting nodes.",
      type: "TRANSIT HUB",
      coords: { x: 32, y: 45 },
    },
    {
      id: 4,
      name: t("loc.ambur"),
      tag: t("loc.amburTag"),
      state: "TAMIL NADU",
      desc: "Major Trade & Commercial Belt. Commercial land acquisitions, industrial plots, and prime highway frontage property developments.",
      type: "TRADE CORRIDOR",
      coords: { x: 62, y: 30 },
    },
    {
      id: 5,
      name: t("loc.vellore"),
      tag: t("loc.velloreTag"),
      state: "TAMIL NADU",
      desc: "Smart City Regional Hub. Residential township layout development, villa land promotion, and commercial investments.",
      type: "SMART CITY HUB",
      coords: { x: 75, y: 22 },
    },
    {
      id: 6,
      name: t("loc.hosur"),
      tag: t("loc.hosurTag"),
      state: "TAMIL NADU",
      desc: "Industrial & Manufacturing Hub. Strategic plot acquisitions for manufacturing plants, warehousing, and commercial ventures.",
      type: "INDUSTRIAL HUB",
      coords: { x: 18, y: 65 },
    },
    {
      id: 7,
      name: t("loc.krishnagiri"),
      tag: t("loc.krishnagiriTag"),
      state: "TAMIL NADU",
      desc: "National Highway Trade Corridor. Farm land developments, highway frontage plots, and regional real estate investments.",
      type: "HIGHWAY CORRIDOR",
      coords: { x: 25, y: 72 },
    },
    {
      id: 8,
      name: t("loc.banglore"),
      tag: t("loc.bangloreTag"),
      state: "KARNATAKA",
      desc: "Metro Tech & Investor Network. Partnering with NRI & IT corporate investors for high-appreciation land developments across borders.",
      type: "METRO CORRIDOR",
      coords: { x: 12, y: 80 },
    },
  ];

  const whatsappUrl = "https://wa.me/918667841110?text=Hello%20IAS%20Real%20Estate%20%26%20Builders%2C%20I%20am%20interested%20in%20properties%20in%20your%20working%20locations.";

  return (
    <section id="locations" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground border-t border-[#00F0FF]/15 overflow-hidden px-6 sm:px-12 md:px-20 lg:px-28">
      {/* Soft Electric Cyan Glow Spotlights */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
                {t("locations.tag")}
              </span>
              <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-foreground uppercase leading-[1.02]">
              {t("locations.titleMain")}<br />
              <span className="gradient-text-cyan italic font-normal">{t("locations.titleCyan")}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#F8FAFC]/80 font-light leading-relaxed max-w-md">
            {t("locations.subtitle")}
          </p>
        </div>

        {/* 2-Column Grid: Interactive Regional Node Network Map + Hub Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Vector Map Graph */}
          <div className="lg:col-span-6 relative">
            <BeveledCard variant="glass">
              <div className="relative w-full h-[420px] sm:h-[480px] bg-gradient-to-b from-[#0D1424] to-[#080C15] rounded-xl border border-[#00F0FF]/30 p-6 flex flex-col justify-between overflow-hidden shadow-cyan-glow">
                {/* Top Vector Grid Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-4 h-4 text-[#00F0FF] animate-spin-slow" />
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#00F0FF] uppercase font-bold">
                      TAMIL NADU & KARNATAKA NETWORK
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[9px] font-mono text-[#00F0FF] uppercase font-bold rounded-sm">
                    8 ACTIVE REGIONAL HUBS
                  </span>
                </div>

                {/* SVG Vector Connecting Network Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <line x1="50%" y1="40%" x2="38%" y2="55%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="40%" x2="32%" y2="45%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="40%" x2="62%" y2="30%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="62%" y1="30%" x2="75%" y2="22%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="38%" y1="55%" x2="25%" y2="72%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="25%" y1="72%" x2="18%" y2="65%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="18%" y1="65%" x2="12%" y2="80%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>

                {/* Interactive Map Nodes */}
                <div className="absolute inset-0">
                  {locations.map((loc, idx) => {
                    const isSelected = activeLocation === idx;
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setActiveLocation(idx)}
                        style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 ${
                          isSelected ? "scale-125 z-30" : "hover:scale-110"
                        }`}
                      >
                        <div className="relative flex items-center justify-center">
                          <span
                            className={`absolute w-8 h-8 rounded-full transition-all ${
                              isSelected ? "bg-[#00F0FF]/30 animate-ping" : "bg-[#00F0FF]/10"
                            }`}
                          />
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                              isSelected
                                ? "bg-[#00F0FF] border-white text-[#080C15] shadow-cyan-glow"
                                : "bg-[#0D1424] border-[#00F0FF]/60 text-[#00F0FF]"
                            }`}
                          >
                            <MapPin className="w-3 h-3" />
                          </div>
                        </div>
                        <span
                          className={`mt-1.5 px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase font-bold whitespace-nowrap block border transition-all ${
                            isSelected
                              ? "bg-[#00F0FF] text-[#080C15] border-[#00F0FF] shadow-cyan-glow"
                              : "bg-[#080C15]/90 text-[#F8FAFC]/80 border-[#00F0FF]/30 group-hover:text-[#00F0FF]"
                          }`}
                        >
                          {loc.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Map Status Legend */}
                <div className="flex items-center justify-between z-10 pt-4 border-t border-[#00F0FF]/20 text-[10px] font-mono text-[#00F0FF]/70">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span>CLICK ANY NODE TO INSPECT REGION</span>
                  </div>
                  <span>TAMIL NADU & KARNATAKA</span>
                </div>
              </div>
            </BeveledCard>
          </div>

          {/* Right Column: Interactive Regional Hub Cards List */}
          <div className="lg:col-span-6 space-y-3.5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {locations.map((loc, idx) => {
              const isSelected = activeLocation === idx;

              return (
                <BeveledCard key={loc.id} variant={isSelected ? "cyan" : "glass"}>
                  <div
                    onClick={() => setActiveLocation(idx)}
                    className={`p-5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#00F0FF]/15 border-l-4 border-l-[#00F0FF]"
                        : "hover:bg-[#00F0FF]/5"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg mt-0.5 transition-colors ${
                          isSelected
                            ? "bg-[#00F0FF] text-[#080C15] shadow-cyan-glow"
                            : "bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30"
                        }`}
                      >
                        <Building className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-white tracking-wider uppercase">
                            {loc.name}
                          </h3>
                          <span className="px-2 py-0.5 bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[9px] font-mono text-[#00F0FF] uppercase font-bold rounded-sm">
                            {loc.type}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase block font-bold mb-1">
                          {loc.tag} • {loc.state}
                        </span>

                        <p className="text-xs text-[#F8FAFC]/75 font-light leading-relaxed">
                          {loc.desc}
                        </p>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-[#00F0FF]/10 hover:bg-[#00F0FF] text-[#00F0FF] hover:text-[#080C15] transition-colors shrink-0 ml-3"
                      title={`Inquire about properties in ${loc.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </BeveledCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
