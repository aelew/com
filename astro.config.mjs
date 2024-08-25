import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: import.meta.env.DEV ? 'http://localhost:4321' : 'https://aelew.com',
  integrations: [tailwind()]
});
