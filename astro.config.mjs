import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image(), mdx(), preact()],
  output: "server",
  adapter: vercel()
});