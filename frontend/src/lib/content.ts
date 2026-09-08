export const LOGO_URL =
  "https://customer-assets-39nsmqrw.emergentagent.net/job_a1659526-6998-49ad-a958-446bebbd5d38/artifacts/l3isjz1s_Logo%202020.webp";

export type Accent = "yellow" | "crimson" | "sky";

export interface Service {
  id: string;
  num: string;
  name: string;
  tagline: string;
  items: string[];
  accent: Accent;
  image: string;
  quoteValue: string;
}

export const SERVICES: Service[] = [
  {
    id: "eventos",
    num: "01",
    name: "Eventos & Activaciones",
    tagline: "Puestas en escena que hacen vibrar a tu público",
    items: [
      "Activaciones BTL & promocionales",
      "Eventos corporativos & galas",
      "Aniversarios de empresa",
      "Lanzamientos de producto",
      "Gymkanas & team building",
      "Campeonatos deportivos & eSports",
    ],
    accent: "yellow",
    image:
      "https://customer-assets-lqy194kg.emergentagent.net/job_punhe-creativo/artifacts/2srfxxd1_eventos.webp",
    quoteValue: "Eventos y Activaciones",
  },
  {
    id: "audiovisual",
    num: "02",
    name: "Producción Audiovisual",
    tagline: "Narrativa cinematográfica con equipo de última generación",
    items: [
      "Videos institucionales & corporativos",
      "Spots publicitarios (TV & digital)",
      "Tomas aéreas con drone 4K",
      "Fotografía comercial & de producto",
      "Cobertura en vivo (streaming)",
      "Postproducción & motion graphics",
    ],
    accent: "crimson",
    image:
      "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBjcmV3JTIwZmlsbWluZ3xlbnwwfHx8fDE3ODg4MDQyMzJ8MA&ixlib=rb-4.1.0&q=85",
    quoteValue: "Audiovisual y Drone",
  },
  {
    id: "merchandising",
    num: "03",
    name: "Merchandising",
    tagline: "Productos que tu cliente realmente quiere conservar",
    items: [
      "Merchandising nacional personalizado",
      "Artículos importados exclusivos",
      "Fabricación a medida (textil & eco)",
      "Kits de onboarding & welcome packs",
      "Packaging creativo & unboxing",
      "Control de calidad y despacho masivo",
    ],
    accent: "sky",
    image:
      "https://customer-assets-lqy194kg.emergentagent.net/job_punhe-creativo/artifacts/l9npxgol_merchandising.webp",
    quoteValue: "Merchandising",
  },
  {
    id: "diseno",
    num: "04",
    name: "Diseño e Impresión",
    tagline: "Identidad visual contundente en digital y papel",
    items: [
      "Logotipos & sistemas de branding",
      "Manuales de marca & lineamientos",
      "Revistas, catálogos & memorias",
      "Agendas corporativas & cuadernos",
      "Material POP & gran formato",
      "Impresión offset y digital HD",
    ],
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1777751006387-558bdf78a02e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxncmFwaGljJTIwZGVzaWduJTIwYnJhbmRpbmclMjBzdHVkaW8lMjBwcmludHxlbnwwfHx8fDE3ODg4MDQyMzJ8MA&ixlib=rb-4.1.0&q=85",
    quoteValue: "Diseño e Impresión",
  },
  {
    id: "logistica",
    num: "05",
    name: "Logística & Montaje",
    tagline: "Infraestructura técnica impecable donde nada falla",
    items: [
      "Alquiler de mobiliario lounge y ejecutivo",
      "Sistemas de luces inteligentes",
      "Sonido profesional line array",
      "Estrados, toldos y estructuras truss",
      "Pantallas LED gigantes & proyección",
      "Transporte, montaje y seguridad",
    ],
    accent: "crimson",
    image:
      "https://customer-assets-lqy194kg.emergentagent.net/job_punhe-creativo/artifacts/657h8uhs_ACTIVACIONES-1536x1152.jpg",
    quoteValue: "Logística y Montaje",
  },
];

export const CLIENTS_COLLAGE_URL =
  "https://customer-assets-lqy194kg.emergentagent.net/job_punhe-creativo/artifacts/1tmznvzv_clientes.webp";

export const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1_0HmxVGS4JcQFfd0tW3VneQEEZU6RPYo";

export const SECTORS = [
  "Consumo Masivo",
  "Banca y Finanzas",
  "Minería y Energía",
  "Retail y Moda",
  "Educación Superior",
  "Tecnología y Telecom",
];

export const CONTACT = {
  whatsapp: "+51 945 639 059",
  whatsappLink: "https://wa.me/51945639059",
  landline: "01 761 6464",
  landlineLink: "tel:+5117616464",
  email: "fernandoh@punchecreativo.pe",
  location: "Lima, Perú",
  hours: "Lun – Sáb · 9:00 a 19:00",
};
