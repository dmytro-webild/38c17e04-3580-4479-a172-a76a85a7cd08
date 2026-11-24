import { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

type FooterColumn = {
  title: string;
  items: { label: string; href?: string; onClick?: () => void }[];
};

type FooterLink = {
  label: string;
  href?: string;
  onClick?: () => void;
};

const FooterLinkItem = ({ label, href, onClick }: FooterLink) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-base text-[#a1a1aa] hover:text-[#B4F82A] transition-colors cursor-pointer"
    >
      {label}
    </a>
  );
};

const FooterBottomLink = ({ label, href, onClick }: FooterLink) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-[#a1a1aa] hover:text-[#B4F82A] transition-colors cursor-pointer"
    >
      {label}
    </a>
  );
};

const FooterSimpleReveal = ({
  brand,
  address,
  columns,
  copyright,
  links,
}: {
  brand: string;
  address?: string;
  columns: FooterColumn[];
  copyright: string;
  links: FooterLink[];
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section
      className="relative z-0 w-full mt-20"
      style={{
        height: footerHeight ? `${footerHeight}px` : "auto",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className="fixed bottom-0 w-full"
        style={{ height: footerHeight ? `${footerHeight}px` : "auto" }}
      >
        <footer
          data-section="footer"
          ref={footerRef}
          aria-label="Site footer"
          className="w-full py-15 bg-[#101210] text-[#FFFFFF] border-t border-[#1B3D04]"
        >
          <div className="w-full max-w-6xl px-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start mb-10">
              <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-[#FFFFFF]">{brand}</h2>
                {address && (
                  <div className="flex items-center gap-1.5 text-sm text-[#a1a1aa]">
                    <MapPin className="w-4 h-4 shrink-0 text-[#B4F82A]" />
                    <span>{address}</span>
                  </div>
                )}
              </div>

              <div className="w-full md:w-fit flex flex-wrap gap-y-10 md:gap-12">
                {columns.map((column) => (
                  <div key={column.title} className="flex flex-col items-start gap-3">
                    <h3 className="text-sm font-mono text-[#7CC115] uppercase tracking-wider truncate">{column.title}</h3>
                    {column.items.map((item) => (
                      <FooterLinkItem key={item.label} label={item.label} href={item.href} onClick={item.onClick} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[#1B3D04]">
              <p className="text-sm text-[#a1a1aa]">{copyright}</p>
              <div className="flex items-center gap-3">
                {links.map((link) => (
                  <FooterBottomLink key={link.label} label={link.label} href={link.href} onClick={link.onClick} />
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterSimpleReveal;
