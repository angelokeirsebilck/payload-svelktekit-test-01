import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import { SvgField } from "../fields/svg";

const UspBlock: Block = {
  slug: "uspBlock",
  fields: [
    BackgroundColor,
    {
      name: "uspList",
      label: {
        en: "USP List",
        nl: "USP Lijst",
      },
      labels: {
        singular: {
          nl: "USP",
          en: "USP",
        },
        plural: {
          nl: "USP's",
          en: "USP's",
        },
      },
      type: "array",
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: "uspTitle",
          type: "text",
          required: true,
          localized: true,
          label: {
            nl: "Titel",
            en: "Title",
          },
        },
        {
          type: "select",
          label: "Icon",
          name: "icon",
          required: true,
          options: [
            {
              label: "Rocket",
              value: "rocket",
            },
            {
              label: "SEO",
              value: "seo",
            },
            {
              label: {
                nl: "Responsief",
                en: "Responsive",
              },
              value: "responsive",
            },
          ],
        },
        SvgField,
        {
          name: "uspText",
          type: "text",
          localized: true,
          required: true,
          label: {
            nl: "Tekst",
            en: "Text",
          },
        },
      ],
    },
  ],
};

export { UspBlock };
