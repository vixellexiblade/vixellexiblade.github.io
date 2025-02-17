// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://lexiblade.xyz",
  prefetch: true,
  integrations: [
    vue(),
    icon({
      iconDir: "src/assets/icons",
    })],

  vite: {
    plugins: [tailwindcss()]
  }
});