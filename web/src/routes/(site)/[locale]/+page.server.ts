import type { Home } from "$lib/types/payload-types";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import { locales } from "$lib/config/siteConfig";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
import type { NewsBlockData } from "$lib/types/block-types";
export const prerender = true;

type HomeData = {
  homePage: Home;
  newsBlockData: NewsBlockData[];
};

export const load = (({ fetch, params, url }) => {
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

  return {
    data: getHomeData(),
  };
}) satisfies PageServerLoad;
