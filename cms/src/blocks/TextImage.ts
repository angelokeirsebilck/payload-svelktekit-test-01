import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { ImageField } from "../fields/Image";
import { TextPosition } from "../fields/TextPosition";
import { DefaultRichText } from "../fields/DefaultRichtText";

const TextImageBlock: Block = {
  slug: "textImageBlock",
  fields: [
    DefaultRichText,

    {
      label: {
        en: "Settings",
        nl: "Instellingen",
      },
      name: "settings",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [TextPosition, BackgroundColor],
        },
      ],
    },
    ImageField,
  ],
};

export { TextImageBlock };
