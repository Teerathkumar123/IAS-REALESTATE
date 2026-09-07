"use client";

import React from "react";
import { Phone, ArrowRight, ShieldCheck, Building2, MapPin } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const addressQuery = encodeURIComponent(
    "No 80, Madha Complex, Opposite, Noorullapet, Cn Anadurai Road, Govindapuram, Vaniyambadi-635751, Tirupathur District, Tamil Nadu"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 bg-[#080C15] text-foreground border-t border-[#00F0FF]/15 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="w-full">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#00F0FF] uppercase font-bold">
            {t("contact.tag")}
          </span>
          <span className="h-[1px] w-12 sm:w-16 bg-[#00F0FF]/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Vision */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground uppercase leading-[1.05] mb-6">
              {t("contact.titleMain")}<br />
              <span className="gradient-text-cyan italic font-normal">{t("contact.titleCyan")}</span>
            </h2>

            <p className="text-sm md:text-base text-[#F8FAFC]/80 font-light leading-relaxed mb-8 max-w-xl">
              {t("contact.desc")}
            </p>

            <div className="flex items-center space-x-6 text-xs text-[#00F0FF]/60 font-mono uppercase tracking-wider mb-8">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                <span>{t("contact.legalTransparency")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#00F0FF]" />
                <span>{t("contact.builderExcellence")}</span>
              </div>
            </div>

            {/* Office Address Card */}
            <BeveledCard variant="glass">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between block"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#00F0FF]/15 text-[#00F0FF] rounded-full group-hover:bg-[#00F0FF] group-hover:text-[#050811] transition-colors mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase block font-bold mb-1">
                      {t("contact.officeLabel")}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {t("contact.officeAddr")}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </a>
            </BeveledCard>
          </div>

          {/* Right Column: Direct Phone Cards */}
          <div className="lg:col-span-6 space-y-6">
            <BeveledCard variant="glass">
              <a
                href="tel:9600070025"
                className="group flex items-center justify-between block"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-3.5 sm:p-4 bg-[#00F0FF] text-[#050811] rounded-full group-hover:bg-white transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase block font-bold mb-1">
                      {t("contact.phone1Label")}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-normal text-white tracking-wider">
                      +91 9600070025
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00F0FF] group-hover:translate-x-2 transition-all shrink-0" />
              </a>
            </BeveledCard>

            <BeveledCard variant="glass">
              <a
                href="tel:8667841110"
                className="group flex items-center justify-between block"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-3.5 sm:p-4 bg-[#00F0FF] text-[#050811] rounded-full group-hover:bg-white transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase block font-bold mb-1">
                      {t("contact.phone2Label")}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-normal text-white tracking-wider">
                      +91 8667841110
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00F0FF] group-hover:translate-x-2 transition-all shrink-0" />
              </a>
            </BeveledCard>

            <BeveledCard variant="glass">
              <a
                href="tel:04174357180"
                className="group flex items-center justify-between block"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-3.5 sm:p-4 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] rounded-full group-hover:bg-[#00F0FF] group-hover:text-[#050811] transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase block font-bold mb-1">
                      {t("contact.landlineLabel")}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-normal text-white tracking-wider">
                      04174-357180
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00F0FF] group-hover:translate-x-2 transition-all shrink-0" />
              </a>
            </BeveledCard>
          </div>
        </div>
      </div>
    </section>
  );
};
