// @ts-check
import { defineConfig } from 'astro/config'; // Importa la función para definir la configuración de Astro
import react from '@astrojs/react';          // Importa la integración de React
import tailwind from '@astrojs/tailwind';    // Importa la integración de Tailwind CSS

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://H4rr1ss.github.io',
  base: '/',
});
