import { defineConfig } from 'astro/config';

// Set BASE_PATH to the repository name in GitHub Pages project deployments.
// Leave it empty for a custom domain or a user/org root page.
export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || undefined,
});
