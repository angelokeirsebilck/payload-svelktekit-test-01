import type { LayoutServerLoad } from "./$types";

import { getLocaleFromPathname } from "$lib/utils/getLocaleFromPathname";

export const load = (({ url }) => {
  let locale = getLocaleFromPathname(url.pathname);

  return {
    locale,
  };
}) satisfies LayoutServerLoad;
