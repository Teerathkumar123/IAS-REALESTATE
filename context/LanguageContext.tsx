"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.about": { en: "ABOUT", ta: "எங்களைப் பற்றி" },
  "nav.metrics": { en: "METRICS", ta: "புள்ளிவிவரங்கள்" },
  "nav.projects": { en: "PROJECTS", ta: "திட்டங்கள்" },
  "nav.locations": { en: "LOCATIONS", ta: "இடங்கள்" },
  "nav.whyUs": { en: "WHY US", ta: "ஏன் நாங்கள்" },
  "nav.contact": { en: "CONTACT", ta: "தொடர்பு கொள்ள" },
  "nav.call": { en: "CALL NOW", ta: "அழைக்க" },
  "nav.whatsapp": { en: "WHATSAPP", ta: "வாட்ஸ்அப்" },

  // Hero Section
  "hero.topTag": { en: "REAL ESTATE LAND & DEVELOPMENT", ta: "ரியல் எஸ்டேட் நிலம் & வளர்ச்சி" },
  "hero.headlineMain": { en: "We Build The", ta: "நாங்கள் உருவாக்குகிறோம்" },
  "hero.headlineSub": { en: "Real Estate Engine.", ta: "ரியல் எஸ்டேட் வளர்ச்சியை." },
  "hero.yearsExp": { en: "YEARS EXPERIENCE", ta: "ஆண்டுகள் அனுபவம்" },
  "hero.projectsDone": { en: "PROJECTS DONE", ta: "நிறைவுற்ற திட்டங்கள்" },
  "hero.propertiesSold": { en: "PROPERTIES SOLD", ta: "விற்பனையான சொத்துக்கள்" },
  "hero.plotsSold": { en: "PLOTS SOLD", ta: "விற்பனையான மனைகள்" },
  "hero.subDescription": {
    en: "We partner with buyers, developers, and investors to market, sell, and scale real estate projects — from land promotion to final handover across Tirupathur, Vellore, Hosur, Krishnagiri & Banglore.",
    ta: "திருப்பத்தூர், வேலூர், ஓசூர், கிருஷ்ணகிரி மற்றும் பெங்களூரு முழுவதும் நில மேம்பாடு முதல் இறுதிப் பதிவு வரை ரியல் எஸ்டேட் திட்டங்களை மேம்படுத்தவும், விற்பனை செய்யவும் நாங்கள் வாடிக்கையாளர்கள், உருவாக்குநர்கள் மற்றும் முதலீட்டாளர்களுடன் இணைந்து செயல்படுகிறோம்.",
  },
  "hero.scrollToExplore": { en: "SCROLL TO EXPLORE", ta: "மேலும் அறிய கீழே நகரவும்" },

  // Stats Section
  "stats.trackRecord": { en: "TRACK RECORD OF EXCELLENCE", ta: "சிறந்த சாதனை சுவடுகள்" },
  "stats.titleMain": { en: "Proven Numbers That Speak", ta: "நம்பிக்கை மற்றும் சிறப்பை வெளிப்படுத்தும்" },
  "stats.titleCyan": { en: "Volume & Trust", ta: "உண்மையான புள்ளிவிவரங்கள்" },
  "stats.expLabel": { en: "YEARS EXPERIENCE", ta: "ஆண்டுகள் அனுபவம்" },
  "stats.expDetail": {
    en: "15+ Years of real estate leadership, land promotion & structural building across Tamil Nadu & Karnataka.",
    ta: "தமிழ்நாடு மற்றும் கர்நாடகா முழுவதும் 15 ஆண்டுகளுக்கும் மேலான ரியல் எஸ்டேட் தலைமைத்துவம், நில மேம்பாடு மற்றும் நம்பிக்கை.",
  },
  "stats.projectsLabel": { en: "PROJECTS DONE", ta: "நிறைவுற்ற திட்டங்கள்" },
  "stats.projectsDetail": {
    en: "50+ Masterplanned residential layouts, commercial projects & township developments completed.",
    ta: "50+ குடியிருப்பு மனைகள், வணிக வளாகங்கள் மற்றும் நகரமைப்பு திட்டங்கள் வெற்றிகரமாக நிறைவுற்றன.",
  },
  "stats.propsLabel": { en: "PROPERTIES SOLD", ta: "விற்பனையான சொத்துக்கள்" },
  "stats.propsDetail": {
    en: "2,000+ Residential houses, villas & commercial properties safely handed over to happy buyers.",
    ta: "2,000+ குடியிருப்பு வீடுகள், வில்லாக்கள் மற்றும் வணிக சொத்துக்கள் திருப்திகரமான வாடிக்கையாளர்களுக்கு ஒப்படைக்கப்பட்டுள்ளன.",
  },
  "stats.plotsLabel": { en: "PLOTS SOLD", ta: "விற்பனையான மனைகள்" },
  "stats.plotsDetail": {
    en: "10,000+ DTCP & Panchayet approved layout plots promoted with 100% legal title verification.",
    ta: "10,000+ அரசு மற்றும் உள்ளாட்சி அங்கீகாரம் பெற்ற DTCP குடியிருப்பு மற்றும் வணிக மனைகள் 100% சட்டப்பூர்வ உரிமையுடன் விற்பனை செய்யப்பட்டுள்ளன.",
  },
  "stats.verified": { en: "VERIFIED", ta: "உறுதிசெய்யப்பட்டது" },

  // About Section
  "about.tag": { en: "01 / WHO WE ARE & FOUNDERSHIP", ta: "01 / எங்களைப் பற்றி & தலைமைத்துவம்" },
  "about.titleMain": { en: "WE LEAD THE WAY IN", ta: "நில வளர்ச்சியில் நாங்கள்" },
  "about.titleCyan": { en: "DEVELOPMENT.", ta: "முன்னணியில் நிற்கிறோம்." },
  "about.desc": {
    en: "At IAS Real Estate & Builders, we look at real estate through a different lens; instead of seeing what is, we see what could be. Each day we seek better ways to design, build, and create thriving land communities.",
    ta: "ஐஏஎஸ் ரியல் எஸ்டேட் & பில்டர்ஸில், நாங்கள் ரியல் எஸ்டேட்டை புதிய பார்வையில் பார்க்கிறோம்; இருக்கும் நிலங்களை மட்டுமல்ல, அவற்றின் எதிர்கால சாத்தியக்கூறுகளையும் நாங்கள் உருவாக்குகிறோம். தினமும் சிறந்த மனை வடிவமைப்பு மற்றும் சமூகங்களை உருவாக்க உழைக்கிறோம்.",
  },
  "about.trust": { en: "TRUST", ta: "நம்பிக்கை" },
  "about.trustDesc": { en: "Complete transparency & legal integrity in every transaction.", ta: "ஒவ்வொரு நில பரிவர்த்தனையிலும் முழுமையான சட்டப்பூர்வ நேர்மை." },
  "about.quality": { en: "QUALITY", ta: "தரம்" },
  "about.qualityDesc": { en: "Precision engineering & masterplanned land promotion.", ta: "துல்லியமான மனை வடிவமைப்பு மற்றும் தரமான சாலை கட்டமைப்பு." },
  "about.vision": { en: "VISION", ta: "தொலைநோக்கு" },
  "about.visionDesc": { en: "Long-term value creation across strategic growth corridors.", ta: "வேகமாக வளர்ச்சி அடையும் பகுதிகளில் நீண்டகால சொத்து மதிப்பு." },
  "about.cardTag": { en: "DEVELOPMENT CAPABILITY", ta: "நில வளர்ச்சித் திறன்" },
  "about.cardTitle": { en: "MASTERPLANNED LAND & BUILDINGS", ta: "வடிவமைக்கப்பட்ட மனைகள் & கட்டிடங்கள்" },
  "about.cardDesc": {
    en: "Engineering strategic residential plots, commercial spaces, and structural building projects with zero legal ambiguity across Tirupathur District.",
    ta: "திருப்பத்தூர் மாவட்டம் முழுவதும் சட்டப்பூர்வ அங்கீகாரம் கொண்ட குடியிருப்பு மனைகள், வணிக வளாகங்கள் மற்றும் கட்டிட திட்டங்களை உருவாக்குதல்.",
  },
  "about.cardFramework": { en: "ARCHITECTURAL FRAMEWORK", ta: "மனை வடிவமைப்பு கட்டமைப்பு" },
  "about.cardPrecision": { en: "PRECISION SITE PLANNING", ta: "துல்லியமான மனை திட்டமிடல்" },

  // Founder Section
  "about.founderTag": { en: "FOUNDER & LEADERSHIP", ta: "நிறுவனர் & தலைமைத்துவம்" },
  "about.founderBadge": { en: "LEGAL & REAL ESTATE EXPERT", ta: "சட்ட & ரியல் எஸ்டேட் வல்லுநர்" },
  "about.founderProfile": { en: "FOUNDER PROFILE", ta: "நிறுவனர் குறிப்பு" },
  "about.founderName": { en: "K. MOHAMMED IBRAHIM,", ta: "கே. முகமது இப்ராஹிம்," },
  "about.founderDegree": { en: "B.A., LL.B.", ta: "B.A., LL.B." },
  "about.founderSub": {
    en: "FOUNDER & REAL ESTATE SPECIALIST • TIRUPATHUR DISTRICT, TAMIL NADU",
    ta: "நிறுவனர் & ரியல் எஸ்டேட் நிபுணர் • திருப்பத்தூர் மாவட்டம், தமிழ்நாடு",
  },
  "about.bio1": {
    en: "K. Mohammed Ibrahim is a trusted real-estate professional serving clients across Tirupathur District, Tamil Nadu. With a background in B.A., LL.B., he brings a strong understanding of property documentation, legal procedures, and real-estate transactions.",
    ta: "கே. முகமது இப்ராஹிம் அவர்கள் திருப்பத்தூர் மாவட்டம் மற்றும் சுற்றியுள்ள பகுதிகள் முழுவதும் வாடிக்கையாளர்களுக்கு நம்பிக்கையான ரியல் எஸ்டேட் சேவைகளை வழங்கி வருகிறார். B.A., LL.B. சட்டப் பின்னணியைக் கொண்ட இவர், சொத்து ஆவணங்கள் மற்றும் சட்டப் நடைமுறைகளில் சிறந்த புரிதல் கொண்டவர்.",
  },
  "about.bio2": {
    en: "He specializes in residential plots, land sales, property investments, and real-estate development, helping clients identify suitable properties and make informed decisions with greater confidence.",
    ta: "இவர் குடியிருப்பு மனைகள், நில விற்பனை, சொத்து முதலீடுகள் மற்றும் ரியல் எஸ்டேட் வளர்ச்சியில் நிபுணத்துவம் பெற்றுள்ளார். வாடிக்கையாளர்களுக்கு பொருத்தமான சொத்துக்களை தேர்வு செய்ய முழு வழிகாட்டுதல் வழங்குகிறார்.",
  },
  "about.bio3": {
    en: "His professional approach focuses on transparency, reliable service, proper documentation, and customer satisfaction, making him a dependable choice for buyers, sellers, and property investors in and around Tirupathur District.",
    ta: "வெளிப்படைத்தன்மை, நம்பகமான சேவை, துல்லியமான சட்டப்பூர்வ ஆவணமாக்கல் மற்றும் வாடிக்கையாளர் திருப்தி ஆகியவற்றை முதன்மையாகக் கொண்டு செயல்படுகிறார்.",
  },
  "about.pillar1": { en: "Property Title Verification", ta: "சொத்து உரிமையியல் சரிபார்ப்பு" },
  "about.pillar2": { en: "Tirupathur District Focus", ta: "திருப்பத்தூர் மாவட்ட கவனம்" },
  "about.pillar3": { en: "Transparent Legal Process", ta: "வெளிப்படைத்தன்மை கொண்ட சட்ட வழிமுறைகள்" },

  // Featured Projects Section
  "projects.tag": { en: "02 / FEATURED PROJECTS PORTFOLIO", ta: "02 / தேர்ந்தெடுக்கப்பட்ட நில திட்டங்கள்" },
  "projects.titleMain": { en: "SELECTED", ta: "சிறந்த" },
  "projects.titleCyan": { en: "LAND DEVELOPMENTS.", ta: "நில மேம்பாட்டு திட்டங்கள்." },
  "projects.dragToExplore": { en: "DRAG / SCROLL TO EXPLORE →", ta: "மேலும் அறிய நகரவும் →" },
  "projects.inquireBtn": { en: "INQUIRE ABOUT THIS PROJECT", ta: "இத்திட்டம் பற்றி விசாரிக்க" },

  "project1.title": { en: "RESIDENTIAL LAND PLOTS", ta: "குடியிருப்பு நில மனைகள்" },
  "project1.location": { en: "TIRUPATHUR DISTRICT CAPITAL", ta: "திருப்பத்தூர் மாவட்ட நகரம்" },
  "project1.category": { en: "Residential Development", ta: "குடியிருப்பு மேம்பாடு" },
  "project1.specs": { en: "Plots from 1,200 sq.ft • Clear Legal Titles • DTCP / Local Approval", ta: "1,200 சதுர அடி முதல் மனைகள் • தெளிவான சட்டப்பூர்வ ஆவணங்கள் • DTCP அங்கீகாரம்" },
  "project1.desc": { en: "Prime residential layouts with complete legal documentation, underground electricity, and asphalt access roads.", ta: "தெளிவான சட்டப்பூர்வ ஆவணங்கள், மின்சார வசதி மற்றும் தார் சாலை வசதிகளுடன் கூடிய முதன்மை குடியிருப்பு மனைகள்." },

  "project2.title": { en: "COMMERCIAL LAND DEVELOPMENT", ta: "வணிக நில மேம்பாடு" },
  "project2.location": { en: "VANIYAMBADI OFFICE CORRIDOR", ta: "வாணியம்பாடி வணிக மையம்" },
  "project2.category": { en: "Commercial Property", ta: "வணிக சொத்து" },
  "project2.specs": { en: "High Street Frontage • Commercial Zoning • Multi-Storey Potential", ta: "முதன்மை சாலை முகப்பு • வணிக மண்டல அங்கீகாரம் • பல அடுக்கு கட்டட சாத்தியக்கூறு" },
  "project2.desc": { en: "Strategic commercial land promotion tailored for corporate offices, retail complexes, and commercial building projects.", ta: "கார்ப்பரேட் அலுவலகங்கள், சில்லறை வணிக வளாகங்கள் மற்றும் வணிக கட்டிடங்களுக்கான வியூக நில மேம்பாடு." },

  "project3.title": { en: "TRANSIT JUNCTION LAYOUTS", ta: "போக்குவரத்து மைய நில அமைப்புகள்" },
  "project3.location": { en: "JOLARPET CORRIDOR", ta: "ஜோலார்பேட்டை வளர்ச்சி மண்டலம்" },
  "project3.category": { en: "Layout Acquisition", ta: "நில அமைப்புகள்" },
  "project3.specs": { en: "Rail & Highway Proximity • High Appreciation Zone", ta: "ரயில்வே மற்றும் நெடுஞ்சாலை அருகாமை • அதிவேக சொத்து மதிப்பு வளர்ச்சி" },
  "project3.desc": { en: "Strategic land acquisition along major rail junction and highway corridors designed for long-term capital growth.", ta: "முக்கிய ரயில் சந்திப்பு மற்றும் நெடுஞ்சாலை மண்டலங்களில் நீண்டகால சொத்து மதிப்பிற்காக உருவாக்கப்பட்ட நிலங்கள்." },

  "project4.title": { en: "INDUSTRIAL & TRADE BELT", ta: "தொழில்துறை & வர்த்தக மண்டலம்" },
  "project4.location": { en: "AMBUR TRADE ZONE", ta: "ஆம்பூர் வர்த்தக மண்டலம்" },
  "project4.category": { en: "Industrial Promotion", ta: "தொழில்துறை மேம்பாடு" },
  "project4.specs": { en: "Heavy Utility Access • Commercial Logistics Hub", ta: "தொழில்துறை வசதிகள் கொண்ட மண்டலம் • வணிக தளவாட மையம்" },
  "project4.desc": { en: "Industrial plot promotion for manufacturing, logistics, and regional trade enterprises with legal title guarantee.", ta: "உற்பத்தி, தளவாடங்கள் மற்றும் வர்த்தக நிறுவனங்களுக்கான தொழில்துறை நில மேம்பாடு." },

  // Working Locations Section
  "locations.tag": { en: "REGIONAL NETWORK HUB", ta: "பிராந்திய நில வலையமைப்பு" },
  "locations.titleMain": { en: "OUR WORKING", ta: "எங்கள் சேவை" },
  "locations.titleCyan": { en: "LOCATIONS.", ta: "மண்டலங்கள்." },
  "locations.subtitle": {
    en: "Promoting land developments, residential plots, and building construction across key districts in Tamil Nadu & Karnataka.",
    ta: "தமிழ்நாடு மற்றும் கர்நாடகாவின் முக்கிய மாவட்டங்களில் நில மேம்பாடு, குடியிருப்பு மனைகள் மற்றும் கட்டிட கட்டுமான சேவைகள்.",
  },
  "loc.vaniyambadi": { en: "VANIYAMBADI", ta: "வாணியம்பாடி" },
  "loc.vaniyambadiTag": { en: "HEADQUARTERS & MAIN OFFICE", ta: "தலைமையகம் & முதன்மை அலுவலகம்" },
  "loc.tirupathur": { en: "TIRUPATHUR", ta: "திருப்பத்தூர்" },
  "loc.tirupathurTag": { en: "DISTRICT CAPITAL HUB", ta: "மாவட்ட தலைநகர மையம்" },
  "loc.jolarpet": { en: "JOLARPET", ta: "ஜோலார்பேட்டை" },
  "loc.jolarpetTag": { en: "RAIL & TRANSIT JUNCTION", ta: "ரயில்வே போக்குவரத்து மையம்" },
  "loc.ambur": { en: "AMBUR", ta: "ஆம்பூர்" },
  "loc.amburTag": { en: "TRADE & INDUSTRIAL BELT", ta: "வர்த்தக & தொழில்துறை மண்டலம்" },
  "loc.vellore": { en: "VELLORE", ta: "வேலூர்" },
  "loc.velloreTag": { en: "SMART CITY CORRIDOR", ta: "ஸ்மார்ட் சிட்டி மண்டலம்" },
  "loc.hosur": { en: "HOSUR", ta: "ஓசூர்" },
  "loc.hosurTag": { en: "INDUSTRIAL GROWTH HUB", ta: "தொழில்துறை வளர்ச்சி மையம்" },
  "loc.krishnagiri": { en: "KRISHNAGIRI", ta: "கிருஷ்ணகிரி" },
  "loc.krishnagiriTag": { en: "HIGHWAY REGIONAL JUNCTION", ta: "நெடுஞ்சாலை பிராந்திய சந்திப்பு" },
  "loc.banglore": { en: "BANGLORE", ta: "பெங்களூரு" },
  "loc.bangloreTag": { en: "METRO TECH CORRIDOR", ta: "மெட்ரோ தகவல் தொழில்நுட்ப மையம்" },

  // Why Choose IAS
  "why.tag": { en: "03 / WHY CHOOSE IAS", ta: "03 / ஏன் ஐஏஎஸ் ரியல் எஸ்டேட்" },
  "why.title": { en: "THE IAS DIFFERENCE.", ta: "ஐஏஎஸ் ரியல் எஸ்டேட்டின் தனித்துவம்." },
  "why.p1Title": { en: "TRUST", ta: "நம்பிக்கை" },
  "why.p1Tag": { en: "TRANSPARENT COMMUNICATION.", ta: "வெளிப்படைத்தன்மை கொண்ட தொடர்பு." },
  "why.p1Detail": { en: "Zero ambiguity in documentation, clear titles, and honest guidance from initial inquiry to final handover.", ta: "ஆவணங்களில் சந்தேகத்திற்கு இடமில்லை, தெளிவான பட்டா மற்றும் ஆரம்ப விசாரணை முதல் இறுதி பதிவு வரை நேர்மையான வழிகாட்டுதல்." },
  "why.p2Title": { en: "QUALITY", ta: "தரம்" },
  "why.p2Tag": { en: "PROFESSIONAL STANDARDS.", ta: "தொழில்முறை தரநிலைகள்." },
  "why.p2Detail": { en: "Architectural precision, structural durability, and meticulous site planning in every land layout and construction.", ta: "துல்லியமான மனை வடிவமைப்பு, கட்டமைப்பு ஆயுள் மற்றும் ஒவ்வொரு நில மனை மற்றும் கட்டுமானத்திலும் சிறந்த திட்டமிடல்." },
  "why.p3Title": { en: "VISION", ta: "தொலைநோக்கு" },
  "why.p3Tag": { en: "LONG-TERM THINKING.", ta: "நீண்டகால சிந்தைனை." },
  "why.p3Detail": { en: "Strategic land identification along high-growth corridors engineered for long-term community value.", ta: "வேகமாக வளர்ச்சி அடையும் பகுதிகளில் நீண்டகால சமூக பயன்பாட்டிற்காக தேர்வு செய்யப்படும் நிலங்கள்." },
  "why.p4Title": { en: "VALUE", ta: "மதிப்பு" },
  "why.p4Tag": { en: "LASTING POTENTIAL.", ta: "நிலையான சொத்து மதிப்பு." },
  "why.p4Detail": { en: "Property opportunities selected specifically for high-appreciation potential and generational wealth.", ta: "உயர் சொத்து மதிப்பு மற்றும் தலைமுறை தலைமுறையாக தொடரும் செல்வத்திற்காக தேர்வு செய்யப்படும் சொத்துக்கள்." },

  // Process Framework
  "process.tag": { en: "04 / OUR PROCESS", ta: "04 / எங்கள் செயல்முறை" },
  "process.titleMain": { en: "FROM LAND", ta: "வெற்று நிலம் முதல்" },
  "process.titleCyan": { en: "TO POSSIBILITY.", ta: "சிறந்த எதிர்காலம் வரை." },
  "process.sub": { en: "A SYSTEMATIC 5-STAGE FRAMEWORK GUARANTEEING QUALITY, INTEGRITY & VALUE.", ta: "தரம் மற்றும் நம்பிக்கையை உறுதி செய்யும் 5-படிநிலை கட்டமைப்பு." },
  "process.step1": { en: "DISCOVER", ta: "கண்டறிதல்" },
  "process.step1Sub": { en: "Opportunity Identification", ta: "நில வாய்ப்புகளை கண்டறிதல்" },
  "process.step1Desc": { en: "We scan and identify strategic land parcels and premium property opportunities along high-growth corridors.", ta: "வளர்ச்சிமிக்க மண்டலங்களில் உள்ள சிறந்த நிலங்கள் மற்றும் சொத்து வாய்ப்புகளை ஆய்வு செய்து கண்டறிகிறோம்." },
  "process.step2": { en: "EVALUATE", ta: "ஆய்வு செய்தல்" },
  "process.step2Sub": { en: "Due Diligence & Title Audit", ta: "சட்டப்பூர்வ ஆவண ஆய்வு" },
  "process.step2Desc": { en: "Rigorous legal verification, clear title checks, zoning analysis, and structural valuation to ensure zero risk.", ta: "எவ்வித ஆபத்தும் இல்லாத வகையில் சட்டப்பூர்வ சரிபார்ப்பு, வில்லங்கமின்மை சான்று மற்றும் பட்டா ஆய்வு மேற்கொள்கிறோம்." },
  "process.step3": { en: "SELECT", ta: "தேர்வு செய்தல்" },
  "process.step3Sub": { en: "Tailored Match & Acquisition", ta: "பொருத்தமான சொத்து தேர்வு" },
  "process.step3Desc": { en: "Matching buyers, developers, and investors with the exact property suited to their requirements and budget.", ta: "வாடிக்கையாளர் மற்றும் முதலீட்டாளர்களின் தேவை மற்றும் பட்ஜெட்டிற்கு ஏற்றவாறு சரியான சொத்தை தேர்வு செய்கிறோம்." },
  "process.step4": { en: "DEVELOP", ta: "மேம்படுத்துதல்" },
  "process.step4Sub": { en: "Masterplanning & Construction", ta: "மனை அமைத்தல் & கட்டுமானம்" },
  "process.step4Desc": { en: "Executing infrastructure development, site layouts, road networks, and architectural construction with precision.", ta: "தார் சாலை வசதி, மின்சார கட்டமைப்பு, மனை பிரித்தல் மற்றும் கட்டுமானப் பணிகளை துல்லியமாக செயல்படுத்துகிறோம்." },
  "process.step5": { en: "DELIVER", ta: "ஒப்படைத்தல்" },
  "process.step5Sub": { en: "Handover & Legacy", ta: "உரிமை ஒப்படைப்பு" },
  "process.step5Desc": { en: "Seamless legal transfer, documentation handover, and long-term asset value creation for peace of mind.", ta: "சுலபமான பத்திரப் பதிவு, ஆவணங்கள் ஒப்படைப்பு மற்றும் மன அமைதியுடன் கூடிய சொத்து உரிமை மாற்றம்." },

  // Testimonials
  "testimonials.tag": { en: "05 / CLIENT FEEDBACK", ta: "05 / வாடிக்கையாளர் கருத்துக்கள்" },
  "testimonials.q1": { en: "Professional service, clear communication, and a smooth property experience from land promotion to final registration.", ta: "தொழில்முறை சேவை, தெளிவான தொடர்பு மற்றும் நில மேம்பாடு முதல் இறுதி பத்திரப் பதிவு வரை மிகச் சிறந்த அனுபவம்." },
  "testimonials.c1": { en: "RESIDENTIAL PLOT BUYER", ta: "குடியிருப்பு மனை வாங்குபவர்" },
  "testimonials.l1": { en: "Tirupathur District", ta: "திருப்பத்தூர் மாவட்டம்" },
  "testimonials.q2": { en: "IAS Real Estate & Builders delivered complete legal transparency and guided our commercial land development project flawlessly.", ta: "ஐஏஎஸ் ரியல் எஸ்டேட் நிறுவனம் முழுமையான சட்டப்பூர்வ வெளிப்படைத்தன்மையுடன் எங்கள் வணிக நில திட்டத்தை வழிநடத்தியது." },
  "testimonials.c2": { en: "COMMERCIAL DEVELOPER", ta: "வணிக நில உருவாக்குநர்" },
  "testimonials.l2": { en: "Vaniyambadi Corridor", ta: "வாணியம்பாடி மண்டலம்" },
  "testimonials.q3": { en: "Trustworthy partner for land promotion. The entire transaction was handled with absolute legal title guarantee and speed.", ta: "நில மேம்பாட்டிற்கு நம்பகமான நிறுவனம். அனைத்து பரிவர்த்தனைகளும் முழு சட்டப்பூர்வ உத்தரவாதத்துடன் விரைவாக முடித்துக் கொடுக்கப்பட்டன." },
  "testimonials.c3": { en: "PROPERTY OWNER", ta: "சொத்து உரிமையாளர்" },
  "testimonials.l3": { en: "Jolarpet & Ambur Region", ta: "ஜோலார்பேட்டை & ஆம்பூர் பகுதி" },

  // CTA Section
  "cta.tag": { en: "IAS REAL ESTATE & BUILDERS", ta: "ஐஏஎஸ் ரியல் எஸ்டேட் & பில்டர்ஸ்" },
  "cta.titleMain": { en: "YOUR NEXT", ta: "உங்கள் அடுத்த" },
  "cta.titleCyan": { en: "PROPERTY STARTS HERE.", ta: "சொத்து பயணம் இங்கே தொடங்குகிறது." },
  "cta.desc": { en: "Explore land opportunities, masterplanned developments, and real-estate solutions with IAS across Tirupathur District.", ta: "திருப்பத்தூர் மாவட்டம் முழுவதும் சிறந்த நில வாய்ப்புகள் மற்றும் கட்டுமான திட்டங்களை ஐஏஎஸ் உடன் கண்டறியுங்கள்." },
  "cta.callBtn": { en: "CALL +91 9600070025", ta: "அழைக்க +91 9600070025" },
  "cta.whatsappBtn": { en: "WHATSAPP DIRECT", ta: "நேரடி வாட்ஸ்அப்" },

  // Contact Section
  "contact.tag": { en: "06 / GET IN TOUCH", ta: "06 / தொடர்பு கொள்ள" },
  "contact.titleMain": { en: "LET'S TALK", ta: "சொத்து பற்றி" },
  "contact.titleCyan": { en: "PROPERTY.", ta: "பேசுவோம்." },
  "contact.desc": {
    en: "Connect directly with IAS Real Estate & Builders for strategic land promotions, land development inquiries, property buying, selling, and building opportunities.",
    ta: "நில விற்பனை, வாங்குதல், மனை மேம்பாடு மற்றும் கட்டிட ஆலோசனைகளுக்கு நேரடியாக ஐஏஎஸ் ரியல் எஸ்டேட் & பில்டர்ஸை தொடர்பு கொள்ளுங்கள்.",
  },
  "contact.legalTransparency": { en: "LEGAL TRANSPARENCY", ta: "சட்டப்பூர்வ வெளிப்படைத்தன்மை" },
  "contact.builderExcellence": { en: "BUILDER EXCELLENCE", ta: "கட்டுமான சிறப்பு" },
  "contact.officeLabel": { en: "HEAD OFFICE ADDRESS", ta: "தலைமை அலுவலக முகவரி" },
  "contact.officeAddr": {
    en: "No 80, Madha Complex, Opposite, Noorullapet, Cn Anadurai Road, Govindapuram, Vaniyambadi-635751, Tamil Nadu",
    ta: "எண் 80, மாதா காம்ப்ளக்ஸ், எதிரில், நூருல்லாபேட்டை, சி.என். அண்ணாதுரை சாலை, கோவிந்தபுரம், வாணியம்பாடி-635751, தமிழ்நாடு",
  },
  "contact.phone1Label": { en: "PRIMARY PHONE LINE", ta: "முதன்மை தொலைபேசி எண்" },
  "contact.phone2Label": { en: "SECONDARY PHONE LINE", ta: "இரண்டாம் தொலைபேசி எண்" },

  // Footer Section
  "footer.subtag": { en: "LAND • DEVELOPMENT • BUILDERS", ta: "நிலம் • வளர்ச்சி • பில்டர்ஸ்" },
  "footer.desc": {
    en: "Premium real estate, land promotion, land development, residential, commercial, property investment, and structural building solutions.",
    ta: "உயர்தர ரியல் எஸ்டேட், நில மேம்பாடு, குடியிருப்பு, வணிக சொத்துக்கள் மற்றும் கட்டுமான தீர்வுகள்.",
  },
  "footer.tagline": { en: "REAL ESTATE • LAND • DEVELOPMENT", ta: "ரியல் எஸ்டேட் • நிலம் • வளர்ச்சி" },
  "footer.directTag": { en: "DIRECT INQUIRIES & SOCIALS", ta: "நேரடி விசாரணைகள் & சமூக ஊடகங்கள்" },
  "footer.p1": { en: "PHONE LINE 1", ta: "தொலைபேசி எண் 1" },
  "footer.p2": { en: "PHONE LINE 2", ta: "தொலைபேசி எண் 2" },
  "footer.insta": { en: "OFFICIAL INSTAGRAM", ta: "அதிகாரப்பூர்வ இன்ஸ்டாகிராம்" },
  "footer.servicesLabel": { en: "SERVICES COVERED", ta: "வழங்கப்படும் சேவைகள்" },
  "footer.servicesText": {
    en: "Real Estate, Land Promotion, Land Development, Property Buying, Property Selling, Construction & Builders.",
    ta: "ரியல் எஸ்டேட், நில மேம்பாடு, சொத்து வாங்குதல், விற்பனை செய்தல், கட்டிட கட்டுமானம் & பில்டர்ஸ்.",
  },
  "footer.rights": { en: "© 2026 IAS REAL ESTATE & BUILDERS. ALL RIGHTS RESERVED.", ta: "© 2026 ஐஏஎஸ் ரியல் எஸ்டேட் & பில்டர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  "footer.backToTop": { en: "BACK TO TOP", ta: "மேலே செல்ல" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("ias_lang") as Language;
    if (saved === "en" || saved === "ta") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ias_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ta" : "en";
    setLanguage(nextLang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
