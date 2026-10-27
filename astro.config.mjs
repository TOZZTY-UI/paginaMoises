
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://saxeventos.cl',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});
