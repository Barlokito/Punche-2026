import { CLIENTS_COLLAGE_URL } from "@/lib/content";
import { Overline, Reveal } from "@/components/decor";

export function ClientsWall() {
  return (
    <section id="clientes" className="scroll-mt-24 border-y-2 border-ink bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Overline className="text-crimson">Clientes & confianza</Overline>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Marcas que ya sintieron <span className="text-crimson">el punche.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            data-testid="clients-grid"
            className="mt-12 rotate-[0.4deg] border-2 border-ink bg-white p-3 shadow-pop-lg sm:p-5"
          >
            <img
              src={CLIENTS_COLLAGE_URL}
              alt="Logos de clientes de Punche Creativo"
              loading="lazy"
              className="w-full border-2 border-ink object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
