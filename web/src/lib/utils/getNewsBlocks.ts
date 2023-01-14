import { env } from "$env/dynamic/public";
import type { Blocks, NewsBlock, NewsBlockData } from "$lib/types/block-types";
import type { News } from "$lib/types/payload-types";

const getNewsBlocks = async (
  blocks: Blocks,
  locale: string
): Promise<NewsBlockData[]> => {
  let newsBlocksData: NewsBlockData[] = [];

  //@ts-ignore
  let newsBlocks: NewsBlock[] = blocks.filter(
    (block) => block.blockType == "newsBlock"
  );
  let newsPosts: News[];

  for (let index = 0; index < newsBlocks.length; index++) {
    const newsBlock = newsBlocks[index];

    if (newsBlock.newsType == "latest") {
      newsBlocksData.push({
        blockId: newsBlock.id,
        newsPosts: await getLatestNews(locale),
      });
    }

    if (newsBlock.newsType == "selected") {
      let newsPosts = newsBlock.selectedNews.map((post) => post.newsItem);

      newsBlocksData.push({
        blockId: newsBlock.id,
        //@ts-ignore
        newsPosts,
      });
    }
  }

  return newsBlocksData;
};

async function getLatestNews(locale: string) {
  const response = await fetch(
    `${env.PUBLIC_CMS_API_ENDPOINT}/news?sort=-createdAt&locale=${locale}`
  );
  const data = await response.json();
  console.log(locale);
  return data.docs;
}

export { getNewsBlocks };
