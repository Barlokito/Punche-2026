import { Quote } from "lucide-react";
import { CLIENTS, SECTORS } from "@/lib/content";
import { Overline, Reveal } from "@/components/decor";

const TESTIMONIALS = [
  {
    quote:
      "Punche Creativo entendió la marca desde el día uno. El lanzamiento superó cada meta y el público sigue hablando del evento.",
    author: "Gerente de Marketing",
    company: "Retail Pacífico",
  },
  {
    quote:
      "Su producción audiovisual le dio a nuestra campaña un nivel cinematográfico. Cumplieron plazos, presupuesto y calidad.",
    author: "Jefa de Comunicaciones",
    company: "Minera del Sur",
  },
];

const TILE_STYLES = [
  "bg-white rotate-[-1deg]",
  "bg-punche-yellow rotate-[1deg]",
  "bg-sky-pop rotate-[-0.5deg]",
  "bg-white rotate-[0.8deg]",
  "bg-crimson text-white rotate-[-1.2deg]",
  "bg-white rotate-[0.5deg]",
  "bg-punche-yellow rotate-[-0.8deg]",
  "bg-sky-pop rotate-[1.1deg]",
];

export function ClientsWall() {
  return (
    <section id="clientes" className="scroll-mt-24 border-y-2 border-ink bg-paper py-24 lg:py-32">
      <div className="halftone pointer-events-none absolute" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Overline className="text-crimson">Clientes & confianza</Overline>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Marcas que ya sintieron <span className="text-crimson">el punche.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" data-testid="clients-grid">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div
                data-testid={`client-tile-${i}`}
                className={`flex h-24 items-center justify-center border-2 border-ink px-4 text-center shadow-pop-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-pop ${TILE_STYLES[i % TILE_STYLES.length]}`}
              >
                <span className="font-heading text-sm font-black uppercase leading-tight tracking-tight md:text-base">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2" data-testid="clients-sectors">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="border-2 border-ink bg-white px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.company} delay={i * 0.1}>
              <figure
                data-testid={`testimonial-${i}`}
                className={`border-2 border-ink p-7 shadow-pop ${i === 0 ? "rotate-[-0.6deg] bg-white" : "rotate-[0.6deg] bg-ink text-paper"}`}
              >
                <Quote className={`h-8 w-8 ${i === 0 ? "text-crimson" : "text-punche-yellow"}`} />
                <blockquote className="mt-4 text-base leading-relaxed md:text-lg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
                  {t.author} — {t.company}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
