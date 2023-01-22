import type { PageServerLoad } from "./$types";

import type { Home } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import { locales } from "$lib/config/siteConfig";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
import type { NewsBlockData } from "$lib/types/block-types";
import { getNewsItems } from "$lib/utils/getNewsItems";
import { getNewsCategories } from "$lib/utils/getNewsCategories";

export const prerender = true;

type HomeData = {
  homePage: Home;
  newsBlockData: NewsBlockData[];
};

export const load = (async ({ fetch, params, url }) => {
  if (!locales.includes(params.locale)) {
    throw error(404);
  }

  const getHomeData = async (): Promise<HomeData> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${params.locale}`
    );
    const data = await res.json();

    const homePage: Home = data;

    const newsBlockData: NewsBlockData[] = await getNewsBlocks(
      homePage.block,
      params.locale
    );

    if (!homePage) {
      throw error(404);
    }

    return {
      homePage,
      newsBlockData,
    };
  };

  const loadNewsItems = async () => {
    return await getNewsItems(params.locale);
  };

  const gloadNewsCategories = async () => {
    return await getNewsCategories(params.locale);
  };

  return {
    data: getHomeData(),
    newsItems: loadNewsItems(),
    newsCategories: gloadNewsCategories(),
  };
}) satisfies PageServerLoad;
