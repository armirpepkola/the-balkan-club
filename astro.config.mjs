import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Prepping SSR for Phase 2 D1 database queries
  output: 'server', 
  
  // Astro v7 Native Compiler / Vite 8 Engine
  vite: {
    build: {
      target: 'esnext'
    }
  },
  
  integrations: [
    tailwind({
      // We will define our custom luxury design tokens globally, 
      // preventing template-like overrides.
      applyBaseStyles: false, 
    }),
    react(),
  ],
  
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true // Required for local D1 emulation later
    }
  }),
});