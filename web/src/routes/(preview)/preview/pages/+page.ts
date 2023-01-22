import type { PageLoad } from "./$types";
import type { News, Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";
import { error } from "@sveltejs/kit";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
import type { NewsBlockData } from "$lib/types/block-types";
import { getNewsItems } from "$lib/utils/getNewsItems";
import { getNewsCategories } from "$lib/utils/getNewsCategories";
export const ssr = false;

interface IData {
  localized: [string, unknown][];
  page: Page | News;
  newsBlockData: NewsBlockData[];
}

export const load = (({ url, fetch, depends }) => {
  depends("preview:uri");
  let pageType = "pages";
  let localized: [string, unknown][] = [];
  const searchParams = url.searchParams;
  const locale = searchParams.get("locale") as string;
  const id = searchParams.get("id");

  const getPageData = async (): Promise<IData> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/pages/${id}?locale=${locale}&draft=true`,
      {
        credentials: "include",
      }
    );

    if (res.status == 404) {
      throw error(503, {
        message: "Not a valid preview url",
      });
    }
    let page = await res.json();

    if (!page) {
      const res = await fetch(
        `${env.PUBLIC_CMS_API_ENDPOINT}/pages/${id}?locale=${locale}&draft=true`
      );
      const data = await res.json();
      page = data.docs[0] as News;
      pageType = "news";
    }

    if (!page) {
      throw error(404);
    }
    //Get extra block data to pass through
    const newsBlockData: NewsBlockData[] = await getNewsBlocks(
      page.block,
      locale
    );

    if (page) {
      let query = {
        id: {
          equals: page.id,
        },
      };
      let stringifiedQuery = qs.stringify({
        where: query, // ensure that `qs` adds the `where` property, too!
      });

      const pageResult = await fetch(
        `${env.PUBLIC_CMS_API_ENDPOINT}/${pageType}?locale=*&${stringifiedQuery}`
      );

      const pageData = await pageResult.json();
      localized = Object.entries(pageData.docs[0].uri);
    }

    return {
      page,
      localized,
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
    pageData: getPageData(),
    newsItems: loadNewsItems(),
    newsCategories: gloadNewsCategories(),
  };
}) satisfies PageLoad;
