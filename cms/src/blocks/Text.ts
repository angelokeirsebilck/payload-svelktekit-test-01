import { Block } from "payload/types";

const TextBlock: Block = {
  slug: "textBlock",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};

export { TextBlock };
