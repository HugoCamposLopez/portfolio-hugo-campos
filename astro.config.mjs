import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://hugocamposlopez.github.io',
  base: "/portfolio-hugo-campos",
  root: ".",
  integrations: [tailwind(), react()]
});