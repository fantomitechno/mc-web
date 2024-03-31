import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import image from './build/image.js';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://simon.renoux.dev",
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [image(), vue()],
  scopedStyleStrategy: "where"
});