// Agrega las URLs reales cuando estén disponibles.
export const sidebarColors = { background: '#0D0D11', accent: '#00EF93' };

export const sidebarLinks = [
  { label: 'Inicio', href: '/', icon: 'home' },
  { label: 'Sobre Mi', href: '/sobre-mi', icon: 'user' },
  { label: 'Servicios', href: '/servicios', icon: 'music' },
  { label: 'Galería', href: '/galeria', icon: 'image' },
  { label: 'Repertorio musical', href: '/repertorio', icon: 'list' },
  { label: 'Contacto', href: '/contacto', icon: 'mail' },
  { label: 'Cotizar por WhatsApp', href: '', icon: 'message' },
] as const;
