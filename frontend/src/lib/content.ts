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
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwZXZlbnQlMjBzdGFnZSUyMGxpZ2h0cyUyMGNyb3dkfGVufDB8fHx8MTc4ODgwNDIzMnww&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1708577907839-1240466aee53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxicmFuZGVkJTIwbWVyY2hhbmRpc2UlMjB0c2hpcnQlMjBwcmludGluZ3xlbnwwfHx8fDE3ODg4MDQyMzJ8MA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwZXZlbnQlMjBzdGFnZSUyMGxpZ2h0cyUyMGNyb3dkfGVufDB8fHx8MTc4ODgwNDIzMnww&ixlib=rb-4.1.0&q=85",
    quoteValue: "Logística y Montaje",
  },
];

export interface Project {
  title: string;
  category: string;
  client: string;
  result: string;
  desc: string;
  image: string;
  accent: Accent;
}

export const PROJECTS: Project[] = [
  {
    title: "Festival de Innovación Tech",
    category: "Eventos",
    client: "Corporación Digital Andina",
    result: "+4,500 asistentes",
    desc: "Tres escenarios, estrados, luces robóticas y streaming para 12 países.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwZXZlbnQlMjBzdGFnZSUyMGxpZ2h0cyUyMGNyb3dkfGVufDB8fHx8MTc4ODgwNDIzMnww&ixlib=rb-4.1.0&q=85",
    accent: "yellow",
  },
  {
    title: "Campaña “Fuerza & Origen”",
    category: "Audiovisual",
    client: "Minera del Sur",
    result: "Video institucional premiado",
    desc: "Rodaje cinematográfico con tomas de drone, entrevistas y motion graphics.",
    image:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBjcmV3JTIwZmlsbWluZ3xlbnwwfHx8fDE3ODg4MDQyMzJ8MA&ixlib=rb-4.1.0&q=85",
    accent: "crimson",
  },
  {
    title: "Kits de Bienvenida “Eco-Impacto”",
    category: "Merchandising",
    client: "Financiera Futuro",
    result: "12,000 unidades despachadas",
    desc: "Mochilas, tomatodos térmicos y libretas con packaging serigrafiado.",
    image:
      "https://images.unsplash.com/photo-1686933966456-b4d38fbdb124?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxwcm9tb3Rpb25hbCUyMHByb2R1Y3RzJTIwYnJhbmRlZCUyMG11Z3MlMjB0b3RlJTIwYmFnc3xlbnwwfHx8fDE3ODg4MDQyNDJ8MA&ixlib=rb-4.1.0&q=85",
    accent: "sky",
  },
  {
    title: "Identidad & Memoria Anual",
    category: "Diseño",
    client: "Grupo Logístico Pacífico",
    result: "Manual de marca + 500 libros",
    desc: "Nueva arquitectura de marca con acabados premium y versión digital.",
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxvcmZmc2V0JTIwcHJpbnRpbmclMjBwcmVzcyUyMG1hY2hpbmUlMjBpbmt8ZW58MHx8fHwxNzg4ODA0MjQyfDA&ixlib=rb-4.1.0&q=85",
    accent: "yellow",
  },
  {
    title: "Convención & Aniversario 25",
    category: "Eventos",
    client: "Cadena Retail Perú",
    result: "Producción 360° en 4 ciudades",
    desc: "Gymkana corporativa, campeonato de integración y cena de gala.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwZXZlbnQlMjBzdGFnZSUyMGxpZ2h0cyUyMGNyb3dkfGVufDB8fHx8MTc4ODgwNDIzMnww&ixlib=rb-4.1.0&q=85",
    accent: "crimson",
  },
  {
    title: "Montaje Escénico & Domo AV",
    category: "Logística",
    client: "Cumbre de Sostenibilidad",
    result: "Estructura de 600 m²",
    desc: "Mobiliario a medida, microfonía digital y pantalla envolvente de 180°.",
    image:
      "https://images.unsplash.com/photo-1783979384797-7a5d2ad23fc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBzdGFnZSUyMHNldHVwfGVufDB8fHx8MTc4ODgwNDIzMnww&ixlib=rb-4.1.0&q=85",
    accent: "sky",
  },
];

export const CLIENTS = [
  "Grupo Andino",
  "Banca Futuro",
  "Retail Pacífico",
  "Minera del Sur",
  "TecnoTel",
  "Universidad Prisma",
  "Alimentos del Valle",
  "Moda Costa",
];

export const SECTORS = [
  "Consumo Masivo",
  "Banca y Finanzas",
  "Minería y Energía",
  "Retail y Moda",
  "Educación Superior",
  "Tecnología y Telecom",
];

export const CONTACT = {
  whatsapp: "+51 999 888 777",
  whatsappLink: "https://wa.me/51999888777",
  email: "hola@punchecreativo.pe",
  location: "Lima, Perú",
  hours: "Lun – Sáb · 9:00 a 19:00",
};
