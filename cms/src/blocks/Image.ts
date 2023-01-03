import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { ImageField } from "../fields/Image";
const ImageBlock: Block = {
  slug: "imageBlock",
  fields: [ImageField, BackgroundColor],
};

export { ImageBlock };
