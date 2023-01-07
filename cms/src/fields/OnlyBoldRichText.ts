import { Field } from "payload/types";

const OnlyBoldRichText: Field = {
  label: {
    en: "Text",
    nl: "Tekst",
  },
  name: "text",
  type: "richText",
  required: true,
  localized: true,
  admin: {
    leaves: ["bold"],
    elements: [],
  },
};

export { OnlyBoldRichText };
