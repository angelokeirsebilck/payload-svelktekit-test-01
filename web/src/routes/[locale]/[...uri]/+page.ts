import type { PageLoad } from "./$types";
import type { Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";

export const load = (async ({ params, fetch }) => {
  const getPage = async (): Promise<Page> => {
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
    return data.docs[0];
  };

  return {
    page: getPage(),
  };
}) satisfies PageLoad;
