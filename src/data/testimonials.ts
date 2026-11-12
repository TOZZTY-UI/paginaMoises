/* Datos de testimonios publicados en el sitio.
Cada testimonio puede incluir identificador, nombre, rol, empresa,
avatar, valoración, comentario, fecha e imagen.
La información se organiza como una lista de objetos Testimonial.
*/

import type { Testimonial } from '../components/content/TestimonialsStack.astro';

export const testimonials: Testimonial[] = [
  {
    id: 'cliente-1',
    name: 'Aurora Vargas',
    role: 'Cliente de evento',
    rating: 5,
    comment: 'La verdad que fue muy agradable escuchar y ver la pasión que entregan en cada canción. Los recomiendo 1000%; profesionalismo en todo momento.',
    date: '01/04/2026',
  },
  {
    id: 'cliente-2',
    name: 'Irene Garrido',
    role: 'Cliente de evento',
    rating: 4.5,
    comment: 'Excelente servicio en cuanto a calidad, presentación y cumplimiento de lo acordado. Realmente es un profesional en lo que realiza.',
    date: '15/02/2025',
  },
  {
    id: 'cliente-3',
    name: 'Lucia Delgado',
    role: 'Anfitriona de celebración',
    rating: 5,
    comment: 'La música en vivo creó un ambiente espectacular durante nuestra celebración. El repertorio fue elegante y muy variado.',
    date: '22/11/2024',
  },
  {
    id: 'cliente-4',
    name: 'Carlos Nuñez',
    role: 'Organizador de evento',
    rating: 5,
    comment: 'Una presentación llena de energía y profesionalismo. La música acompañó perfectamente cada momento del evento.',
    date: '08/08/2023',
  },
  {
    id: 'cliente-5',
    name: 'Juan Carlos Alonso',
    role: 'Anfitrión de celebración',
    rating: 5,
    comment: 'El saxofón en vivo entregó un toque especial a nuestra celebración. Una experiencia musical muy agradable.',
    date: '17/05/2022',
  },
  {
    id: 'cliente-6',
    name: 'Aurora Vargas',
    role: 'Organizadora de evento',
    rating: 5,
    comment: 'Excelente coordinación, presentación impecable y un repertorio adaptado al ambiente de nuestro evento.',
    date: '03/12/2021',
  },
  {
    id: 'cliente-7',
    name: 'Guillermo Diaz',
    role: 'Anfitrión de celebración',
    rating: 5,
    comment: 'La interpretación musical y la interacción con los invitados hicieron que la celebración fuera muy especial.',
    date: '19/06/2021',
  },
];
