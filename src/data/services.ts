import estrategia from './services/estrategia.json';
import diseno from './services/diseno.json';
import desarrollo from './services/desarrollo.json';
import experienciaSignature from './services/experiencia-signature.json';

export type ServiceSubService = {
  slug: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  paymentHref: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  subServices?: ServiceSubService[];
};

export const services: Service[] = [
  estrategia,
  diseno,
  desarrollo,
  experienciaSignature,
];
