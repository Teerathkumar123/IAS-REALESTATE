"use client";

import React from "react";
import { Phone, ArrowUp, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addressQuery = encodeURIComponent(
    "No 80, Madha Complex, Opposite, Noorullapet, Cn Anadurai Road, Govindapuram, Vaniyambadi-635751, Tamil Nadu"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const instagramUrl = "https://www.instagram.com/ias_realestate?igsi=ajMzajd3dzloNzR0";
  const facebookUrl = "https://www.facebook.com/p/IAS-Real-estate-Builders-61582430488508/";
  const youtubeUrl = "http://www.youtube.com/@IASEALESTATE";

  return (
    <footer className="relative w-full bg-[#050811] text-foreground border-t border-[#00F0FF]/15 pt-20 pb-12 overflow-hidden px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="w-full">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#00F0FF]/15">
          {/* Brand Identity */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/images/logo.png"
                  alt="IAS Real Estate & Builders Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md border border-[#00F0FF]/40 shadow-md bg-[#080C15]"
                />
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wider uppercase">
                    {language === "ta" ? "ஐஏஎஸ் ரியல் எஸ்டேட் & பில்டர்ஸ்" : "IAS REAL ESTATE & BUILDERS"}
                  </h2>
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#00F0FF] font-bold uppercase">
                    {t("footer.subtag")}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#F8FAFC]/80 font-light max-w-md leading-relaxed mb-6">
                {t("footer.desc")}
              </p>
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-cyan-glow" />
                <span>{t("footer.tagline")}</span>
              </div>

              {/* Head Office Address */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-xs text-[#F8FAFC]/80 hover:text-[#00F0FF] transition-colors max-w-md"
              >
                <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>
                  {t("contact.officeAddr")}
                </span>
              </a>
            </div>
          </div>

          {/* Contact & Socials Information */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#00F0FF] uppercase block mb-4 font-bold">
                {t("footer.directTag")}
              </span>
              <div className="space-y-4 text-xs font-sans text-[#F8FAFC]/80">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 flex-wrap">
                  <div>
                    <span className="text-[9px] font-mono text-[#00F0FF]/50 block uppercase">{t("footer.p1")}</span>
                    <a href="tel:9600070025" className="hover:text-[#00F0FF] flex items-center space-x-2 font-semibold text-sm">
                      <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>+91 9600070025</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-[#00F0FF]/50 block uppercase">{t("footer.p2")}</span>
                    <a href="tel:8667841110" className="hover:text-[#00F0FF] flex items-center space-x-2 font-semibold text-sm">
                      <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>+91 8667841110</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-[#00F0FF]/50 block uppercase">{t("footer.landline")}</span>
                    <a href="tel:04174357180" className="hover:text-[#00F0FF] flex items-center space-x-2 font-semibold text-sm">
                      <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>04174-357180</span>
                    </a>
                  </div>
                </div>

                {/* Social Handles: Facebook & Instagram */}
                <div className="pt-2">
                  <span className="text-[9px] font-mono text-[#00F0FF]/50 block uppercase mb-2">OFFICIAL SOCIAL CHANNELS</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1877F2]/15 border border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white text-[#1877F2] transition-colors font-mono text-xs rounded-md"
                    >
                      <Facebook className="w-3.5 h-3.5 fill-current" />
                      <span>FACEBOOK</span>
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#00F0FF]/10 border border-[#00F0FF]/25 hover:bg-[#00F0FF] hover:text-[#050811] text-[#00F0FF] transition-colors font-mono text-xs rounded-md"
                    >
                      <Instagram className="w-3.5 h-3.5 text-current" />
                      <span>INSTAGRAM</span>
                    </a>

                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF0000]/15 border border-[#FF0000]/40 hover:bg-[#FF0000] hover:text-white text-[#FF0000] transition-colors font-mono text-xs rounded-md"
                    >
                      <Youtube className="w-3.5 h-3.5 fill-current" />
                      <span>YOUTUBE</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[9px] font-mono text-[#00F0FF]/50 block uppercase">{t("footer.servicesLabel")}</span>
                  <p className="text-[11px] text-[#00F0FF]/60 leading-snug">
                    {t("footer.servicesText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#00F0FF]/60 gap-4">
          <span>{t("footer.rights")}</span>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#00F0FF] hover:text-white transition-colors font-bold"
          >
            <span>{t("footer.backToTop")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
