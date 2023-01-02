import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { MediaField } from "../fields/Media";
const MediaBlock: Block = {
  slug: "mediaBlock",
  fields: [MediaField, BackgroundColor],
};

export { MediaBlock };
