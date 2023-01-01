import { Block } from "payload/types";

const TextBlock: Block = {
  slug: "textBlock",
  fields: [
    {
      name: "text",
      type: "richText",
      required: true,
      localized: true,
      admin: {
        elements: ["h1", "h2", "h3", "h4", "ol", "ul", "link"],
      },
    },
  ],
};

export { TextBlock };
