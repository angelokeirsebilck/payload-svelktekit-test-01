import { env } from "$env/dynamic/public";
import type { News } from "$lib/types/payload-types";

const getNewsItems = async (
  locale: string,
  limit: number = 99999,
  page: number = 1
): Promise<News[]> => {
  const res = await fetch(
    `${env.PUBLIC_CMS_API_ENDPOINT}/news?locale=${locale}&limit=${limit}&page=${page}`
  );
  const data = await res.json();

  const newsItems = data.docs as News[];

  return newsItems;
};

export { getNewsItems };
