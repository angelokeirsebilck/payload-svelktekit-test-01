import { Block } from "payload/types";

const ContactBlock: Block = {
  slug: "contactBlock",
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
      localized: true,
    },
  ],
};

export { ContactBlock };
