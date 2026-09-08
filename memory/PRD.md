# PRD — Punche Creativo (sitio web de agencia)

## Problem statement (original)
Publicista peruano con 10 años de trayectoria y su agencia creativa "Punche Creativo". Servicios: 1) Eventos (activaciones, corporativos, aniversarios, lanzamientos, gymkanas, campeonatos), 2) Audiovisual (videos institucionales/publicitarios, drone, fotografía), 3) Merchandising (nacional, importados, fabricación), 4) Diseño e impresión (logo, branding, revistas, agendas, manual de marca), 5) Logística (mobiliario, luces, sonido, estrados). Referencia de estructura: izango.com.pe, pero con sus colores y logo (pop-art: rojo, amarillo, celeste, negro). Enfoque: credibilidad, creatividad, eficacia, crecimiento; curiosidad estratégica; historias que impactan y experiencias inolvidables.

## User decisions (ask_human)
- Nombre de marca: "Punche Creativo" (como en el logo).
- Datos de contacto: de ejemplo por ahora (pendientes los reales).
- Fotos: stock profesional.
- Formulario de contacto: guardar en base de datos + confirmación en pantalla.
- Sección extra: clientes/marcas.
- Diseño: nivel Awwwards, pop-art/cómic, motion premium (framer-motion + lenis), hero cinético con reveal enmascarado.

## Personas
- Gerente de marketing / comunicaciones de empresa peruana que necesita producir un evento, campaña o material.
- Dueño de pyme que busca branding, merchandising o impresión.
- El dueño de la agencia (admin) que revisará consultas recibidas.

## Core requirements (static)
- One-page: Inicio, Nosotros (manifiesto), Servicios (5 pilares), Portafolio, Clientes, Contacto, Footer.
- Formulario de contacto persiste en MongoDB y confirma en pantalla.
- Estética pop-art del logo: halftone, bordes tinta, sombras duras, starbursts.

## Arquitectura
- Backend FastAPI: POST /api/contact (201, guarda consulta), GET /api/contact (lista). Modelos Pydantic `ContactInquiry`, colección `contact_inquiries` con índices (id único, created_at desc).
- Frontend Vite + React 19 + TS: páginas en `src/pages/Home.tsx`, componentes por sección en `src/components/`, datos en `src/lib/content.ts`, tipos espejo del API en ContactSection.
- Motion: `motion/react` (reveals, tilt 3D, parallax hero), `lenis` smooth scroll con anchors.

## Implementado (2026-09-07)
- Hero cinético con reveal línea por línea, tarjeta 3D con logo, stats.
- Marquee editorial infinito.
- Manifiesto numerado 01–04 (curiosidad, eficacia, impacto, crecimiento) sticky.
- Showcase interactivo de los 5 servicios (tabs + panel animado + "Cotizar" preselecciona el servicio en el formulario).
- Contacto: info + WhatsApp + formulario a MongoDB con toast y panel de éxito.
- Footer editorial con tipografía gigante outline.
- Verificado: curl POST/GET /api/contact (local y URL pública), 422 en body inválido, `yarn typecheck` limpio, flujo e2e en navegador.

## Cambios (2026-09-08, pedido del dueño)
- Header sin logo/texto ni botón "Hagamos Punche"; nav sin Portafolio.
- Hero sin badge "Casa creativa" ni foto de drone; "Ver portafolio" abre el Drive del cliente.
- Nosotros: overline solo "Nuestro ADN"; sin chips de pilares.
- Sección Portafolio interna ELIMINADA (componente PortfolioGrid borrado); testimonios ELIMINADOS.
- Clientes: collage de logos reales (clientes.webp adjunto).
- Fotos reales adjuntas en servicios: eventos.webp y merchandising.webp.
- Contacto real: email fernandoh@punchecreativo.pe (confirmar dominio: el dueño escribió sin TLD), móvil/WhatsApp +51 945 639 059, fijo 01 761 6464 (botón tel:), sin badge "24h".
- Redes: solo LinkedIn (linkedin.com/company/punche-creativo).

## Backlog
- P0: Datos de contacto reales (WhatsApp, email, redes), logos y fotos reales de clientes/proyectos.
- P1: Panel admin protegido para ver/gestionar consultas (GET /api/contact hoy es público).
- P1: Notificación por email al llegar una consulta (Resend).
- P2: Páginas de detalle por proyecto / case studies, blog, multi-idioma, SEO (meta OG por sección).
- P2: Video showreel real embebido en hero.

## Próximas tareas
1. Reemplazar datos de contacto y redes sociales con los reales.
2. Subir logos/fotos reales de clientes y proyectos.
3. Agregar auth + panel admin de consultas.
