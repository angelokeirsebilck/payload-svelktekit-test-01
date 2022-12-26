import type { PageServerLoad } from "./$types";
import type { Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";
import { error } from "@sveltejs/kit";
import { getCurrentLocale } from "$lib/utils/getCurrentLocale";
import { trans } from "$lib/translations/translations";
export const prerender = true;
interface IData {
  localized: [string, unknown][];
  page: Page;
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
    page = data.docs[0];

    if (!page) {
      let locale = getCurrentLocale(params.locale);
      throw error(404, {
        // @ts-ignore
        code: 404,
        // @ts-ignore
        errorMessage: "message404",
        locale,
      });
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
    };
  };

  return {
    pageData: getPageData(),
  };
}) satisfies PageServerLoad;
