// Metadatos SEO de las páginas principales del sitio.
// Se reutilizan para construir títulos y descripciones consistentes.
export const seo = {
  home: {
    title: 'Saxofonista para matrimonios y eventos en todo Chile | SaxEventos',
    description: 'Música de saxofón en vivo para matrimonios, celebraciones y eventos en todo Chile.',
  },
  servicios: {
    title: 'Servicios de saxofón para eventos en todo Chile | SaxEventos',
    description: 'Descubre experiencias de saxofón en vivo para matrimonios, celebraciones y eventos de empresa en todo Chile.',
  },
  sobreMi: {
    title: 'Sobre mí | SaxEventos',
    description: 'Conoce a Moisés Larenas, saxofonista para matrimonios, celebraciones y eventos en todo Chile.',
  },
  contacto: {
    title: 'Contacto | SaxEventos',
    description: 'Contacta a SaxEventos y cotiza música de saxofón en vivo para tu matrimonio, celebración o evento en todo Chile.',
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
    description: 'Explora el repertorio musical de SaxEventos para ambientar matrimonios, celebraciones y eventos en todo Chile.',
  }
} as const;

export type SEOPage = keyof typeof seo;
