// Una sola lista de rutas para el menú, el navbar y el footer.
export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  showInSidebar: boolean;
  footerOrder?: number;
}

export const navigation: NavigationLink[] = [
  { id: 'inicio', label: 'Inicio', href: '/', icon: 'home', showInSidebar: true },
  { id: 'sobreMi', label: 'Sobre mí', href: '/sobre-mi', icon: 'user', showInSidebar: true, footerOrder: 0 },
  { id: 'servicios', label: 'Servicios', href: '/servicios', icon: 'music', showInSidebar: true, footerOrder: 3 },
  { id: 'galeria', label: 'Galería', href: '/galeria', icon: 'image', showInSidebar: true, footerOrder: 2 },
  { id: 'repertorio', label: 'Repertorio musical', href: '/repertorio', icon: 'list', showInSidebar: true },
  { id: 'contacto', label: 'Contacto', href: '/contacto', icon: 'mail', showInSidebar: true, footerOrder: 4 },
  { id: 'whatsapp', label: 'Cotizar por WhatsApp', href: '', icon: 'message', showInSidebar: true },
  { id: 'faq', label: 'FAQ', href: '/faq', icon: 'help', showInSidebar: false, footerOrder: 1 },
  { id: 'privacidad', label: 'Privacidad', href: '/privacidad', icon: 'info', showInSidebar: false },
  { id: 'terminos', label: 'Términos', href: '/terminos', icon: 'info', showInSidebar: false },
];

export const sidebarLinks = navigation.filter((link) => link.showInSidebar);
export const footerLinks = navigation
  .filter((link) => link.footerOrder !== undefined)
  .sort((a, b) => (a.footerOrder ?? 0) - (b.footerOrder ?? 0));
