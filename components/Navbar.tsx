"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: t("nav.about"), target: "about" },
    { name: t("nav.metrics"), target: "stats" },
    { name: t("nav.projects"), target: "projects" },
    { name: t("nav.locations"), target: "locations" },
    { name: t("nav.whyUs"), target: "why-choose-us" },
    { name: t("nav.contact"), target: "contact" },
  ];

  const whatsappUrl = "https://wa.me/918667841110?text=Hello%20IAS%20Real%20Estate%20%26%20Builders%2C%20I%20am%20interested%20in%20your%20property%20services.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2.5 sm:py-3 bg-[#080C15]/95 backdrop-blur-xl border-b border-[#00F0FF]/20 shadow-[0_4px_30px_rgba(0,240,255,0.15)]"
          : "py-4 sm:py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* BRAND LOGO & TITLE */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center space-x-2 sm:space-x-3 shrink-0 transition-transform duration-300 min-w-0"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-1 bg-[#00F0FF] opacity-30 blur-sm group-hover:opacity-70 transition-opacity" />
            <img
              src="/images/logo.png"
              alt="IAS Real Estate & Builders Logo"
              className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain rounded-md border border-[#00F0FF]/40 bg-[#080C15] group-hover:scale-105 transition-transform shadow-md"
            />
          </div>
          <div className="flex flex-col items-start leading-tight min-w-0">
            <span className="font-serif text-[11px] xs:text-xs sm:text-base md:text-lg font-bold tracking-tight sm:tracking-wider text-white group-hover:text-[#00F0FF] transition-colors uppercase truncate max-w-[170px] xs:max-w-[210px] sm:max-w-none">
              {language === "ta" ? "ஐஏஎஸ் ரியல் எஸ்டேட்" : "IAS REAL ESTATE & BUILDERS"}
            </span>
            <span className="text-[7px] sm:text-[9px] font-mono tracking-[0.15em] sm:tracking-[0.25em] text-[#00F0FF] font-bold uppercase mt-0.5 truncate max-w-[170px] sm:max-w-none">
              {language === "ta" ? "நிலம் • வளர்ச்சி • பில்டர்ஸ்" : "LAND • DEVELOPMENT • BUILDERS"}
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden xl:flex items-center space-x-5">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="text-xs font-mono tracking-[0.15em] text-[#F8FAFC]/90 hover:text-[#00F0FF] transition-colors uppercase font-bold relative group py-1 whitespace-nowrap"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* TOP RIGHT LANGUAGE TOGGLE & ACTION BUTTONS */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* TAMIL / ENGLISH TOGGLE BUTTON */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0D1424] border border-[#00F0FF]/40 hover:border-[#00F0FF] text-white rounded-full transition-all duration-300 shadow-cyan-glow group cursor-pointer"
            title="Translate website between English and Tamil"
          >
            <Globe className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00F0FF] animate-spin-slow shrink-0" />
            <div className="flex items-center space-x-1 text-[10px] sm:text-xs font-mono font-bold">
              <span className={`transition-colors ${language === "en" ? "text-[#00F0FF] font-extrabold" : "text-gray-400"}`}>
                EN
              </span>
              <span className="text-[#00F0FF]/40">|</span>
              <span className={`transition-colors ${language === "ta" ? "text-[#00F0FF] font-extrabold" : "text-gray-400"}`}>
                தமிழ்
              </span>
            </div>
          </button>

          {/* Quick Phone Call Button */}
          <a
            href="tel:9600070025"
            className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#050811] transition-all rounded-md text-xs font-mono tracking-wider font-bold shadow-cyan-glow whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{t("nav.call")}</span>
          </a>

          {/* WhatsApp Direct Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 px-3.5 py-1.5 bg-[#00F0FF] text-[#050811] hover:bg-white transition-all rounded-md text-xs font-sans tracking-wider font-extrabold shadow-cyan-glow uppercase whitespace-nowrap"
          >
            <span>{t("nav.whatsapp")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-md bg-[#0D1424] border border-[#00F0FF]/30 text-[#00F0FF] hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#080C15]/98 border-b border-[#00F0FF]/30 backdrop-blur-2xl px-4 sm:px-6 py-5"
          >
            <div className="flex flex-col space-y-3.5">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-[#00F0FF]/20">
                <span className="text-[11px] font-mono text-gray-300 font-bold uppercase">LANGUAGE / மொழி:</span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-3.5 py-1 bg-[#00F0FF]/15 border border-[#00F0FF] text-[#00F0FF] rounded-full text-xs font-mono font-bold"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "தமிழ் மொழிக்கு மாற்ற" : "SWITCH TO ENGLISH"}</span>
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="text-xs sm:text-sm font-mono tracking-[0.15em] text-white hover:text-[#00F0FF] transition-colors uppercase font-bold py-2 border-b border-[#00F0FF]/10 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
                </a>
              ))}

              <div className="pt-3 flex flex-col space-y-2.5">
                <a
                  href="tel:9600070025"
                  className="flex items-center justify-center space-x-2 py-2.5 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] rounded-md text-xs font-mono tracking-wider font-bold uppercase"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL +91 9600070025</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 bg-[#00F0FF] text-[#050811] rounded-md text-xs font-sans tracking-wider font-extrabold uppercase shadow-cyan-glow"
                >
                  <span>WHATSAPP DIRECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
