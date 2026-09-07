import { Spark } from "@/components/decor";

const ITEMS = [
  "Eventos corporativos & activaciones",
  "Producción audiovisual & drone",
  "Diseño editorial & branding",
  "Merchandising nacional & importado",
  "Logística integral & estrados",
  "Experiencias memorables con valor agregado",
];

export function MarqueeRibbon() {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex w-max shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-heading text-lg font-black uppercase tracking-wide md:text-xl ${
              i % 2 === 0 ? "text-paper" : "text-punche-yellow"
            }`}
          >
            {item}
          </span>
          <Spark className="h-5 w-5 shrink-0 text-crimson" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative -rotate-1 border-y-2 border-ink bg-ink py-4"
      data-testid="marquee-ribbon"
    >
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
