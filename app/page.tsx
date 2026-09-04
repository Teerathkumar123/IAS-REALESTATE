"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { WorkingLocations } from "@/components/WorkingLocations";
import { WhyChooseIAS } from "@/components/WhyChooseIAS";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { BackgroundAnimations } from "@/components/BackgroundAnimations";
import { WaveCanvas } from "@/components/WaveCanvas";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <LanguageProvider>
      <SmoothScroll>
        <main className="min-h-screen bg-[#080C15] text-[#F8FAFC] overflow-x-hidden relative selection:bg-[#00F0FF] selection:text-[#050811]">
          {/* Background Rotating Orbital Rings, Floating 3D Cubes & Shooting Light Trails */}
          <BackgroundAnimations />

          {/* Undulating Sine-Wave Grid Background */}
          <WaveCanvas />

          {/* Interactive Constellation Node Mesh & Soft Radial Mouse Sheen */}
          <ConstellationCanvas />

          {/* Interactive 3D WebGL Web Canvas */}
          <ThreeCanvas />

          {/* Custom Reticle Cursor */}
          <CustomCursor />

          {/* Cinematic Preloader */}
          <Preloader onComplete={() => setPreloaderFinished(true)} />

          {/* Minimal Luxury Navigation with Tamil/English Switcher */}
          <Navbar />

          {/* Full-Screen Hero */}
          <Hero />

          {/* Track Record & Animated Metrics */}
          <Stats />

          {/* Who We Are & Founder Profile */}
          <About />

          {/* Portfolio & Property Showcase */}
          <HorizontalProjects />

          {/* Regional Network Map */}
          <WorkingLocations />

          {/* Why Choose IAS Pillars */}
          <WhyChooseIAS />

          {/* 5-Stage Framework */}
          <Process />

          {/* Client Testimonials */}
          <Testimonials />

          {/* Full-Screen Dark CTA */}
          <CTA />

          {/* Direct Contact & Head Office Address */}
          <Contact />

          {/* Footer */}
          <Footer />

          {/* WhatsApp & Instagram Shortcuts */}
          <WhatsAppWidget />
        </main>
      </SmoothScroll>
    </LanguageProvider>
  );
}
