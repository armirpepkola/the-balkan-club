import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server', 
  
  // Bypasses the 'sharp' image processing error for Cloudflare Pages
  image: {
    service: passthroughImageService()
  },

  vite: {
    build: {
      target: 'esnext'
    },
    plugins: [tailwindcss()]
  },
  
  integrations: [
    react(),
  ],
  
  adapter: cloudflare({
    // Silences the deprecation warning
    entrypointResolution: 'auto',
    platformProxy: {
      enabled: true
    }
  }),
});