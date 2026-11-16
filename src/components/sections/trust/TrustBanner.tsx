import AppearOnScroll from "@/components/animation/AppearOnScroll";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import { ShieldCheck, Award, Lock, CheckCircle2, Cloud, FileCheck } from "lucide-react";

interface BadgeItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  subtitle: string;
  highlight?: boolean;
  accentColor: string;
  badgeBg: string;
  icon: "cisco-ethical" | "cisco-cyber" | "google-cyber" | "iso" | "soc2" | "owasp" | "cloud";
}

const BADGES: BadgeItem[] = [
  {
    id: "cisco-ethical",
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Systems",
    category: "Verified Security Credential",
    subtitle: "Penetration Testing, Vulnerability Assessment & Ethical Hacking",
    highlight: true,
    accentColor: "from-cyan-400 to-blue-600",
    badgeBg: "bg-cyan-950/40 border-cyan-500/40 text-cyan-400",
    icon: "cisco-ethical"
  },
  {
    id: "cisco-cyber",
    title: "Cisco Cybersecurity",
    issuer: "Cisco Systems",
    category: "Enterprise Security Credential",
    subtitle: "Zero-Trust Architecture, Network Defense & SecOps",
    highlight: true,
    accentColor: "from-teal-400 to-emerald-600",
    badgeBg: "bg-teal-950/40 border-teal-500/40 text-teal-400",
    icon: "cisco-cyber"
  },
  {
    id: "google-cyber",
    title: "Google Cybersecurity",
    issuer: "Google",
    category: "Professional Certificate",
    subtitle: "SIEM, Python for Security, Threat Analysis & Defense Systems",
    highlight: true,
    accentColor: "from-blue-400 via-indigo-500 to-purple-600",
    badgeBg: "bg-blue-950/40 border-blue-500/40 text-blue-400",
    icon: "google-cyber"
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001",
    issuer: "International Standard",
    category: "Information Security",
    subtitle: "Certified Information Security Management Protocols",
    accentColor: "from-amber-400 to-yellow-600",
    badgeBg: "bg-amber-950/40 border-amber-500/40 text-amber-400",
    icon: "iso"
  },
  {
    id: "soc-2",
    title: "SOC 2 Type II",
    issuer: "AICPA Standard",
    category: "Enterprise Compliance",
    subtitle: "Rigorous Security, Availability & Confidentiality Controls",
    accentColor: "from-emerald-400 to-teal-600",
    badgeBg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-400",
    icon: "soc2"
  },
  {
    id: "owasp",
    title: "OWASP Top 10",
    issuer: "AppSec Standard",
    category: "Web & API Security",
    subtitle: "Hardened Application Development & Code Audit Standards",
    accentColor: "from-violet-400 to-indigo-600",
    badgeBg: "bg-violet-950/40 border-violet-500/40 text-violet-400",
    icon: "owasp"
  },
  {
    id: "cloud-security",
    title: "AWS & Cloud Security",
    issuer: "Multi-Cloud Partners",
    category: "Cloud Architecture",
    subtitle: "Hardened AWS, Azure & GCP Cloud Security Deployment",
    accentColor: "from-sky-400 to-blue-600",
    badgeBg: "bg-sky-950/40 border-sky-500/40 text-sky-400",
    icon: "cloud"
  }
];

const RenderBadgeIcon = ({ icon }: { icon: BadgeItem["icon"] }) => {
  if (icon === "cisco-ethical" || icon === "cisco-cyber") {
    return (
      <div className="relative flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 text-cyan-400 p-2 shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7 text-cyan-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" strokeLinecap="round" />
          <path d="M12 16h.01" strokeLinecap="round" />
        </svg>
        <span className="absolute -top-1 -right-1 flex size-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full size-3 bg-cyan-500"></span>
        </span>
      </div>
    );
  }

  if (icon === "google-cyber") {
    return (
      <div className="relative flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-red-500/20 border border-blue-400/30 text-blue-400 p-2 shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="size-7">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V6l-9-4z" fill="url(#google-grad)" fillOpacity="0.25" stroke="#4285F4" strokeWidth="1.8" />
          <path d="M9 12l2 2 4-4" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="google-grad" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <div className="flex items-center justify-center size-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 p-2 shrink-0">
        <Award className="size-7" />
      </div>
    );
  }

  if (icon === "soc2") {
    return (
      <div className="flex items-center justify-center size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-2 shrink-0">
        <FileCheck className="size-7" />
      </div>
    );
  }

  if (icon === "owasp") {
    return (
      <div className="flex items-center justify-center size-12 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 p-2 shrink-0">
        <Lock className="size-7" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center size-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 p-2 shrink-0">
      <Cloud className="size-7" />
    </div>
  );
};

export default function TrustBanner() {
  return (
    <div className="py-16 relative overflow-hidden border-y border-border/40 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <AppearOnScroll variant="fade">
            <div className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider card rounded-full border border-primary-cta/30 text-primary-cta flex items-center gap-1.5 w-fit mx-auto">
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
            Veloce Labs delivers enterprise-grade software backed by official Cisco Cybersecurity & Ethical Hacking certifications, Google Cybersecurity expertise, and zero-trust standards.
          </p>
        </div>

        {/* Featured Key Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BADGES.filter((b) => b.highlight).map((badge) => (
            <AppearOnScroll key={badge.id} variant="slide-up">
              <div className="group relative flex flex-col justify-between p-6 card rounded-xl border border-border/80 hover:border-primary-cta/50 transition-all duration-300 bg-background/60 backdrop-blur-md overflow-hidden h-full shadow-lg">
                <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${badge.accentColor}`} />
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <RenderBadgeIcon icon={badge.icon} />
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badge.badgeBg} flex items-center gap-1`}>
                      <CheckCircle2 className="size-3" />
                      {badge.issuer}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary-cta transition-colors">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-0.5 font-medium uppercase tracking-wider">
                      {badge.category}
                    </p>
                    <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-foreground/60">
                  <span className="flex items-center gap-1 text-primary-cta font-medium">
                    <ShieldCheck className="size-3.5" /> Official Certification
                  </span>
                  <span className="font-mono text-[11px] opacity-75">VERIFIED</span>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>

        {/* Supporting Security Standards Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {BADGES.filter((b) => !b.highlight).map((badge) => (
            <AppearOnScroll key={badge.id} variant="fade">
              <div className="flex items-center gap-3 p-3.5 card rounded-lg border border-border/60 hover:border-border transition-colors bg-background/40">
                <RenderBadgeIcon icon={badge.icon} />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground truncate">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-foreground/60 truncate">
                    {badge.issuer}
                  </p>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
