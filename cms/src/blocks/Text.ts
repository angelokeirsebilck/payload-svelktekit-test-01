import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { DefaultRichText } from "../fields/DefaultRichtText";

const TextBlock: Block = {
  slug: "textBlock",
  fields: [DefaultRichText, BackgroundColor],
};

export { TextBlock };
