import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import type { Accent } from "@/lib/content";
import { Overline, Reveal } from "@/components/decor";

const ACCENT_BG: Record<Accent, string> = {
  yellow: "bg-punche-yellow",
  crimson: "bg-crimson text-white",
  sky: "bg-sky-pop",
};

const ACCENT_SHADOW: Record<Accent, string> = {
  yellow: "shadow-pop-yellow",
  crimson: "shadow-pop-crimson",
  sky: "shadow-pop-sky",
};

export function ServicesShowcase({
  onQuote,
}: {
  onQuote: (serviceValue: string) => void;
}) {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section id="servicios" className="scroll-mt-24 border-y-2 border-ink bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Overline className="text-crimson">Lo que hacemos</Overline>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Cinco pilares, <span className="text-crimson">un solo golpe</span> de creatividad.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3" role="tablist" aria-label="Servicios">
            {SERVICES.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  data-testid={`service-tab-${s.id}`}
                  onClick={() => setActiveId(s.id)}
                  className={`group flex items-center justify-between border-2 border-ink px-5 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? `${ACCENT_BG[s.accent]} shadow-pop`
                      : "bg-paper hover:-translate-y-0.5 hover:bg-white hover:shadow-pop-sm"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-semibold tracking-[0.2em] ${isActive && s.accent === "crimson" ? "text-white/70" : "text-ink/50"}`}>
                      {s.num}
                    </span>
                    <span className="font-heading text-lg font-black uppercase tracking-tight md:text-xl">
                      {s.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-transform duration-200 ${isActive ? "rotate-45" : "group-hover:rotate-45"}`}
                  />
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              data-testid="service-panel"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="border-2 border-ink bg-paper p-6 shadow-pop-lg sm:p-8"
            >
              <div className="relative">
                <div className={`absolute -right-3 -top-3 h-full w-full border-2 border-ink ${ACCENT_BG[active.accent]}`} />
                <img
                  src={active.image}
                  alt={active.name}
                  loading="lazy"
                  className="relative h-56 w-full border-2 border-ink object-cover sm:h-64"
                />
                <span
                  className={`absolute -left-2 -top-4 -rotate-3 border-2 border-ink px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] shadow-pop-sm ${ACCENT_BG[active.accent]}`}
                >
                  {active.num} / 05
                </span>
              </div>

              <h3 className="mt-8 font-heading text-2xl font-black uppercase tracking-tight md:text-3xl">
                {active.name}
              </h3>
              <p className="mt-2 text-base text-ink/70 md:text-lg">{active.tagline}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {active.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-base">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-ink ${ACCENT_BG[active.accent]}`}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                data-testid={`service-quote-${active.id}`}
                onClick={() => onQuote(active.quoteValue)}
                className={`mt-8 inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-paper transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 ${ACCENT_SHADOW[active.accent]}`}
              >
                Cotizar este servicio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
