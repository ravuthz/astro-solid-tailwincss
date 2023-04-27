import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-solid-tailwincss.com",
  integrations: [mdx(), sitemap(), partytown()]
});