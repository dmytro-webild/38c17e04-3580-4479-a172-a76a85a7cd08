import AppearOnScroll from "@/components/animation/AppearOnScroll";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import { ShieldCheck, CheckCircle2, Award, FileCheck, Lock, Cloud } from "lucide-react";

interface BadgeItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  subtitle: string;
  badgeBg: string;
  accentColor: string;
  badgeTag: string;
  icon: "cisco-ethical" | "cisco-cyber" | "google-cyber" | "iso" | "soc2" | "owasp" | "cloud";
}

const BADGES: BadgeItem[] = [
  {
    id: "cisco-ethical",
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Systems",
    category: "Verified Security Credential",
    subtitle: "Penetration Testing, Vulnerability Assessment & Ethical Hacking",
    badgeTag: "Official Certification VERIFIED",
    accentColor: "from-cyan-400 via-blue-500 to-indigo-600",
    badgeBg: "bg-cyan-950/50 border-cyan-500/50 text-cyan-300",
    icon: "cisco-ethical"
  },
  {
    id: "cisco-cyber",
    title: "Cisco Cybersecurity",
    issuer: "Cisco Systems",
    category: "Enterprise Security Credential",
    subtitle: "Zero-Trust Architecture, Network Defense & SecOps",
    badgeTag: "Official Certification VERIFIED",
    accentColor: "from-teal-400 via-emerald-500 to-cyan-600",
    badgeBg: "bg-teal-950/50 border-teal-500/50 text-teal-300",
    icon: "cisco-cyber"
  },
  {
    id: "google-cyber",
    title: "Google Cybersecurity",
    issuer: "Google",
    category: "Professional Certificate",
    subtitle: "SIEM, Python for Security, Threat Analysis & Defense Systems",
    badgeTag: "Official Certification VERIFIED",
    accentColor: "from-blue-500 via-indigo-500 to-purple-600",
    badgeBg: "bg-blue-950/50 border-blue-500/50 text-blue-300",
    icon: "google-cyber"
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001",
    issuer: "ISO / IEC Standard",
    category: "International Standard",
    subtitle: "Information Security Management System (ISMS) Protocols",
    badgeTag: "International Standard VERIFIED",
    accentColor: "from-amber-400 via-yellow-500 to-orange-600",
    badgeBg: "bg-amber-950/50 border-amber-500/50 text-amber-300",
    icon: "iso"
  },
  {
    id: "soc-2",
    title: "SOC 2 Type II",
    issuer: "AICPA Standard",
    category: "AICPA Standard",
    subtitle: "Rigorous Security, Availability & Confidentiality Audit Controls",
    badgeTag: "AICPA Standard VERIFIED",
    accentColor: "from-emerald-400 via-teal-500 to-green-600",
    badgeBg: "bg-emerald-950/50 border-emerald-500/50 text-emerald-300",
    icon: "soc2"
  },
  {
    id: "owasp",
    title: "OWASP Top 10",
    issuer: "OWASP Foundation",
    category: "AppSec Standard",
    subtitle: "Hardened Web & API Application Security & Audit Standards",
    badgeTag: "AppSec Standard VERIFIED",
    accentColor: "from-violet-400 via-purple-500 to-indigo-600",
    badgeBg: "bg-violet-950/50 border-violet-500/50 text-violet-300",
    icon: "owasp"
  },
  {
    id: "cloud-security",
    title: "AWS & Cloud Security",
    issuer: "Amazon Web Services",
    category: "Cloud Architecture",
    subtitle: "Hardened AWS, Azure & GCP Multi-Cloud Security Infrastructure",
    badgeTag: "Cloud Security VERIFIED",
    accentColor: "from-sky-400 via-blue-500 to-cyan-600",
    badgeBg: "bg-sky-950/50 border-sky-500/50 text-sky-300",
    icon: "cloud"
  }
];

const RenderHDBadgeIcon = ({ icon }: { icon: BadgeItem["icon"] }) => {
  if (icon === "cisco-ethical") {
    return (
      <div className="relative flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-cyan-950 via-cyan-900 to-blue-950 border border-cyan-400/40 p-2.5 shrink-0 shadow-lg shadow-cyan-950/50">
        <svg viewBox="0 0 48 48" fill="none" className="size-9">
          <path d="M24 4L8 10V22C8 31.8 14.8 40.7 24 44C33.2 40.7 40 31.8 40 22V10L24 4Z" fill="url(#cisco-eth-grad)" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 16V26" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="32" r="2" fill="#38bdf8" />
          <path d="M16 22H32" stroke="#22d3ee" strokeWidth="2" strokeDasharray="2 2" />
          <defs>
            <linearGradient id="cisco-eth-grad" x1="8" y1="4" x2="40" y2="44">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute -top-1 -right-1 flex size-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full size-3 bg-cyan-400"></span>
        </span>
      </div>
    );
  }

  if (icon === "cisco-cyber") {
    return (
      <div className="relative flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 border border-teal-400/40 p-2.5 shrink-0 shadow-lg shadow-teal-950/50">
        <svg viewBox="0 0 48 48" fill="none" className="size-9">
          <path d="M24 4L6 12V22C6 32.5 13.7 42.1 24 45C34.3 42.1 42 32.5 42 22V12L24 4Z" fill="url(#cisco-cyb-grad)" fillOpacity="0.3" stroke="#2dd4bf" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="18" y="22" width="12" height="10" rx="2" fill="#2dd4bf" fillOpacity="0.2" stroke="#2dd4bf" strokeWidth="2" />
          <path d="M21 22V18C21 16.3 22.3 15 24 15C25.7 15 27 16.3 27 18V22" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="cisco-cyb-grad" x1="6" y1="4" x2="42" y2="45">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (icon === "google-cyber") {
    return (
      <div className="relative flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 border border-blue-400/40 p-2.5 shrink-0 shadow-lg shadow-blue-950/50">
        <svg viewBox="0 0 48 48" fill="none" className="size-9">
          <path d="M24 4L7 11V23C7 33.2 14.3 42.4 24 45C33.7 42.4 41 33.2 41 23V11L24 4Z" fill="url(#google-cyb-grad)" fillOpacity="0.25" stroke="#60a5fa" strokeWidth="2.5" />
          <path d="M16 24L21 29L32 18" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="google-cyb-grad" x1="7" y1="4" x2="41" y2="45">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="33%" stopColor="#EA4335" />
              <stop offset="66%" stopColor="#FBBC05" />
              <stop offset="100%" stopColor="#34A853" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (icon === "iso") {
    return (
      <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 border border-amber-400/40 p-2.5 shrink-0 shadow-lg shadow-amber-950/50 text-amber-300">
        <Award className="size-9" strokeWidth={1.8} />
      </div>
    );
  }

  if (icon === "soc2") {
    return (
      <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 border border-emerald-400/40 p-2.5 shrink-0 shadow-lg shadow-emerald-950/50 text-emerald-300">
        <FileCheck className="size-9" strokeWidth={1.8} />
      </div>
    );
  }

  if (icon === "owasp") {
    return (
      <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950 border border-violet-400/40 p-2.5 shrink-0 shadow-lg shadow-violet-950/50 text-violet-300">
        <Lock className="size-9" strokeWidth={1.8} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-sky-950 via-blue-950 to-cyan-950 border border-sky-400/40 p-2.5 shrink-0 shadow-lg shadow-sky-950/50 text-sky-300">
      <Cloud className="size-9" strokeWidth={1.8} />
    </div>
  );
};

const BadgeCard = ({ badge }: { badge: BadgeItem }) => (
  <div className="w-[340px] sm:w-[380px] shrink-0 p-6 card rounded-2xl border border-border/80 bg-background/80 backdrop-blur-md shadow-2xl flex flex-col justify-between hover:border-primary-cta/60 transition-all duration-300 relative overflow-hidden group">
    <div className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r ${badge.accentColor}`} />

    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <RenderHDBadgeIcon icon={badge.icon} />
        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${badge.badgeBg} flex items-center gap-1.5 font-mono tracking-tight shrink-0`}>
          <CheckCircle2 className="size-3.5 shrink-0" />
          {badge.issuer}
        </span>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary-cta transition-colors tracking-tight">
          {badge.title}
        </h3>
        <p className="text-xs text-foreground/60 mt-1 font-mono uppercase tracking-wider font-semibold">
          {badge.category}
        </p>
        <p className="text-sm text-foreground/85 mt-2.5 leading-relaxed">
          {badge.subtitle}
        </p>
      </div>
    </div>

    <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-xs">
      <span className="flex items-center gap-1.5 text-primary-cta font-medium">
        <ShieldCheck className="size-4" />
        <span className="truncate">{badge.badgeTag}</span>
      </span>
      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-primary-cta/10 text-primary-cta border border-primary-cta/20">
        VERIFIED
      </span>
    </div>
  </div>
);

export default function TrustBanner() {
  return (
    <div className="py-16 relative overflow-hidden border-y border-border/40 bg-card/20">
      <div className="max-w-6xl mx-auto px-6 mb-10 flex flex-col items-center gap-3 text-center">
        <AppearOnScroll variant="fade">
          <div className="px-4 py-1 text-xs font-semibold uppercase tracking-wider card rounded-full border border-primary-cta/40 text-primary-cta flex items-center gap-2 w-fit mx-auto shadow-sm">
            <ShieldCheck className="size-4" />
            <span>Verified Security Credentials & Compliance</span>
          </div>
        </AppearOnScroll>

        <GradientWordReveal
          text="Certified Cybersecurity & Enterprise Standards"
          variant="slide-up"
          tag="h2"
          className="text-2xl md:text-4xl 2xl:text-5xl font-bold tracking-tight text-foreground"
        />

        <p className="text-sm md:text-base text-foreground/75 max-w-2xl text-balance">
          High-definition security certifications, compliance protocols, and cloud standards backing Veloce Labs software engineering.
        </p>
      </div>

      {/* Infinite Left-to-Right Scrolling HD Badges Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Overlays for smooth visual edge fading */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max gap-6 animate-marquee-horizontal-reverse [animation-duration:35s] hover:[animation-play-state:paused]">
          {[...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
            <BadgeCard key={`${badge.id}-${idx}`} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
