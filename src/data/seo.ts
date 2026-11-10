// Metadatos SEO de las páginas principales del sitio.
// Se reutilizan para construir títulos y descripciones consistentes.
export const seo = {
  home: {
    title: 'Saxofonista para eventos en Chile | SaxEventos',
    description:
      'SaxEventos, también conocido como Saxo Eventos, ofrece saxofón en vivo para matrimonios, bodas, celebraciones, empresas y eventos en todo Chile. Repertorio personalizado y una experiencia musical memorable.',
  },
  servicios: {
    title: 'Servicios de saxofón en vivo para eventos | SaxEventos',
    description: 'Conoce servicios de saxofón en vivo para bodas, cócteles, cenas, cumpleaños, eventos empresariales y celebraciones en todo Chile. Cotiza tu fecha.',
  },
  sobreMi: {
    title: 'Moisés Larenas, saxofonista para eventos | SaxEventos',
    description: 'Conoce a Moisés Larenas, saxofonista profesional que crea experiencias musicales cercanas para matrimonios, celebraciones y eventos en todo Chile.',
  },
  contacto: {
    title: 'Contacto y cotizaciones de saxofón | SaxEventos',
    description: 'Solicita disponibilidad y cotiza saxofón en vivo para tu matrimonio, boda, celebración o evento empresarial. Cuéntanos tu fecha y ciudad.',
  },
  galeria: {
    title: 'Galería de saxofón en vivo | SaxEventos',
    description: 'Revisa fotografías de presentaciones de saxofón en vivo en matrimonios, celebraciones, ceremonias y eventos de SaxEventos en Chile.',
  },
  faq: {
    title: 'Preguntas frecuentes sobre saxofón | SaxEventos',
    description: 'Resuelve tus dudas sobre reservas, duración, repertorio, disponibilidad y presentaciones de saxofón en vivo para matrimonios y eventos.',
  },
  terminos: {
    title: 'Términos y condiciones | SaxEventos',
    description: 'Revisa los términos y condiciones aplicables a la contratación de servicios de saxofón en vivo de SaxEventos.',
  },
  repertorio: {
    title: 'Repertorio musical para eventos | SaxEventos',
    description: 'Explora canciones románticas, bailables y de bossa nova para ambientar matrimonios, celebraciones y eventos con saxofón en vivo.',
  },
} as const;

export type SEOPage = keyof typeof seo;
