// Catálogo de servicios disponibles en el sitio.
// El contenido de cada servicio se mantiene en un archivo JSON independiente
// y aquí se importan, tipan y agrupan todos los servicios.

import Amenizacion from '../json/Amenizacion.json';
import Cumpleanos from '../json/Cumpleanos.json';
import Funerario from '../json/Funerario.json';
import Celebraciones_Privadas from '../json/Celebraciones_Privadas.json';
import Conmemoraciones from '../json/Conmemoraciones.json';
import Eventos_Empresariales from '../json/Eventos_Empresariales.json';
import Hoteles from '../json/Hoteles.json';
import Supermercados from '../json/Supermercados.json';
import Bautizos_Y_Presentaciones from '../json/Bautizos_Y_Presentaciones.json';
import Bodas from '../json/Bodas.json';
import Espectaculos_Visuales from '../json/Espectaculos_Visuales.json';


export type ServiceDetail = {
  // Contenido de la página general de un servicio.
  intro: string;
  objectiveEyebrow: string;
  objectiveTitle: string;
  objective: string;
  idealForTitle: string;
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  processEyebrow: string;
  processTitle: string;
  deliverables: string[];
  process: string[];
  idealFor: string[];
  finalEyebrow: string;
  finalTitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export type SubServiceDetail = {
  // Contenido adicional de la página de un subservicio.
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  finalEyebrow: string;
  finalTitle: string;
  ctaLabel: string;
  imageAlt: string;
};

export type ServiceSubService = {
  // Servicio específico asociado a una categoría principal.
  slug: string;
  name: string;
  price?: number | string;
  priceLabel?: string;
  description: string;
  image: string;
  highlights: string[];
  paymentHref: string;
  detail?: SubServiceDetail;
};

export type Service = {
  // Estructura común de las categorías principales de servicios.
  slug: string;
  title: string;
  description: string;
  price?: number | string;
  period?: string;
  features: string[];
  detail?: ServiceDetail;
  featured?: boolean;
  subServices?: ServiceSubService[];
};

export const services: Service[] = [
  // El orden de esta lista determina cómo aparecen los servicios en el sitio.
  Amenizacion,
  Bodas,
  Funerario,
  Cumpleanos,
  Celebraciones_Privadas,
  Conmemoraciones,
  Eventos_Empresariales,
  Hoteles,
  Supermercados,
  Bautizos_Y_Presentaciones,
  Espectaculos_Visuales
];
