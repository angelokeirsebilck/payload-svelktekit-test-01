import type { Page, News } from "./payload-types";

export type Blocks = Page["block"];
export type NewsBlock = Extract<Blocks[0], { blockType: "newsBlock" }>;
export type FormBlock = Extract<Blocks[0], { blockType: "formBlock" }>;
export type TextBlock = Extract<Blocks[0], { blockType: "textBlock" }>;
export type ImageBlock = Extract<Blocks[0], { blockType: "imageBlock" }>;
export type BannerImageSwiperBlock = Extract<
  Blocks[0],
  { blockType: "bannerImageSwiperBlock" }
>;
export type TextImageBlock = Extract<
  Blocks[0],
  { blockType: "textImageBlock" }
>;

export type Link = TextImageBlock["link"];
export type LinkType = TextImageBlock["link"]["type"];

export type NewsBlockData = {
  blockId: string;
  newsPosts: News[];
};
