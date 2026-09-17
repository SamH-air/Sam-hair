import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samhair.vercel.app',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
