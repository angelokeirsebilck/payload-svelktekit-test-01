import type { PageServerLoad } from "./$types";
import type { Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";
import { error } from "@sveltejs/kit";
import { getNewsBlocks } from "$lib/utils/getNewsBlocks";
import type { NewsBlockData } from "$lib/types/block-types";

export const prerender = true;

interface IData {
  localized: [string, unknown][];
  page: Page;
  newsBlockData: NewsBlockData[];
}

export const load = (({ params, fetch }) => {
  const getPageData = async (): Promise<IData> => {
    let localized: [string, unknown][] = [];
    let page;

    let query = {
      uri: {
        equals: params.uri,
      },
    };

    let stringifiedQuery = qs.stringify({
      where: query, // ensure that `qs` adds the `where` property, too!
    });

    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=${params.locale}&${stringifiedQuery}`
    );
    const data = await res.json();
    page = data.docs[0] as Page;

    const newsBlockData: NewsBlockData[] = await getNewsBlocks(page.block);

    if (!page) {
      throw error(404);
    }

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
        `${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=*&${stringifiedQuery}`
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

  return {
    data: getPageData(),
  };
}) satisfies PageServerLoad;
