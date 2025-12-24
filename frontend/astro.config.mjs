import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tunnel from 'astro-tunnel';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  // Make sure this is here!
  integrations: [tailwind(), tunnel(), react()],

  adapter: netlify()
});