
import type { Testimonial } from '../components/TestimonialsStack.astro';

export const testimonials: Testimonial[] = [
  {
    id: 'cliente-1',
    name: 'Nombre del cliente',
    role: 'Cliente de evento',
    rating: 5,
    comment: 'Aquí debes colocar el testimonio real del cliente.',
    date: 'Octubre 2026',
  },
  {
    id: 'cliente-2',
    name: 'Otro cliente',
    role: 'Evento corporativo',
    rating: 4.5,
    comment: 'Aquí debes colocar otra opinión real.',
    date: 'Noviembre 2026',
  },
  {
    id: 'cliente-3',
    name: 'Tercer cliente',
    role: 'Celebración privada',
    rating: 5,
    comment: 'Aquí debes colocar una tercera opinión real.',
    date: 'Diciembre 2026',
  },
];
