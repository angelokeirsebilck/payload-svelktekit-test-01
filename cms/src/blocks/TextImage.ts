import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { ImageField } from "../fields/Image";
import { TextPosition } from "../fields/TextPosition";
import { DefaultRichText } from "../fields/DefaultRichtText";
import link from "../fields/link";
import { TextVerAlign } from "../fields/TextVerAlign";

const TextImageBlock: Block = {
  slug: "textImageBlock",
  fields: [
    DefaultRichText,
    {
      name: "link",
      type: "array",
      maxRows: 1,
      fields: [link()],
    },
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
          fields: [TextPosition, TextVerAlign, BackgroundColor],
        },
      ],
    },
    ImageField,
  ],
};

export { TextImageBlock };
