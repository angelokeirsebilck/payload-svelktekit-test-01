import { Block } from "payload/types";

const TextMediaBlock: Block = {
  slug: "textMediaBlock",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};

export { TextMediaBlock };
