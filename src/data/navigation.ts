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
  { id: 'sobreMi', label: 'Sobre Mí', href: '/sobre-mi', icon: 'user', showInSidebar: true, footerOrder: 0 },
  { id: 'galeria', label: 'Galería', href: '/galeria', icon: 'image', showInSidebar: true, footerOrder: 2 },
  { id: 'servicios', label: 'Servicios', href: '/servicios', icon: 'music', showInSidebar: true, footerOrder: 3 },
  { id: 'repertorio', label: 'Repertorio Musical', href: '/repertorio', icon: 'list', showInSidebar: true },
  { id: 'contacto', label: 'Contacto', href: '/contacto', icon: 'mail', showInSidebar: true, footerOrder: 4 },
  { id: 'preguntas-frecuentes', label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes', icon: 'help', showInSidebar: false },
  { id: 'terminos', label: 'Términos y Condiciones', href: '/terminos-y-condiciones', icon: 'info', showInSidebar: false },
];

export const sidebarLinks = navigation.filter((link) => link.showInSidebar);
export const footerLinks = navigation
  .filter((link) => link.footerOrder !== undefined)
  .sort((a, b) => (a.footerOrder ?? 0) - (b.footerOrder ?? 0));
