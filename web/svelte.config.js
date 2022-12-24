import adapter from "@sveltejs/adapter-vercel";
// import adapter from "@sveltejs/adapter-node";

import { vitePreprocess } from "@sveltejs/kit/vite";
// import { getPrerenderRoutes } from "./src/lib/getPrerenderRoutes.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      crawl: true,
      entries: [
        `/nl`,
        `/en`,
        // "/nl/contact",
        // "/nl/payload-cms",
        // "/nl/nieuws",
        // "/en/contact-en",
        // "/en/payload-cms",
        // "/en/news",
      ],
      // origin: process.env.PUBLIC_CMS_API_ENDPOINT,
    },
    // alias: {
    // 	'types/*': 'types/*'
    // }
  },
};

export default config;
