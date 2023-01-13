import { Block } from "payload/types";
import { BackgroundColor } from "../fields/BackgroundColor";
import link from "../fields/link";
import { TitleField } from "../fields/Title";

const NewsBlock: Block = {
  slug: "newsBlock",
  fields: [
    TitleField,
    {
      name: "newsType",
      type: "radio",
      required: true,
      options: [
        {
          label: "Latest",
          value: "latest",
        },
        {
          label: "Related",
          value: "related",
        },
        {
          label: "Selected",
          value: "selected",
        },
      ],
      defaultValue: "latest", // The first value in options.
      admin: {
        layout: "horizontal",
      },
    },
    {
      admin: {
        condition: (_, siblingData) => siblingData?.newsType === "selected",
      },
      name: "selectedNews",
      type: "array",
      label: {
        en: "Newsposts",
        nl: "Nieuwsberichten",
      },
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: {
          nl: "Nieuwsbericht",
          en: "Newspost",
        },
        plural: {
          nl: "Nieuwsberichten",
          en: "Newsposts",
        },
      },
      fields: [
        {
          name: "newsItem",
          type: "relationship",
          relationTo: "news",
          required: true,
        },
      ],
    },
    link(),
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
          fields: [BackgroundColor],
        },
      ],
    },
  ],
};

export { NewsBlock };
