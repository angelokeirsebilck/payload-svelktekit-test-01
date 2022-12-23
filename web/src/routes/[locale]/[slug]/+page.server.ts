import type { PageServerLoad } from "./$types";
import type { Page } from "types/payload-types";
import { env } from "$env/dynamic/public";
import qs from "qs";

export const load = (({ params, fetch }) => {
  const query = {
    slug: {
      equals: params.slug,
    },
  };
  const stringifiedQuery = qs.stringify({
    where: query, // ensure that `qs` adds the `where` property, too!
  });

  const getPage = async (): Promise<Page[]> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=${params.locale}&${stringifiedQuery}`
    );
    const data = await res.json();
    return data.docs[0];
  };

  // const result = await fetch(
  //   `${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=${params.locale}&${stringifiedQuery}`
  // );

  // const data = await result.json();
  // const page = data.docs[0];

  // I can see this pageTitle getting logged when clicking the anchor t
  // console.log(page.pageTitle);

  return {
    page: getPage(),
  };
}) satisfies PageServerLoad;
