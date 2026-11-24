"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

export interface ClientSlide {
  id: string;
  name: string;
  logo?: string;
  category: string;
  summary: string;
  impact: string;
  bgTone: "obsidian" | "graphite" | "limedeep";
}

const DEFAULT_CLIENTS: ClientSlide[] = [
  {
    id: "01",
    name: "DataLine Services",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794866719552-zyimggke.jpg",
    category: "Enterprise Cloud & APIs",
    summary: "Engineered high-throughput data synchronization, automated API pipelines, and secure cloud infrastructure.",
    impact: "99.99% Uptime & 10x Processing Speed",
    bgTone: "obsidian"
  },
  {
    id: "02",
    name: "Chamsana",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794866719553-tiocgpo0.jpg",
    category: "Custom ERP & Multi-Site CRM",
    summary: "Custom ERP architecture and inventory management designed for multi-branch retail distribution and real-time stock sync.",
    impact: "Seamless Multi-Site Operation & Zero Lag",
    bgTone: "graphite"
  },
  {
    id: "03",
    name: "Asel Mobile",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843807-s1vuun7j.webp",
    category: "Mobile Application & SaaS Studio",
    summary: "Built high-performance cross-platform iOS & Android mobile application paired with subscription SaaS backend.",
    impact: "Fast-Track Market Launch & Scalable Backend",
    bgTone: "limedeep"
  },
  {
    id: "04",
    name: "Mabfem Engineering",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843806-a9big4co.png",
    category: "Industrial PLM & Asset Security",
    summary: "Tailored PLM architecture, asset tracking software, and operational workflow automation for industrial operations.",
    impact: "Automated Workflows & Integrated Tracking",
    bgTone: "graphite"
  },
  {
    id: "05",
    name: "Webac",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843808-hn7i92db.png",
    category: "Custom Web App & Zero-Trust",
    summary: "Modern web application platform with integrated zero-trust security framework and enterprise single sign-on.",
    impact: "Certified Enterprise Defense & Peak Speed",
    bgTone: "obsidian"
  },
  {
    id: "06",
    name: "Colix",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794862161850-1kqy9xa2.jpg",
    category: "Logistics Traceability & Cloud AI",
    summary: "Cloud-native logistics platform featuring real-time package traceability, automated routing, and fleet analytics.",
    impact: "Real-Time Fleet & Supply Chain Visibility",
    bgTone: "limedeep"
  },
  {
    id: "07",
    name: "MA Tradition",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843807-0r036fna.jpg",
    category: "E-Commerce & Enterprise ERP",
    summary: "Custom e-commerce ecosystem integrated directly into back-office ERP, order fulfillment, and finance systems.",
    impact: "3x Operational Scale & Streamlined Logistics",
    bgTone: "graphite"
  },
  {
    id: "08",
    name: "Crystal Clear Tech",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794862161851-38yz2c2x.jpg",
    category: "SaaS Analytics & Cyber Audit",
    summary: "Full-stack SaaS dashboard engineering and comprehensive penetration testing for mission-critical client infrastructure.",
    impact: "100% Security Compliance & High-Scale API",
    bgTone: "obsidian"
  }
];

export interface ClientCinematicSliderProps {
  slides?: ClientSlide[];
}

export default function ClientCinematicSlider({ slides = DEFAULT_CLIENTS }: ClientCinematicSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const calculatedIndex = Math.min(
      slides.length - 1,
      Math.max(0, Math.floor(latest * slides.length))
    );
    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  });

  const activeSlide = slides[activeIndex] || slides[0];
  const activeFormattedTotal = slides.length < 10 ? `0${slides.length}` : `${slides.length}`;

  const getBgClass = (tone: ClientSlide["bgTone"]) => {
    switch (tone) {
      case "limedeep":
        return "bg-gradient-to-br from-[#1B3D04] via-[#050505] to-[#101210]";
      case "graphite":
        return "bg-gradient-to-br from-[#101210] via-[#050505] to-[#1B3D04]/40";
      case "obsidian":
      default:
        return "bg-gradient-to-br from-[#050505] via-[#101210] to-[#050505]";
    }
  };

  return (
    <div ref={containerRef} className="relative h-[450vh] w-full bg-[#050505] border-y border-[#1B3D04]/30">
      {/* Sticky Screen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-10 text-[#FFFFFF] select-none">
        
        {/* Full-bleed surface wipe background transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 z-0 ${getBgClass(activeSlide.bgTone)}`}
          >
            {/* Subtle glow and geometric lines */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,248,42,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1B3D04_1px,transparent_1px),linear-gradient(to_bottom,#1B3D04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* 1. Top Header HUD */}
        <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 w-full max-w-7xl mx-auto pt-2">
          {/* Top-Left Index & Name */}
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-wider uppercase">
            <span className="px-3 py-1.5 rounded-lg bg-[#101210] border border-[#7CC115]/40 text-[#B4F82A] font-bold shadow-md">
              {activeSlide.id} <span className="text-[#FFFFFF]">/</span> {activeSlide.name}
            </span>
            <span className="hidden md:inline-block text-[#a1a1aa] font-medium">
              // {activeSlide.category}
            </span>
          </div>

          {/* Section HUD Tagline & Top-Right Counter */}
          <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
            <span className="hidden sm:inline-block text-[#7CC115] tracking-widest uppercase font-semibold">
              OUR CLIENTS & PARTNERS
            </span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101210] border border-[#7CC115]/40 shadow-md">
              <span className="size-2 rounded-full bg-[#B4F82A] animate-pulse" />
              <span className="text-[#B4F82A] font-bold">{activeSlide.id}</span>
              <span className="text-[#a1a1aa]">/</span>
              <span className="text-[#FFFFFF]">{activeFormattedTotal}</span>
            </div>
          </div>
        </header>

        {/* 2. Large Centerpiece Typography Display */}
        <main className="relative z-20 my-auto flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -35, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#7CC115]/50 leading-none drop-shadow-2xl">
                {activeSlide.name}
              </h2>
              <div className="flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-[#101210]/80 border border-[#1B3D04]">
                <span className="text-xs sm:text-base font-mono uppercase tracking-widest text-[#B4F82A] font-bold">
                  {activeSlide.category}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* 3. Bottom Editorial Visual & Caption Layer */}
        <footer className="relative z-20 flex flex-col md:flex-row items-end justify-between gap-4 w-full max-w-7xl mx-auto pb-2">
          
          {/* Bottom-Left Inset Media Frame */}
          <div className="flex items-center gap-4 bg-[#101210]/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#7CC115]/40 shadow-2xl max-w-full sm:max-w-md w-full md:w-auto">
            <div className="size-16 sm:size-20 rounded-xl bg-[#050505] p-2 flex items-center justify-center border border-[#1B3D04] overflow-hidden shrink-0 shadow-inner">
              {activeSlide.logo ? (
                <img
                  src={activeSlide.logo}
                  alt={activeSlide.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-2xl font-black text-[#B4F82A] font-mono">
                  {activeSlide.name.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#7CC115] tracking-wider font-bold">
                CLIENT PARTNER
              </span>
              <span className="text-sm sm:text-lg font-bold text-[#FFFFFF] truncate">
                {activeSlide.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#a1a1aa] font-mono truncate">
                Custom System & App Build
              </span>
            </div>
          </div>

          {/* Slide Navigation Progress Bar / Dots */}
          <div className="flex items-center gap-1.5 p-2 rounded-full bg-[#101210]/90 backdrop-blur-md border border-[#1B3D04] mx-auto md:mx-0">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${slide.id}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 h-2.5 bg-[#B4F82A] shadow-[0_0_12px_#B4F82A]"
                    : "w-2.5 h-2.5 bg-[#a1a1aa]/40 hover:bg-[#7CC115]"
                }`}
              />
            ))}
          </div>

          {/* Bottom-Right Concise Client Summary */}
          <div className="flex flex-col bg-[#101210]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#7CC115]/40 shadow-2xl max-w-full md:max-w-lg w-full md:w-auto text-left md:text-right">
            <span className="text-[11px] sm:text-xs font-mono text-[#B4F82A] uppercase tracking-wider font-bold mb-1">
              WHAT VELOCE LABS ENGINEERED
            </span>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF] leading-snug font-sans font-medium">
              {activeSlide.summary}
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1B3D04] flex items-center justify-start md:justify-end gap-2 text-xs sm:text-sm font-semibold text-[#B4F82A]">
              <span className="size-2 rounded-full bg-[#B4F82A] animate-pulse" />
              <span>Impact: {activeSlide.impact}</span>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
