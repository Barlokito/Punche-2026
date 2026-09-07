import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Zap } from "lucide-react";
import { LOGO_URL } from "@/lib/content";

const LINKS = [
  { href: "#inicio", label: "Inicio", testid: "nav-link-inicio" },
  { href: "#nosotros", label: "Nosotros", testid: "nav-link-nosotros" },
  { href: "#servicios", label: "Servicios", testid: "nav-link-servicios" },
  { href: "#portafolio", label: "Portafolio", testid: "nav-link-portafolio" },
  { href: "#clientes", label: "Clientes", testid: "nav-link-clientes" },
  { href: "#contacto", label: "Contacto", testid: "nav-link-contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300 ${
        scrolled
          ? "border-ink/15 bg-paper/90 backdrop-blur-xl saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" data-testid="nav-brand-logo" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Punche Creativo"
            className="h-12 w-auto border-2 border-ink bg-white object-contain p-1 shadow-pop-sm"
          />
          <span className="hidden font-heading text-sm font-black uppercase leading-none tracking-tight sm:block">
            Punche
            <span className="block text-crimson">Creativo</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-crimson"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            data-testid="nav-cta-contact-button"
            className="hidden items-center gap-2 border-2 border-ink bg-crimson px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop sm:inline-flex"
          >
            <Zap className="h-4 w-4" />
            ¡Hagamos Punche!
          </a>
          <button
            type="button"
            data-testid="nav-mobile-menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink bg-punche-yellow text-ink shadow-pop-sm lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t-2 border-ink/10 bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`${l.testid}-mobile`}
                  onClick={() => setOpen(false)}
                  className="border-2 border-transparent px-3 py-3 font-heading text-base font-bold uppercase tracking-wide transition-colors hover:border-ink hover:bg-punche-yellow"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
