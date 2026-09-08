import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#inicio", label: "Inicio", testid: "nav-link-inicio" },
  { href: "#nosotros", label: "Nosotros", testid: "nav-link-nosotros" },
  { href: "#servicios", label: "Servicios", testid: "nav-link-servicios" },
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
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-end px-4 sm:px-6 lg:justify-center">
        <nav className="hidden items-center gap-8 lg:flex">
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
