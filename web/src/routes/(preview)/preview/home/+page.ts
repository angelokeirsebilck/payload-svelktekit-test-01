import type { PageLoad } from "./$types";

import type { Home, News, NewsCategory } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import { locales } from "$lib/config/siteConfig";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
import type { NewsBlockData } from "$lib/types/block-types";
import { getNewsItems } from "$lib/utils/getNewsItems";
import { getNewsCategories } from "$lib/utils/getNewsCategories";

export const ssr = false;

type HomeData = {
  homePage: Home;
  newsBlockData: NewsBlockData[];
};

export const load = (({ fetch, url, depends }) => {
  depends("preview:home");

  const searchParams = url.searchParams;
  const locale = searchParams.get("locale") as string;

  const getHomeData = async (): Promise<HomeData> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${locale}&draft=true`,
      {
        credentials: "include",
      }
    );

    if (res.status == 404) {
      throw error(503, {
        message: "Not a valid preview url",
      });
    }

    const homePage: Home = await res.json();
    const newsBlockData: NewsBlockData[] = await getNewsBlocks(
      homePage.block,
      locale
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
    return await getNewsItems(locale);
  };

  const gloadNewsCategories = async () => {
    return await getNewsCategories(locale);
  };

  return {
    data: getHomeData(),
    newsItems: loadNewsItems(),
    newsCategories: gloadNewsCategories(),
  };
}) satisfies PageLoad;
