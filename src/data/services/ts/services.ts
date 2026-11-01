import estrategia from '../json/estrategia.json';
import diseno from '../json/diseno.json';
import desarrollo from '../json/desarrollo.json';
import experienciaSignature from '../json/experiencia-signature.json';

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
  featured?: boolean;
  subServices?: ServiceSubService[];
};

export const services: Service[] = [
  estrategia,
  diseno,
  desarrollo,
  experienciaSignature,
];
