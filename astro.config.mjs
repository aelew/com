import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://aelew.com'
      : 'http://localhost:4321',
  integrations: [tailwind()],
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanyard.cnrad.dev'
      }
    ]
  }
});
