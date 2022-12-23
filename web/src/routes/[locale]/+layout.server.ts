import type { LayoutServerLoad } from "./$types";
import type { Nav } from "types/payload-types";
import { env } from "$env/dynamic/public";

export const load = (({ params }) => {
  const getNav = async (): Promise<Nav> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${params.locale}`
    );
    const data = await res.json();

    return data;
  };
  return {
    nav: getNav(),
  };
}) satisfies LayoutServerLoad;
