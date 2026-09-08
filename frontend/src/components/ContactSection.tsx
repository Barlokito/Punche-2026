import { useState } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { apiPost } from "@/lib/api";
import { CONTACT } from "@/lib/content";
import { Overline, Reveal } from "@/components/decor";

const SERVICE_OPTIONS = [
  "Eventos y Activaciones",
  "Audiovisual y Drone",
  "Merchandising",
  "Diseño e Impresión",
  "Logística y Montaje",
  "Paquete Integral 360°",
];

interface ContactInquiry {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  service_type: string;
  estimated_date: string | null;
  message: string;
  status: string;
  created_at: string;
}

const inputCls =
  "w-full border-2 border-ink bg-white px-4 py-3 text-sm outline-none transition-shadow placeholder:text-ink/40 focus:shadow-pop-sm md:text-base";

function ContactForm({ defaultService }: { defaultService: string | null }) {
  const [sent, setSent] = useState(false);

  const mutation = useMutation({
    mutationFn: (body: Record<string, string | null>) =>
      apiPost<ContactInquiry>("/contact", body),
    onSuccess: () => {
      setSent(true);
      toast.success("¡Punche recibido! Te contactamos en menos de 24 horas.");
    },
    onError: () => {
      toast.error("No pudimos enviar tu mensaje. Escríbenos por WhatsApp.");
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    mutation.mutate({
      full_name: String(data.get("full_name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service_type: String(data.get("service_type") ?? ""),
      estimated_date: String(data.get("estimated_date") ?? "") || null,
      message: String(data.get("message") ?? ""),
    });
  };

  if (sent) {
    return (
      <div
        data-testid="contact-success-panel"
        className="flex h-full min-h-[420px] flex-col items-center justify-center border-2 border-ink bg-punche-yellow p-10 text-center text-ink shadow-pop-lg"
      >
        <span className="flex h-16 w-16 items-center justify-center border-2 border-ink bg-crimson text-white shadow-pop-sm">
          <Send className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-black uppercase tracking-tight md:text-3xl">
          ¡Mensaje enviado con punche!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70 md:text-base">
          Tu consulta quedó registrada. Nuestro equipo te escribirá en menos de 24 horas
          hábiles para armar tu propuesta.
        </p>
        <button
          type="button"
          data-testid="contact-send-another-button"
          onClick={() => setSent(false)}
          className="mt-8 border-2 border-ink bg-white px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide shadow-pop-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-pop"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      data-testid="contact-form"
      className="border-2 border-ink bg-white p-6 text-ink shadow-pop-lg sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Nombre / Empresa *
          </span>
          <input
            name="full_name"
            required
            minLength={2}
            data-testid="contact-input-name"
            placeholder="María Pérez · ACME S.A.C."
            className={inputCls}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Correo electrónico *
          </span>
          <input
            name="email"
            type="email"
            required
            data-testid="contact-input-email"
            placeholder="maria@empresa.pe"
            className={inputCls}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Teléfono / WhatsApp *
          </span>
          <input
            name="phone"
            required
            minLength={6}
            data-testid="contact-input-phone"
            placeholder="+51 999 888 777"
            className={inputCls}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Servicio de interés *
          </span>
          <select
            name="service_type"
            required
            defaultValue={defaultService ?? ""}
            data-testid="contact-select-service"
            className={inputCls}
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Fecha estimada del evento / entrega
          </span>
          <input
            name="estimated_date"
            data-testid="contact-input-date"
            placeholder="Ej. 15 de setiembre 2026"
            className={inputCls}
          />
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Cuéntanos los detalles de tu proyecto *
          </span>
          <textarea
            name="message"
            required
            minLength={10}
            rows={4}
            data-testid="contact-input-message"
            placeholder="Queremos lanzar nuestro nuevo producto con una activación en..."
            className={`${inputCls} resize-none`}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={mutation.isPending}
        data-testid="contact-submit-button"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 border-2 border-ink bg-crimson px-7 py-4 font-heading text-base font-bold uppercase tracking-wide text-white shadow-pop transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-lg disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        {mutation.isPending ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}

export function ContactSection({ preselected }: { preselected: string | null }) {
  return (
    <section id="contacto" className="scroll-mt-24 bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <Overline className="text-punche-yellow">Contacto</Overline>
            <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              ¿Listo para meterle <span className="text-crimson">punche</span> a tu marca?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
              Cuéntanos tu proyecto y te devolvemos una propuesta con estrategia,
              creatividad y presupuesto claro. Sin vueltas.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp-button"
                className="inline-flex items-center gap-3 border-2 border-paper bg-punche-yellow px-6 py-4 font-heading text-base font-bold uppercase tracking-wide text-ink shadow-[5px_5px_0_0_#E62E4D] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp directo
              </a>
              <a
                href={CONTACT.landlineLink}
                data-testid="contact-landline-button"
                className="inline-flex items-center gap-3 border-2 border-paper bg-sky-pop px-6 py-4 font-heading text-base font-bold uppercase tracking-wide text-ink shadow-[5px_5px_0_0_#F5E62B] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                {CONTACT.landline}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-10 space-y-4" data-testid="contact-info-list">
              <li className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-paper bg-crimson">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT.email}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-paper bg-white text-ink">
                  <MessageCircle className="h-4 w-4" />
                </span>
                {CONTACT.whatsapp}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-paper bg-white text-ink">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT.landline}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-paper bg-sky-pop text-ink">
                  <MapPin className="h-4 w-4" />
                </span>
                {CONTACT.location}
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-paper bg-punche-yellow text-ink">
                  <Clock className="h-4 w-4" />
                </span>
                {CONTACT.hours}
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm key={preselected ?? "default"} defaultService={preselected} />
        </Reveal>
      </div>
    </section>
  );
}
