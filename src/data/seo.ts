// Metadatos de las páginas.
export const seo = {
  home: {
    title: 'SaxEventos | Saxofonista para matrimonios y eventos',
    description: 'Música de saxofón en vivo para matrimonios, celebraciones y eventos en Chile.',
  },
  servicios: {
    title: 'Servicios de saxofón para eventos | SaxEventos',
    description: 'Descubre experiencias de saxofón en vivo para matrimonios, celebraciones y eventos de empresa en Chile.',
  },
  sobreMi: {
    title: 'Sobre mí | SaxEventos',
    description: 'Conoce a Moisés Larenas, saxofonista para matrimonios, celebraciones y eventos en Chile.',
  },
  contacto: {
    title: 'Contacto | SaxEventos',
    description: 'Contacta a SaxEventos y cotiza música de saxofón en vivo para tu matrimonio, celebración o evento en Chile.',
  },
  galeria: {
    title: 'Galería | SaxEventos',
    description: 'Mira fotografías de presentaciones de saxofón en vivo en matrimonios, celebraciones y eventos de SaxEventos.',
  },
  faq: {
    title: 'Preguntas frecuentes | SaxEventos',
    description: 'Resuelve tus dudas sobre reservas, repertorio y presentaciones de saxofón en vivo con SaxEventos.',
  },
  terminos: {
    title: 'Términos y condiciones | SaxEventos',
    description: 'Consulta los términos y condiciones de SaxEventos.',
  },  repertorio: {
    title: 'Repertorio Musical | SaxEventos',
    description: 'Explora el repertorio musical de SaxEventos para ambientar matrimonios, celebraciones y eventos en Chile.',
  }
} as const;

export type SEOPage = keyof typeof seo;
