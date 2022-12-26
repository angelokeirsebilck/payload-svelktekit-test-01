import type { Home } from "$lib/types/payload-types";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";

export const load = (({ fetch, params }) => {
  const locales = ["nl", "en"];

  if (!locales.includes(params.locale)) {
    throw error(404, {
      message: "Not found",
    });
  }

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
}) satisfies PageServerLoad;
