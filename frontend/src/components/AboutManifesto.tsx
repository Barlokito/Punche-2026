import { Eye, Gauge, HeartHandshake, TrendingUp } from "lucide-react";
import { Overline, Reveal } from "@/components/decor";

const CHAPTERS = [
  {
    num: "01",
    title: "Curiosidad Estratégica",
    desc: "Preguntamos lo que otros obvian para hallar el ángulo creativo que conecta con tu audiencia real.",
    icon: Eye,
    bg: "bg-punche-yellow",
  },
  {
    num: "02",
    title: "Eficacia Comprobada",
    desc: "Creatividad sin resultados es solo adorno. Planificamos y ejecutamos con precisión para cumplir objetivos.",
    icon: Gauge,
    bg: "bg-sky-pop",
  },
  {
    num: "03",
    title: "Impacto Inolvidable",
    desc: "Diseñamos puestas en escena y narrativas que generan recordación y dejan huella a largo plazo.",
    icon: HeartHandshake,
    bg: "bg-crimson text-white",
  },
  {
    num: "04",
    title: "Crecimiento Continuo",
    desc: "Somos socios estratégicos de nuestros clientes: escalamos con ellos campaña tras campaña.",
    icon: TrendingUp,
    bg: "bg-white",
  },
];

export function AboutManifesto() {
  return (
    <section id="nosotros" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Overline className="text-crimson">Nuestro ADN</Overline>
            <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Una casa creativa con
              <span className="text-crimson"> credibilidad</span> y
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 top-2 -rotate-1 bg-punche-yellow" />
                <span className="relative">puño.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
              En Punche Creativo no creemos en soluciones tibias. Nos caracteriza la
              curiosidad insaciable que nos lleva a investigar, elegir y planificar la
              mejor estrategia, desplegando nuestras mejores ideas en cada proyecto.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
              Logramos que las historias impacten de verdad, dejando una experiencia
              inolvidable por el valor agregado que le brindamos a tu público.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <article
                data-testid={`manifesto-chapter-${c.num}`}
                className={`group flex gap-5 border-2 border-ink p-6 shadow-pop transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-pop-lg sm:p-8 ${c.bg} ${
                  i % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
                }`}
              >
                <span className="font-mono text-sm font-semibold tracking-[0.2em] opacity-60">
                  {c.num}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <c.icon className="h-6 w-6 shrink-0" />
                    <h3 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
                      {c.title}
                    </h3>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed md:text-base ${c.bg.includes("text-white") ? "text-white/85" : "text-ink/70"}`}>
                    {c.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
