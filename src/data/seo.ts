// Metadatos de las páginas.
export const seo = {
  home: {
    title: 'SaxEventos | Saxofonista para matrimonios y eventos',
    description: 'Música de saxofón en vivo para matrimonios, celebraciones y eventos en Chile.',
  },
  servicios: {
    title: 'Servicios | SaxEventos',
    description: 'Conoce los servicios disponibles de SaxEventos.',
  },
  sobreMi: {
    title: 'Sobre mí | SaxEventos',
    description: 'Conoce más sobre Moisés y SaxEventos.',
  },
  contacto: {
    title: 'Contacto | SaxEventos',
    description: 'Contacta con SaxEventos para consultar por música en vivo para tu evento.',
  },
  galeria: {
    title: 'Galería | SaxEventos',
    description: 'Explora fotografías de presentaciones y eventos de SaxEventos.',
  },
  faq: {
    title: 'Preguntas frecuentes | SaxEventos',
    description: 'Encuentra respuestas a preguntas frecuentes sobre SaxEventos.',
  },
  privacidad: {
    title: 'Política de privacidad | SaxEventos',
    description: 'Información sobre la política de privacidad de SaxEventos.',
  },
  terminos: {
    title: 'Términos y condiciones | SaxEventos',
    description: 'Consulta los términos y condiciones de SaxEventos.',
  },
} as const;

export type SEOPage = keyof typeof seo;
