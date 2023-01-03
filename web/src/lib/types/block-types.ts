import type { Page } from "./payload-types";

export type Blocks = Page["block"];
export type TextBlock = Extract<Blocks[0], { blockType: "textBlock" }>;
export type ImageBlock = Extract<Blocks[0], { blockType: "imageBlock" }>;
export type TextImageBlock = Extract<
  Blocks[0],
  { blockType: "textImageBlock" }
>;
