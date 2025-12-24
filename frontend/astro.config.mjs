import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tunnel from 'astro-tunnel';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), tunnel(), react()], // Make sure this is here!
});