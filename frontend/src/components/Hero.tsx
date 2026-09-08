import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDownRight, Play } from "lucide-react";
import { DRIVE_URL, LOGO_URL } from "@/lib/content";
import { Spark, Starburst } from "@/components/decor";

function MaskedLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const STATS = [
  { value: "10+", label: "Años creando" },
  { value: "500+", label: "Eventos y campañas" },
  { value: "99%", label: "Clientes que repiten" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const halftoneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 140, damping: 18 });

  const onTilt = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-[76px]">
      <motion.div
        style={{ y: halftoneY }}
        className="halftone pointer-events-none absolute -top-24 right-[-10%] h-[540px] w-[540px] opacity-[0.10]"
      />
      <Spark className="pointer-events-none absolute left-[6%] top-32 h-10 w-10 rotate-12 text-punche-yellow" />
      <Spark className="pointer-events-none absolute bottom-24 left-[42%] hidden h-8 w-8 -rotate-12 text-sky-pop lg:block" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <h1 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <MaskedLine delay={0.15}>Le metemos</MaskedLine>
            <MaskedLine delay={0.3}>
              <span className="relative inline-block">
                <span className="relative z-10 inline-block -rotate-1 border-2 border-ink bg-crimson px-4 text-white shadow-pop">
                  punche
                </span>
                <Starburst className="absolute -right-12 -top-10 z-0 h-16 w-16 text-punche-yellow" />
              </span>
            </MaskedLine>
            <MaskedLine delay={0.45}>a tus ideas.</MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
          >
            Transformamos marcas e historias en experiencias memorables: activaciones,
            producción audiovisual, merchandising, diseño e impresión y logística integral.
            Estrategia, creatividad y eficacia — sin soluciones tibias.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              data-testid="hero-cta-quote"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-7 py-4 font-heading text-base font-bold uppercase tracking-wide text-paper shadow-pop-crimson transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Cotiza tu proyecto
              <ArrowDownRight className="h-5 w-5" />
            </a>
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-showreel"
              className="inline-flex items-center gap-2 border-2 border-ink bg-white px-7 py-4 font-heading text-base font-bold uppercase tracking-wide text-ink shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop"
            >
              <Play className="h-5 w-5 text-crimson" />
              Ver portafolio
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-12 flex flex-wrap gap-4"
            data-testid="hero-stats"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`border-2 border-ink px-5 py-3 shadow-pop-sm ${
                  i === 0 ? "bg-sky-pop" : i === 1 ? "bg-white" : "bg-punche-yellow"
                } ${i === 1 ? "-rotate-1" : i === 2 ? "rotate-1" : ""}`}
              >
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                  {s.label}
                </dt>
                <dd className="font-heading text-3xl font-black">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div style={{ y: cardY }} className="relative [perspective:1100px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative border-2 border-ink bg-white p-6 shadow-pop-lg"
              data-testid="hero-logo-card"
            >
              <div className="halftone absolute inset-x-0 top-0 h-16 opacity-[0.08]" />
              <img
                src={LOGO_URL}
                alt="Logo Punche Creativo — puño pop art"
                className="relative z-10 mx-auto w-full max-w-sm [transform:translateZ(46px)]"
              />
              <div className="relative z-10 mt-4 flex items-center justify-between border-t-2 border-ink pt-4 [transform:translateZ(30px)]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Est. Lima, Perú
                </p>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-crimson">
                  Creatividad con puño
                </p>
              </div>
            </motion.div>
          </motion.div>

          <Starburst className="animate-spin-slow absolute -right-8 -top-8 h-20 w-20 text-crimson" />
        </motion.div>
      </div>
    </section>
  );
}
