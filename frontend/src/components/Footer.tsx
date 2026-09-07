import { SiFacebook, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import { CONTACT, LOGO_URL } from "@/lib/content";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/punchecreativo", label: "Instagram", Icon: SiInstagram, testid: "footer-social-instagram" },
  { href: "https://www.facebook.com/punchecreativo", label: "Facebook", Icon: SiFacebook, testid: "footer-social-facebook" },
  { href: "https://www.tiktok.com/@punchecreativo", label: "TikTok", Icon: SiTiktok, testid: "footer-social-tiktok" },
  { href: "https://www.linkedin.com/company/punchecreativo", label: "LinkedIn", Icon: Linkedin, testid: "footer-social-linkedin" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-paper/20 bg-ink pb-10 pt-16 text-paper">
      <div className="halftone-light pointer-events-none absolute inset-x-0 top-0 h-24 opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-sm">
            <img
              src={LOGO_URL}
              alt="Punche Creativo"
              className="h-16 w-auto border-2 border-paper bg-white object-contain p-1.5"
            />
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              Casa creativa en Lima, Perú. Eventos, audiovisual, merchandising, diseño e
              impresión y logística integral. Historias que impactan y experiencias que
              nadie olvida.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ href, label, Icon, testid }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-testid={testid}
                  className="flex h-11 w-11 items-center justify-center border-2 border-paper bg-ink text-paper transition-colors duration-200 hover:bg-punche-yellow hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-punche-yellow">
              Mapa del sitio
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    data-testid={`footer-link-${n.label.toLowerCase()}`}
                    className="font-heading text-sm font-bold uppercase tracking-wide text-paper/70 transition-colors hover:text-crimson"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-punche-yellow">
              Hablemos
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.whatsapp}</li>
              <li>{CONTACT.location}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="text-stroke-paper mt-16 select-none whitespace-nowrap font-heading text-[13.5vw] font-black uppercase leading-none tracking-tight opacity-25 lg:text-[10.5rem]"
        >
          Punche Creativo
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-paper/15 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
            © 2026 Punche Creativo — Todos los derechos reservados
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
            Hecho con puño y creatividad en Lima
          </p>
        </div>
      </div>
    </footer>
  );
}
