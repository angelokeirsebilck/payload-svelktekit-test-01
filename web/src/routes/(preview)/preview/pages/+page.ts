import type { PageLoad } from "./$types";
import type { Page } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
export const ssr = false;

interface IData {
  page: Page;
}

export const load = (({ url, fetch, depends }) => {
  depends("preview:uri");
  const searchParams = url.searchParams;
  const locale = searchParams.get("locale");
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
    const page = await res.json();

    if (!page) {
      throw error(404);
    }

    return {
      page,
    };
  };

  return {
    pageData: getPageData(),
  };
}) satisfies PageLoad;
