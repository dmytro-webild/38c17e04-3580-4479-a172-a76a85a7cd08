import { Outlet } from "react-router-dom";
import NavbarCentered from "@/components/navbars/NavbarCentered";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground">
      <header data-webild-section="Header">
        <NavbarCentered
          buttonStagger
          logo="VELOCE LABS"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Projects",
              href: "#projects"
            },
            {
              name: "Clients",
              href: "#clients"
            },
            {
              name: "Testimonials",
              href: "#testimonials"
            },
            {
              name: "Pricing",
              href: "#pricing"
            },
            {
              name: "Leadership",
              href: "#team"
            }
          ]}
          ctaButton={{
            text: "Get in Touch",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer">
        <FooterSimpleReveal
          brand="VELOCE LABS"
          address="Centre Bourguiba, Sfax, Regus"
          columns={[
            {
              title: "Solutions",
              items: [
                {
                  label: "Customized Apps",
                  href: "#services"
                },
                {
                  label: "Enterprise ERP, CRM & PLM",
                  href: "#services"
                },
                {
                  label: "Cyber Security",
                  href: "#services"
                },
                {
                  label: "SaaS & Startup Studio",
                  href: "#services"
                }
              ]
            },
            {
              title: "Portfolio",
              items: [
                {
                  label: "Projects",
                  href: "#projects"
                },
                {
                  label: "Clients",
                  href: "#clients"
                },
                {
                  label: "Testimonials",
                  href: "#testimonials"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Veloce Labs",
                  href: "#about"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                },
                {
                  label: "Leadership",
                  href: "#team"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Location",
              items: [
                {
                  label: "Centre Bourguiba, Sfax, Regus",
                  href: "#contact"
                }
              ]
            }
          ]}
          copyright="© 2026 Veloce Labs. All rights reserved."
          links={[
            {
              label: "Terms",
              href: "#"
            },
            {
              label: "Privacy",
              href: "#"
            }
          ]}
        />
      </footer>
    </div>
  );
}
