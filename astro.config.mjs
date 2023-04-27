import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

const { VITE_APP_BASE_URL } = import.meta.env;

console.log("VITE_APP_BASE_URL: ", VITE_APP_BASE_URL);
// https://astro.build/config
export default defineConfig({
  site: VITE_APP_BASE_URL,
  integrations: [mdx(), sitemap(), partytown(), image(), solidJs(), tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: { theme: "dracula" },
  },
});
