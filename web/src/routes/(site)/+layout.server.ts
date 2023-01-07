import type { LayoutServerLoad } from "./$types";
import type { Nav } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import { getLocaleFromPathname } from "$lib/utils/getLocaleFromPathname";

export const load = (({ url }) => {
  let locale = getLocaleFromPathname(url.pathname);

  const getNav = async (): Promise<Nav> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${locale}`
    );
    const data = await res.json();
    return data;
  };

  const getSocials = async (): Promise<Nav> => {
    const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/globals/Socials`);
    const data = await res.json();
    return data;
  };
  return {
    nav: getNav(),
    socials: getSocials(),
    locale,
    pathname: url.pathname,
  };
}) satisfies LayoutServerLoad;
