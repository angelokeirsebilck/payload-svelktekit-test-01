import type { Home } from "$lib/types/payload-types";
import type { PageLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const ssr = false;

export const load = (({ fetch, url, depends }) => {
  depends("preview:home");

  const searchParams = url.searchParams;
  const locale = searchParams.get("locale");

  const getHomeData = async (): Promise<Home> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${locale}&draft=true`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();

    return data;
  };

  return {
    home: getHomeData(),
  };
}) satisfies PageLoad;
