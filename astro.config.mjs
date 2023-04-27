import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-solid-tailwincss.com",
  integrations: [mdx(), sitemap(), partytown(), image(), solidJs(), tailwind()]
});