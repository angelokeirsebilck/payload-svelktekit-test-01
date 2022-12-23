import type { Home } from "types/payload-types";
import type { PageLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const load = (({ fetch, params }) => {
  const getHomeData = async (): Promise<Home> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${params.locale}`
    );
    const data = await res.json();

    return data;
  };

  // const getNav = async (): Promise<Nav> => {
  //   const res = await fetch(
  //     `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${params.locale}`
  //   );
  //   const data = await res.json();

  //   return data;
  // };
  return {
    home: getHomeData(),
    // nav: getNav(),
    // locale: params.locale,
  };
}) satisfies PageLoad;
