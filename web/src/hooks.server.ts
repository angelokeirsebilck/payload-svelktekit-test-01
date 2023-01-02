import { locales } from "$lib/config/siteConfig";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  let [, lang] = event.url.pathname.split("/");

  if (locales.includes(lang)) {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace("%lang%", lang),
    });
  }

  return await resolve(event);
}) satisfies Handle;
