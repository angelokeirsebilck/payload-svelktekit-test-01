import type { Home } from "$lib/types/payload-types";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import { locales } from "$lib/config/siteConfig";

export const prerender = true;

export const load = (({ fetch, params, url }) => {
  if (!locales.includes(params.locale)) {
    throw error(404);
  }

  const getHomeData = async (): Promise<Home> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/home?locale=${params.locale}`
    );
    const data = await res.json();
    const homePage = data.docs[0];
    console.log(homePage);
    if (!homePage) {
      throw error(404);
    }
    return homePage;
  };

  return {
    home: getHomeData(),
  };
}) satisfies PageServerLoad;
