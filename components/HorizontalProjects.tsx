"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Building, ShieldCheck, Cpu } from "lucide-react";
import { BeveledCard } from "./BeveledCard";
import { useLanguage } from "@/context/LanguageContext";

export const HorizontalProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const projects = [
    {
      id: "01",
      title: t("project1.title"),
      location: t("project1.location"),
      category: t("project1.category"),
      specs: t("project1.specs"),
      icon: Building,
      description: t("project1.desc"),
    },
    {
      id: "02",
      title: t("project2.title"),
      location: t("project2.location"),
      category: t("project2.category"),
      specs: t("project2.specs"),
      icon: Cpu,
      description: t("project2.desc"),
    },
    {
      id: "03",
      title: t("project3.title"),
      location: t("project3.location"),
      category: t("project3.category"),
      specs: t("project3.specs"),
      icon: MapPin,
      description: t("project3.desc"),
    },
    {
      id: "04",
      title: t("project4.title"),
      location: t("project4.location"),
      category: t("project4.category"),
      specs: t("project4.specs"),
      icon: ShieldCheck,
      description: t("project4.desc"),
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    const sections = gsap.utils.toArray<HTMLElement>(".horizontal-project-card");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth * (sections.length - 0.5),
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  const whatsappUrl = "https://wa.me/918667841110?text=Hello%20IAS%20Real%20Estate%20%26%20Builders%2C%20I%20am%20interested%20in%20your%20projects.";

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full h-screen bg-[#080C15] overflow-hidden text-foreground flex flex-col justify-center border-t border-[#00F0FF]/15"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-12 pb-6 flex items-center justify-between z-10">
        <div>
          <span className="text-xs font-mono tracking-[0.35em] text-[#00F0FF] uppercase block font-bold mb-1">
            {t("projects.tag")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
            {t("projects.titleMain")} <span className="gradient-text-cyan italic font-normal">{t("projects.titleCyan")}</span>
          </h2>
        </div>

        <span className="hidden sm:block text-xs font-mono text-[#00F0FF]/60 uppercase tracking-widest">
          {t("projects.dragToExplore")}
        </span>
      </div>

      {/* Horizontal Slider Track */}
      <div ref={sliderRef} className="flex h-[75vh] w-[400vw] items-center">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className="horizontal-project-card w-screen h-full px-4 sm:px-12 md:px-20 flex items-center shrink-0"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left Details */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase font-bold">
                        {project.id} / 04 • {project.category}
                      </span>
                      <span className="px-3 py-1 bg-[#00F0FF]/15 border border-[#00F0FF]/35 text-[10px] font-mono text-[#00F0FF] uppercase font-bold rounded-sm">
                        FEATURED
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white uppercase tracking-tight leading-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono tracking-wider text-[#00F0FF] uppercase font-bold mb-6 flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0" />
                      <span>{project.location}</span>
                    </p>

                    <p className="text-sm sm:text-base text-[#F8FAFC]/80 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="p-4 bg-[#00F0FF]/5 border border-[#00F0FF]/20 text-xs font-mono text-[#00F0FF] mb-8 rounded-md">
                      <span className="block text-[9px] text-[#00F0FF]/50 uppercase font-bold mb-1">KEY SPECIFICATIONS</span>
                      <span>{project.specs}</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#00F0FF] text-[#050811] text-xs sm:text-sm font-sans tracking-[0.2em] font-extrabold uppercase rounded-md shadow-cyan-glow hover:bg-white transition-all w-fit"
                  >
                    <span>{t("projects.inquireBtn")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Right FundingPips Electric Cyan 3D Glass Spec Card */}
                <div className="lg:col-span-6 relative">
                  <BeveledCard variant="glass">
                    <div className="relative group p-8 sm:p-10 flex flex-col justify-between h-80 sm:h-[420px] bg-gradient-to-br from-[#00F0FF]/15 via-[#0D1424] to-[#080C15] border border-[#00F0FF]/30 rounded-xl shadow-cyan-glow">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase font-bold">
                          {project.id} / ARCHITECTURAL SPEC
                        </span>
                        <Icon className="w-6 h-6 text-[#00F0FF]" />
                      </div>

                      <div>
                        <h4 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#F8FAFC]/70 font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#00F0FF]/20">
                        <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase font-bold">
                          TIRUPATHUR DISTRICT NETWORK
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-[#00F0FF]" />
                      </div>
                    </div>
                  </BeveledCard>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
