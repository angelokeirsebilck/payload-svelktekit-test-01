import type { Home } from "$lib/types/payload-types";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import { locales } from "$lib/config/siteConfig";
import { trans } from "$lib/translations/translations";
import { getCurrentLocale } from "$lib/utils/getCurrentLocale";

export const load = (({ fetch, params }) => {
  let locale = getCurrentLocale(params.locale);

  if (!locales.includes(params.locale)) {
    throw error(404, {
      // @ts-ignore
      message: trans[locale].notFound,
      // @ts-ignore
      errorMessage: trans[locale].notFoundMessage,
    });
  }

  const getHomeData = async (): Promise<Home> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${params.locale}`
    );
    const data = await res.json();

    return data;
  };

  return {
    home: getHomeData(),
  };
}) satisfies PageServerLoad;
