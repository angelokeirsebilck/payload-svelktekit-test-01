import type { Home } from "$lib/types/payload-types";
import type { PageLoad } from "./$types";
import { env } from "$env/dynamic/public";
import type { NewsBlockData } from "$lib/types/block-types";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
export const ssr = false;

type HomeData = {
  homePage: Home;
  newsBlockData: NewsBlockData[];
};

export const load = (({ fetch, url, depends }) => {
  depends("preview:home");

  const searchParams = url.searchParams;
  const locale = searchParams.get("locale");

  const getHomeData = async (): Promise<HomeData> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${locale}&draft=true`,
      {
        credentials: "include",
      }
    );
    const homePage: Home = await res.json();
    const newsBlockData: NewsBlockData[] = await getNewsBlocks(homePage.block);

    return {
      homePage,
      newsBlockData,
    };
  };

  return {
    homeData: getHomeData(),
  };
}) satisfies PageLoad;
