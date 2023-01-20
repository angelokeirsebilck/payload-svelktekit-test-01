import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import link from "../fields/link";

const CtaBlock: Block = {
  slug: "ctaBlock",
  fields: [
    BackgroundColor,
    {
      name: "ctaTitle",
      type: "text",
      localized: true,
      required: true,
      label: {
        nl: "Titel",
        en: "Title",
      },
    },
    {
      name: "ctaText",
      type: "text",
      localized: true,
      label: {
        nl: "Tekst",
        en: "Text",
      },
    },
    link(),
  ],
};

export { CtaBlock };
