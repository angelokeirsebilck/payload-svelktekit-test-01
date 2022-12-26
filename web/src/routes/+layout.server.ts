import type { LayoutServerLoad } from "./$types";
import type { Nav } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";

import { locales, defaultLocale } from "$lib/config/siteConfig";
import { getCurrentLocale } from "$lib/utils/getCurrentLocale";

export const load = (({ params, url }) => {
  console.log(url.pathname);
  let locale = getCurrentLocale(params.locale);

  const getNav = async (): Promise<Nav> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${locale}`
    );
    const data = await res.json();
    return data;
  };
  return {
    nav: getNav(),
    locale: locale,
    pathname: url.pathname,
  };
}) satisfies LayoutServerLoad;
