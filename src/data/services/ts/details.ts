// Detalles de los servicios utilizados por las páginas del sitio.

import { services, type ServiceDetail } from './services';

export type { ServiceDetail };

/**
 * Detalles de cada servicio provenientes de sus archivos JSON.
 * Los JSON son la única fuente de contenido para evitar duplicados.
 */
export const serviceDetails: Record<string, ServiceDetail> = Object.fromEntries(
  // Solo se incluyen servicios que tienen un bloque detail definido.
  services
    .filter((service): service is typeof service & { detail: ServiceDetail } => Boolean(service.detail))
    .map((service) => [service.slug, service.detail]),
);
