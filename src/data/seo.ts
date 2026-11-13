// Metadatos SEO de las páginas principales del sitio.
// Se reutilizan para construir títulos y descripciones consistentes.
export const seo = {
  home: {
    title: 'Saxofonista para eventos en Chile | SaxEventos',
    description:
      'Saxofón en vivo para matrimonios, bodas, celebraciones y empresas en todo Chile. SaxEventos ofrece repertorio personalizado y una experiencia musical memorable.',
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
    description: 'Solicita disponibilidad y cotiza saxofón en vivo para tu matrimonio, boda, celebración o evento empresarial. Cuéntanos tu fecha, ciudad y horario.',
  },
  galeria: {
    title: 'Galería de saxofón en vivo | SaxEventos',
    description: 'Revisa fotografías de presentaciones de saxofón en vivo en matrimonios, celebraciones, ceremonias y eventos de SaxEventos en todo Chile.',
  },
  faq: {
    title: 'Preguntas frecuentes sobre saxofón | SaxEventos',
    description: 'Resuelve tus dudas sobre reservas, duración, repertorio, disponibilidad y presentaciones de saxofón en vivo para matrimonios y eventos en Chile.',
  },
  terminos: {
    title: 'Términos y condiciones | SaxEventos',
    description: 'Revisa los términos y condiciones de SaxEventos para contratar servicios de saxofón en vivo en matrimonios, celebraciones y eventos en Chile.',
  },
  repertorio: {
    title: 'Repertorio musical para eventos | SaxEventos',
    description: 'Explora canciones románticas, bailables y de bossa nova para ambientar matrimonios, celebraciones y eventos con saxofón en vivo en Chile.',
  },
} as const;

export type SEOPage = keyof typeof seo;
