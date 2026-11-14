// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // [PENDIENTE] dominio definitivo: se usa en canonical, sitemap y datos estructurados.
  site: 'https://asturtechinformatica.es',
  // Una sola URL por página, sin barra final (evita contenido duplicado).
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
