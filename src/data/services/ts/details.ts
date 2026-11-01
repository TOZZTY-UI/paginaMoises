export type ServiceDetail = {
  intro: string;
  objective: string;
  deliverables: string[];
  process: string[];
  idealFor: string[];
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Contenido ampliado de cada servicio.
 * Puedes editar estos textos sin tocar las páginas ni los componentes.
 */
export const serviceDetails: Record<string, ServiceDetail> = {
  estrategia: {
    intro: 'Una dirección clara para convertir tus ideas en decisiones digitales que tengan sentido.',
    objective: 'Definir una estrategia práctica para que tu proyecto sepa qué comunicar, a quién hablarle y cómo avanzar.',
    deliverables: [
      'Análisis del proyecto y su contexto',
      'Definición de objetivos y público',
      'Mapa de oportunidades digitales',
      'Plan de acciones priorizadas',
    ],
    process: [
      'Reunión inicial para entender el proyecto',
      'Investigación y análisis de la situación actual',
      'Presentación de hallazgos y recomendaciones',
      'Entrega de una hoja de ruta accionable',
    ],
    idealFor: [
      'Proyectos que necesitan ordenar sus ideas',
      'Marcas que quieren empezar con una base sólida',
      'Negocios que buscan mejorar su presencia digital',
    ],
    ctaLabel: 'Hablar sobre mi proyecto',
    ctaHref: '/contacto',
  },

  diseno: {
    intro: 'Una identidad visual con personalidad para que tu marca se reconozca, se recuerde y se sienta coherente.',
    objective: 'Construir una imagen de marca que traduzca la esencia de tu proyecto en decisiones visuales claras y consistentes.',
    deliverables: [
      'Diseño de logotipo',
      'Paleta de colores y tipografías',
      'Manual de identidad corporativa',
      'Aplicaciones básicas de la marca',
    ],
    process: [
      'Descubrimiento de la marca y sus referencias',
      'Definición del concepto visual',
      'Presentación de propuestas de identidad',
      'Ajustes y entrega de los archivos finales',
    ],
    idealFor: [
      'Marcas nuevas que necesitan empezar desde cero',
      'Negocios que han crecido y necesitan ordenar su imagen',
      'Proyectos con una identidad que ya no los representa',
    ],
    ctaLabel: 'Crear mi identidad de marca',
    ctaHref: '/contacto',
  },

  desarrollo: {
    intro: 'Una web clara, rápida y preparada para que tu proyecto tenga un lugar propio en internet.',
    objective: 'Convertir la estrategia y la identidad de tu marca en una experiencia web útil, responsive y fácil de mantener.',
    deliverables: [
      'Diseño adaptado a móvil y escritorio',
      'Desarrollo de las páginas acordadas',
      'Optimización básica para buscadores',
      'Integración con redes y canales de contacto',
    ],
    process: [
      'Definición de estructura y contenidos',
      'Diseño de la experiencia y las pantallas',
      'Desarrollo y revisión en distintos dispositivos',
      'Publicación y entrega del proyecto',
    ],
    idealFor: [
      'Negocios que necesitan una web profesional',
      'Marcas que quieren renovar su página actual',
      'Proyectos que buscan presentar mejor sus servicios',
    ],
    ctaLabel: 'Planificar mi web',
    ctaHref: '/contacto',
  },

  'experiencia-signature': {
    intro: 'Una experiencia musical cuidada para acompañar tu celebración y convertir cada momento en un recuerdo.',
    objective: 'Diseñar una propuesta musical a la medida del ambiente, el ritmo y la personalidad de tu evento.',
    deliverables: [
      'Saxofón en directo',
      'Repertorio adaptado a la ocasión',
      'Coordinación previa con el evento',
      'Formato con o sin musicalización',
    ],
    process: [
      'Conversación para conocer tu celebración',
      'Selección del formato y repertorio',
      'Coordinación de horarios y necesidades técnicas',
      'Presentación en directo el día del evento',
    ],
    idealFor: [
      'Bodas y celebraciones familiares',
      'Eventos corporativos y recepciones',
      'Personas que quieren una atmósfera musical especial',
    ],
    ctaLabel: 'Reservar esta experiencia',
    ctaHref: '/contacto',
  },
};
