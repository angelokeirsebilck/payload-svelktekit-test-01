import { env } from "$env/dynamic/public";
import type { NewsCategory } from "$lib/types/payload-types";

const getNewsCategories = async (locale: string): Promise<NewsCategory[]> => {
  const res = await fetch(
    `${env.PUBLIC_CMS_API_ENDPOINT}/newsCategory?locale=${locale}`
  );
  const data = await res.json();
  const newsCategories = data.docs as NewsCategory[];

  return newsCategories;
};

export { getNewsCategories };
