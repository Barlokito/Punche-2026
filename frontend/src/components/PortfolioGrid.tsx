import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROJECTS } from "@/lib/content";
import type { Accent } from "@/lib/content";
import { Overline, Reveal } from "@/components/decor";

const FILTERS = ["Todos", "Eventos", "Audiovisual", "Merchandising", "Diseño", "Logística"];

const ACCENT_BADGE: Record<Accent, string> = {
  yellow: "bg-punche-yellow",
  crimson: "bg-crimson text-white",
  sky: "bg-sky-pop",
};

export function PortfolioGrid() {
  const [filter, setFilter] = useState("Todos");
  const visible = PROJECTS.filter((p) => filter === "Todos" || p.category === filter);

  return (
    <section id="portafolio" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Overline className="text-crimson">Portafolio</Overline>
              <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Golpes que <span className="text-crimson">sí conectaron.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60 md:text-base">
              Proyectos representativos de nuestra producción. Una muestra del impacto que
              logramos junto a cada marca.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5" role="group" aria-label="Filtros de portafolio">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                data-testid={`portfolio-filter-${f.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`border-2 border-ink px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                  filter === f
                    ? "bg-ink text-paper shadow-pop-crimson"
                    : "bg-white hover:-translate-y-0.5 hover:shadow-pop-sm"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                data-testid={`portfolio-card-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`group border-2 border-ink bg-white shadow-pop transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-pop-lg ${
                  i % 3 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="relative overflow-hidden border-b-2 border-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 -rotate-2 border-2 border-ink px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] shadow-pop-sm ${ACCENT_BADGE[p.accent]}`}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    {p.client}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-black uppercase leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
                  <p className="mt-4 inline-block border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
                    {p.result}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
