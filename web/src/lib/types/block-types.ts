import type { Page } from "./payload-types";

export type Blocks = Page["block"];
export type TextBlock = Extract<Blocks[0], { blockType: "textBlock" }>;
export type MediaBlock = Extract<Blocks[0], { blockType: "mediaBlock" }>;
export type TextMediaBlock = Extract<
  Blocks[0],
  { blockType: "textMediaBlock" }
>;
