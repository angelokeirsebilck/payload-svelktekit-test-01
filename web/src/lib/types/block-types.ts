import type { Page } from "./payload-types";

export type Blocks = Page["block"];
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

export type LinkType = TextImageBlock["link"]["type"];
