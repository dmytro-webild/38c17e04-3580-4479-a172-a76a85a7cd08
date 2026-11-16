"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";

const SLOTS = 8;
const MOBILE_SLOTS = 6;
const LOOP_DELAY = 1800;
const EASE = [0.87, 0, 0.13, 1] as const;
const INTRO_EASE = [0.16, 1, 0.3, 1] as const;
const INTRO_DELAYS = [0, 5, 2, 7, 4, 1, 6, 3].map((step) => step * 0.08);
const INTRO_DURATION = 1800;

interface ClientItem {
  name: string;
  logo?: string;
}

interface SlotState {
  clientIndex: number;
  mode: "text" | "logo";
}

interface LogoGridSwapProps {
  names?: string[];
  clients?: (string | ClientItem)[];
  cellClassName?: string;
}

const shuffle = (values: number[]) => {
  const result = values.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const DEFAULT_CLIENTS: ClientItem[] = [
  {
    name: "DataLine Services",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794866719552-zyimggke.jpg"
  },
  {
    name: "Chamsana",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794866719553-tiocgpo0.jpg"
  },
  {
    name: "Asel Mobile",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843807-s1vuun7j.webp"
  },
  {
    name: "Mabfem Engineering",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843806-a9big4co.png"
  },
  {
    name: "Webac",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843808-hn7i92db.png"
  },
  {
    name: "Colix",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794862161850-1kqy9xa2.jpg"
  },
  {
    name: "MA Tradition",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794868843807-0r036fna.jpg"
  },
  {
    name: "Crystal Clear Tech",
    logo: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794862161851-38yz2c2x.jpg"
  },
  { name: "MedVance Tech" },
  { name: "FinSecure" },
  { name: "ScaleStack" },
  { name: "Veloce Startups" }
];

const LogoGridSwap = ({ names, clients, cellClassName = "h-32 sm:h-36 md:h-40 rounded-xl" }: LogoGridSwapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const hasEntered = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduceMotion = useReducedMotion();
  const isShown = hasEntered || !!reduceMotion;
  const [isReady, setIsReady] = useState(false);

  const normalizedClients: ClientItem[] = useMemo(
    () =>
      (clients || names?.map((n) => ({ name: n })) || DEFAULT_CLIENTS).map((item) =>
        typeof item === "string" ? { name: item } : item
      ),
    [clients, names]
  );

  const [slots, setSlots] = useState<SlotState[]>(() =>
    normalizedClients.slice(0, SLOTS).map((_, index) => ({ clientIndex: index, mode: "text" }))
  );
  const slotsRef = useRef(slots);
  const poolRef = useRef<number[]>([]);
  const patternRef = useRef({ order: [] as number[], index: 0 });

  useEffect(() => {
    const initial: SlotState[] = normalizedClients.slice(0, SLOTS).map((_, index) => ({
      clientIndex: index,
      mode: "text"
    }));
    slotsRef.current = initial;
    setSlots(initial);
    poolRef.current = shuffle(normalizedClients.map((_, index) => index).slice(SLOTS));
    patternRef.current = { order: [], index: 0 };
  }, [normalizedClients]);

  useEffect(() => {
    if (!isShown) return;
    const timeout = setTimeout(() => setIsReady(true), reduceMotion ? 0 : INTRO_DURATION);
    return () => clearTimeout(timeout);
  }, [isShown, reduceMotion]);

  useEffect(() => {
    if (!isInView || !isReady) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      const visible = Math.min(slotsRef.current.length, window.matchMedia("(max-width: 991px)").matches ? MOBILE_SLOTS : SLOTS);
      const pattern = patternRef.current;
      if (pattern.order.length !== visible) {
        pattern.order = shuffle(Array.from({ length: visible }, (_, index) => index));
        pattern.index = 0;
      }
      const slotIndex = pattern.order[pattern.index % visible];
      pattern.index++;

      const nextSlots = slotsRef.current.slice();
      const currentSlot = nextSlots[slotIndex];
      const currentClient = normalizedClients[currentSlot.clientIndex];

      if (currentClient?.logo && currentSlot.mode === "text") {
        nextSlots[slotIndex] = {
          clientIndex: currentSlot.clientIndex,
          mode: "logo"
        };
      } else {
        if (poolRef.current.length > 0) {
          poolRef.current.push(currentSlot.clientIndex);
          const nextClientIndex = poolRef.current.shift()!;
          nextSlots[slotIndex] = {
            clientIndex: nextClientIndex,
            mode: "text"
          };
        } else {
          nextSlots[slotIndex] = {
            clientIndex: currentSlot.clientIndex,
            mode: currentSlot.mode === "text" && currentClient?.logo ? "logo" : "text"
          };
        }
      }

      slotsRef.current = nextSlots;
      setSlots(nextSlots);
    }, LOOP_DELAY);

    return () => clearInterval(interval);
  }, [isInView, isReady, normalizedClients]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
      {slots.map((slotState, slot) => {
        const client = normalizedClients[slotState.clientIndex];
        if (!client) return null;

        return (
          <motion.div
            key={slot}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 24 }}
            animate={isShown ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: INTRO_EASE, delay: INTRO_DELAYS[slot % INTRO_DELAYS.length] }}
            className={`relative flex items-center justify-center ${cellClassName} card border border-border/60 overflow-hidden perspective-[40em] ${
              slot >= MOBILE_SLOTS ? "max-lg:hidden" : ""
            }`}
          >
            <AnimatePresence initial={false} mode="wait">
              {isShown && (
                slotState.mode === "logo" && client.logo ? (
                  <motion.div
                    key={`${slotState.clientIndex}-logo`}
                    initial={{ y: "50%", rotateX: -90, opacity: 0 }}
                    animate={{
                      y: "0%",
                      rotateX: 0,
                      opacity: 1,
                      transition: { duration: 0.8, ease: EASE }
                    }}
                    exit={{ y: "-50%", rotateX: 90, opacity: 0, transition: { duration: 0.8, ease: EASE } }}
                    className="absolute inset-0 backface-hidden flex items-center justify-center p-3 select-none"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-16 md:max-h-20 w-auto max-w-[80%] object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                ) : (
                  <motion.span
                    key={`${slotState.clientIndex}-text`}
                    initial={{ y: "50%", rotateX: -90, opacity: 0 }}
                    animate={{
                      y: "0%",
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        ease: EASE,
                        delay: isReady ? 0.05 : INTRO_DELAYS[slot % INTRO_DELAYS.length] + 0.3
                      }
                    }}
                    exit={{ y: "-50%", rotateX: 90, opacity: 0, transition: { duration: 0.8, ease: EASE } }}
                    className="absolute backface-hidden text-lg md:text-xl 2xl:text-2xl font-bold leading-tight tracking-tight whitespace-nowrap text-foreground/90 px-3 text-center select-none"
                  >
                    {client.name}
                  </motion.span>
                )
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LogoGridSwap;
