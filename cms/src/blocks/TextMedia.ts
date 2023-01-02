import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { MediaField } from "../fields/Media";
import { TextPosition } from "../fields/TextPosition";
import { DefaultRichText } from "../fields/DefaultRichtText";

const TextMediaBlock: Block = {
  slug: "textMediaBlock",
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
    MediaField,
  ],
};

export { TextMediaBlock };
