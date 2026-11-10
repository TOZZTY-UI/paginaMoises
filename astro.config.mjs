import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saxeventos.cl',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      cssMinify: true,
      sourcemap: false,
    },
  },

  integrations: [
    sitemap({
      // Las confirmaciones de pago y la página 404 no son contenido indexable.
      filter: (page) => !page.includes('/pago/') && !page.endsWith('/404/'),
    }),
  ],
});
