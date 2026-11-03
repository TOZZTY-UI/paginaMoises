import estrategia from '../json/estrategia.json';
import Entrada_Y_Salida_Novios from '../json/Entrada_Y_Salida_Novios.json';
import Amenizacion from '../json/Amenizacion.json';
import Cumpleanos from '../json/Cumpleanos.json';
import Funerario from '../json/Funerario.json';


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
  estrategia,
  Entrada_Y_Salida_Novios,
  Amenizacion,
  Cumpleanos,
  Funerario
];
