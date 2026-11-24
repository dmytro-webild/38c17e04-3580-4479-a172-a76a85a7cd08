import HeroToolRing from "@/components/sections/hero/HeroToolRing";
import AboutTextWave from "@/components/sections/about/AboutTextWave";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesStatCards from "@/components/sections/features/FeaturesStatCards";
import PricingLayeredEnterprise from "@/components/sections/pricing/PricingLayeredEnterprise";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import ProjectRowsPreview from "@/components/animation/ProjectRowsPreview";
import ClientCinematicSlider from "@/components/animation/ClientCinematicSlider";
import TestimonialsCards from "@/components/sections/testimonials/TestimonialsCards";
import FaqSection from "@/components/sections/faq/FaqSection";
import LightRaysCornerBackground from "@/components/backgrounds/LightRaysCornerBackground";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import { Code, Cpu, Database, Layers, Rocket, Server, Shield, ShieldCheck, Smartphone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <LightRaysCornerBackground className="absolute -scale-x-100" />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroToolRing" data-webild-section-id="HeroToolRing-1" data-section="hero" className="relative isolate">
        <HeroToolRing
          title="Software Engineering"
          titleMuted="for Visionaries & Startups."
          description="Veloce Labs is a software engineering firm specializing in customized mobile & web apps, cybersecurity, CRM, PLM, and ERP systems. We launch our own startups and help ambitious founders build scalable SaaS platforms."
          detail={{
            title: "Engineering Focus",
            description: "Custom SaaS, Mobile Apps & Enterprise Systems"
          }}
          stat={{
            value: 100,
            label: "Systems & Apps Engineered"
          }}
          primaryButton={{
            text: "Start Your Project",
            href: "https://wa.me/21650564964"
          }}
          secondaryButton={{
            text: "Explore Projects",
            href: "#projects"
          }}
          items={[
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/chatgpt.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/gmail.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/zapier.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/notion.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/claude.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/slack.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/hubspot.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/make.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/shopify.svg"
            }
          ]}
        />
      </div>

      {/* About Section */}
      <div id="about" data-webild-section="AboutTextWave" data-webild-section-id="AboutTextWave-1" data-section="about">
        <AboutTextWave
          title="At Veloce Labs, we build high-performance software systems—from tailored ERP, CRM, and PLM architectures to robust cybersecurity platforms. We launch our own startups and partner with founders to create scalable SaaS products."
          primaryButton={{
            text: "Start Your Project",
            href: "https://wa.me/21650564964"
          }}
          secondaryButton={{
            text: "Our Services",
            href: "#services"
          }}
        />
      </div>

      {/* Services Section */}
      <div id="services" data-webild-section="FeaturesBento" data-webild-section-id="FeaturesBento-1" data-section="services">
        <FeaturesBento
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Engineering Capabilities"
          title="Custom apps, enterprise systems & SaaS."
          primaryButton={{
            text: "Get in Touch",
            href: "https://wa.me/21650564964"
          }}
          secondaryButton={{
            text: "See Pricing",
            href: "#pricing"
          }}
          features={[
            {
              bentoComponent: "orbiting-icons",
              centerIcon: Code,
              orbitIcons: [
                Smartphone,
                Shield,
                Database,
                Server
              ],
              title: "Customized Apps & Web Apps",
              description: "High-performance frontend and backend engineering tailored for mobile devices and cloud platforms."
            },
            {
              bentoComponent: "tilted-stack-cards",
              stackCards: [
                {
                  icon: Shield,
                  title: "Cyber Security",
                  subtitle: "Zero-Trust Protocol",
                  detail: "Secured"
                },
                {
                  icon: Database,
                  title: "ERP, CRM & PLM",
                  subtitle: "Custom Enterprise Stack",
                  detail: "Integrated"
                },
                {
                  icon: Layers,
                  title: "SaaS & App Studio",
                  subtitle: "Proprietary & Client SaaS",
                  detail: "Active"
                }
              ],
              title: "Enterprise Core & Cyber Security",
              description: "Custom ERP, CRM, PLM systems and military-grade cybersecurity architectures for complex operations."
            },
            {
              bentoComponent: "chat-marquee",
              aiIcon: Cpu,
              userIcon: Code,
              exchanges: [
                {
                  userMessage: "Architect custom ERP & CRM for multi-site operations",
                  aiResponse: "Designed modular ERP backend with synchronized database and access roles."
                },
                {
                  userMessage: "Audit and fortify platform cybersecurity",
                  aiResponse: "Zero-trust architecture and penetration testing complete."
                },
                {
                  userMessage: "Build MVP for new client SaaS idea",
                  aiResponse: "Scalable SaaS boilerplate deployed with subscription billing and cloud backend."
                }
              ],
              placeholder: "Ask about custom software architecture...",
              title: "In-House Startups & Client SaaS",
              description: "We develop our own tech startups while helping client founders turn software concepts into market-ready SaaS."
            }
          ]}
        />
      </div>

      {/* Results / Impact Section */}
      <div id="results" data-webild-section="FeaturesStatCards" data-webild-section-id="FeaturesStatCards-1" data-section="results">
        <FeaturesStatCards
          titleGradient
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Track Record"
          title="Engineered for speed, security, and scale."
          features={[
            {
              icon: Cpu,
              stat: {
                value: 6,
                suffix: " Core"
              },
              title: "Specialties: Custom Apps, Web Apps, Cyber Security, CRM, PLM & ERP"
            },
            {
              icon: ShieldCheck,
              stat: {
                value: 100,
                suffix: "%"
              },
              title: "Tailored & Secure Enterprise Architecture"
            },
            {
              icon: Rocket,
              stat: {
                value: 24,
                suffix: "/7"
              },
              title: "In-House Startups & Client SaaS Operations"
            }
          ]}
        />
      </div>

      {/* Projects Section */}
      <div id="projects" data-webild-section="Projects" data-webild-section-id="Projects-1" data-section="projects" className="py-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto">
            <AppearOnScroll variant="fade">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>Our Projects</p>
              </div>
            </AppearOnScroll>

            <GradientWordReveal
              text="Featured Software & System Launches"
              variant="slide-up"
              tag="h2"
              className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
            />
          </div>

          <ProjectRowsPreview
            headers={["Project Name", "Category", "Year", "Services"]}
            items={[
              {
                title: "Veloce ERP & PLM Suite",
                location: "Enterprise Core",
                year: "2026",
                services: "ERP, CRM & PLM",
                imageSrc: "https://images.pexels.com/photos/2183773/pexels-photo-2183773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "Fortress Cyber Guard",
                location: "Cyber Security",
                year: "2025",
                services: "Zero-Trust & Audit",
                imageSrc: "https://images.pexels.com/photos/16323454/pexels-photo-16323454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "Apex Enterprise CRM",
                location: "Custom Web App",
                year: "2025",
                services: "CRM & Cloud APIs",
                imageSrc: "https://images.pexels.com/photos/3753759/pexels-photo-3753759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "ScaleStack SaaS Platform",
                location: "Startup Studio",
                year: "2024",
                services: "SaaS Architecture",
                imageSrc: "https://images.pexels.com/photos/34225012/pexels-photo-34225012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "Pulse Health App",
                location: "Customized App",
                year: "2024",
                services: "iOS & Android Build",
                imageSrc: "https://images.pexels.com/photos/29581806/pexels-photo-29581806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>

      {/* Clients Section */}
      <div id="clients" data-webild-section="Clients" data-webild-section-id="Clients-1" data-section="clients">
        <ClientCinematicSlider />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-webild-section="TestimonialsCards" data-webild-section-id="TestimonialsCards-1" data-section="testimonials">
        <TestimonialsCards
          titleGradient
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Client Testimonials"
          title="What our partners say about Veloce Labs."
          description="Direct feedback from enterprise executives and SaaS founders who built their applications and core platforms with us."
          testimonials={[
            {
              quote: "Veloce Labs delivered a custom ERP and CRM system that transformed our multi-site operations. Their software engineering speed and attention to security are outstanding.",
              author: "Marcus Vance",
              role: "Chief Operating Officer",
              company: "MedVance Tech"
            },
            {
              quote: "Moheb Awichewi and the Veloce Labs team helped us build and launch our SaaS platform from scratch. They understand both tech architecture and startup strategy.",
              author: "Sarah Jenkins",
              role: "Co-Founder & CEO",
              company: "ScaleStack"
            },
            {
              quote: "Their cybersecurity audit and custom web application development gave our financial software platform military-grade security and flawless scale.",
              author: "David Alvi",
              role: "Head of Infrastructure",
              company: "FinSecure Global"
            }
          ]}
        />
      </div>

      {/* Pricing Section */}
      <div id="pricing" data-webild-section="PricingLayeredEnterprise" data-webild-section-id="PricingLayeredEnterprise-1" data-section="pricing">
        <PricingLayeredEnterprise
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Pricing Packages"
          title="Transparent engineering plans for startups & enterprises."
          plans={[
            {
              tag: "Starter MVP",
              price: "1 000 TND",
              description: "Ideal for early-stage founders and quick app validation.",
              primaryButton: {
                text: "Get Started",
                href: "https://wa.me/21650564964"
              },
              features: [
                "Custom web or mobile app MVP build",
                "Core frontend & database architecture",
                "API setup & user authentication",
                "Rapid delivery in 2-3 weeks",
                "14 days post-launch support"
              ]
            },
            {
              tag: "Pro SaaS & App",
              price: "Customized",
              description: "Full-scale custom web/mobile apps & SaaS platforms.",
              primaryButton: {
                text: "Get Started",
                href: "https://wa.me/21650564964"
              },
              features: [
                "Tailored full-stack SaaS or web/mobile app",
                "Custom API integrations & microservices",
                "Payment, subscription & analytics stack",
                "Scalable cloud architecture & DevOps",
                "30 days dedicated engineering support"
              ]
            },
            {
              tag: "Enterprise System",
              price: "Customized",
              description: "Custom ERP, CRM, PLM & Cyber Security ecosystems.",
              primaryButton: {
                text: "Get Started",
                href: "https://wa.me/21650564964"
              },
              features: [
                "Customized ERP, CRM & PLM development",
                "Zero-trust Cybersecurity implementation",
                "Legacy data migration & enterprise API hub",
                "Dedicated engineering lead & SLA",
                "Continuous updates, monitoring & security"
              ]
            }
          ]}
          enterprise={{
            tag: "Custom Partnership",
            title: "Co-Building & Startup Studio",
            description: "Looking to co-build a venture or launch a breakthrough SaaS with Veloce Labs? We partner with founders and enterprise innovators.",
            primaryButton: {
              text: "Talk to Founder",
              href: "https://wa.me/21650564964"
            }
          }}
        />
      </div>

      {/* Team / Leadership Section */}
      <div id="team" data-webild-section="TeamOverlayCards" data-webild-section-id="TeamOverlayCards-1" data-section="team">
        <TeamOverlayCards
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Leadership"
          title="Led by software engineering visionaries."
          members={[
            {
              name: "Moheb Awichewi",
              role: "CEO & Founder",
              description: "Founder and Lead Architect at Veloce Labs. Moheb leads software engineering across customized web and mobile applications, startup incubation, cybersecurity frameworks, and enterprise ERP, CRM, and PLM architectures."
            }
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" data-webild-section="FaqSection" data-webild-section-id="FaqSection-1" data-section="faq">
        <FaqSection />
      </div>

      {/* Contact Section */}
      <div id="contact" data-webild-section="ContactCenter" data-webild-section-id="ContactCenter-1" data-section="contact">
        <ContactCenter
          titleGradient
          buttonStagger
          wideContent
          textAnimation="slide-up"
          tag="Get Started"
          title="Ready to build your app or enterprise system?"
          description="Reach out to Moheb Awichewi and the Veloce Labs team to discuss your customized app, SaaS startup, or enterprise ERP/CRM/PLM requirements."
          address="Centre Bourguiba, Sfax, Regus"
          inputPlaceholder="Enter your work email"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
}
