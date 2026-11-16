import { Quote } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

interface TestimonialsCardsProps {
  tag: string;
  title: string;
  description?: string;
  testimonials: TestimonialItem[];
  titleGradient?: boolean;
  cardAnimation?: "slide-up" | "rotate-scale";
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

export default function TestimonialsCards({
  tag,
  title,
  description,
  testimonials,
  titleGradient,
  cardAnimation = "slide-up",
  textAnimation,
}: TestimonialsCardsProps) {
  return (
    <section aria-label="Client Testimonials section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto">
          <AppearOnScroll variant="fade">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          </AppearOnScroll>

          {titleGradient ? (
            <GradientWordReveal
              text={title}
              variant={textAnimation}
              tag="h2"
              className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
            />
          ) : (
            <WordByWordReveal
              text={title}
              variant={textAnimation}
              tag="h2"
              className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
            />
          )}

          {description && (
            <WordByWordReveal
              text={description}
              variant={textAnimation}
              tag="p"
              className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
            />
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6 mx-auto">
          {testimonials.map((item, index) => (
            <AppearOnScroll key={item.author} variant={cardAnimation} delay={index * 0.08} className="h-full">
              <div className="flex flex-col justify-between h-full p-6 md:p-8 card rounded gap-6">
                <div className="flex flex-col gap-4">
                  <Quote className="size-8 text-primary opacity-80" />
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex flex-col pt-4 border-t border-border">
                  <p className="text-base font-semibold leading-snug">{item.author}</p>
                  <p className="text-sm text-foreground/70">
                    {item.role} · <span className="text-foreground/90 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
