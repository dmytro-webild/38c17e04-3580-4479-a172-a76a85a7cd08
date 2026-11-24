import Accordion from "@/components/display/Accordion";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import { HelpCircle, MessageSquare } from "lucide-react";

export default function FaqSection() {
  const faqItems = [
    {
      title: "What software engineering services does Veloce Labs specialize in?",
      content:
        "Veloce Labs specializes in custom web and mobile application engineering, enterprise ERP, CRM, and PLM architectures, zero-trust cybersecurity implementations, and SaaS product development for startups and enterprise leaders."
    },
    {
      title: "How does the 1,000 TND Starter MVP package work?",
      content:
        "Our 1,000 TND Starter MVP package is designed for rapid startup validation. We build core frontend and backend database infrastructure, API endpoints, and authentication in 2 to 3 weeks, backed by 14 days of dedicated post-launch support."
    },
    {
      title: "What cybersecurity standards protect your software platforms?",
      content:
        "Our engineering protocols adhere to zero-trust security architecture, secure API encryption standards, and ISO/IEC 27001 guidelines to keep your enterprise applications safe."
    },
    {
      title: "Can Veloce Labs build customized ERP, CRM, or PLM systems for our company?",
      content:
        "Yes! We design and develop fully bespoke ERP, CRM, and PLM systems built specifically around your organization's unique operational workflows, data pipelines, and multi-site management requirements."
    },
    {
      title: "How does the Veloce Labs Startup Studio & Co-Building model work?",
      content:
        "Beyond client services, Veloce Labs incubates proprietary tech startups and co-builds high-potential SaaS applications alongside visionary founders, providing long-term technical architecture, infrastructure scaling, and product engineering."
    },
    {
      title: "Where is Veloce Labs located and how do we schedule a meeting?",
      content:
        "Our office is located at Centre Bourguiba, Sfax, Regus. You can connect directly with CEO & Founder Moheb Awichewi via WhatsApp at +216 50 564 964 or send us your details using the contact form below."
    }
  ];

  return (
    <div className="py-20 relative border-t border-[#1B3D04] bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <AppearOnScroll variant="fade">
            <div className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider card rounded-full border border-[#7CC115]/40 text-[#B4F82A] flex items-center gap-1.5 w-fit mx-auto shadow-sm">
              <HelpCircle className="size-4" />
              <span>Frequently Asked Questions</span>
            </div>
          </AppearOnScroll>

          <GradientWordReveal
            text="Got Questions? We Have Answers."
            variant="slide-up"
            tag="h2"
            className="text-3xl md:text-5xl 2xl:text-6xl font-semibold text-center text-balance tracking-tight text-[#FFFFFF]"
          />

          <p className="text-sm md:text-lg text-[#a1a1aa] max-w-2xl text-balance">
            Everything you need to know about our customized software development, security credentials, pricing models, and how to start your project.
          </p>
        </div>

        <AppearOnScroll variant="slide-up">
          <Accordion items={faqItems} variant="hairline" className="mt-2" />
        </AppearOnScroll>

        <div className="mt-4 p-6 card rounded-xl border border-[#7CC115]/40 bg-[#101210]/90 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg bg-[#1B3D04] text-[#B4F82A] border border-[#7CC115]/30 shrink-0">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#FFFFFF]">Have more questions?</h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa]">Chat directly with our lead software architect on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/21650564964"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold rounded-lg btn-primary bg-[#B4F82A] text-[#050505] hover:bg-[#7CC115] transition-colors shrink-0 shadow-[0_0_15px_rgba(180,248,42,0.25)]"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
