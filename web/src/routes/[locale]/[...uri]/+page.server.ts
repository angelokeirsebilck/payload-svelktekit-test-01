import type { PageServerLoad } from "./$types";
import type { Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";

interface IData {
  localized: object;
  page: Page;
}

export const load = (async ({ params, fetch }) => {
  const getPageData = async (): Promise<IData> => {
    let localized;
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
    page = data.docs[0];

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
      localized = pageData.docs[0].uri;
    }
    return {
      page,
      localized,
    };
  };

  return {
    pageData: getPageData(),
  };
}) satisfies PageServerLoad;
