import { Field } from "payload/types";

const DefaultRichText: Field = {
  label: {
    en: "Text",
    nl: "Tekst",
  },
  name: "text",
  type: "richText",
  required: true,
  localized: true,
  admin: {
    elements: ["h1", "h2", "h3", "h4", "ol", "ul", "link"],
  },
};

export { DefaultRichText };
