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
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  finalEyebrow: string;
  finalTitle: string;
  ctaLabel: string;
  imageAlt: string;
};

export type ServiceSubService = {
  slug: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  paymentHref: string;
  detail?: SubServiceDetail;
};

export type Service = {
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
