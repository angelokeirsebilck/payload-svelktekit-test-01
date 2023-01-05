import { Block } from "payload/types";

const FormBlock: Block = {
  slug: "formBlock",
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

export { FormBlock };
