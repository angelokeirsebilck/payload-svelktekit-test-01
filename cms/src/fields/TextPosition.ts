import { Field } from "payload/types";

const TextPosition: Field = {
  label: {
    en: "Text Position",
    nl: "Text Positie",
  },
  admin: {
    width: "50%",
  },
  name: "textPos",
  type: "radio",
  required: true,
  defaultValue: "left",
  options: [
    {
      label: {
        en: "Left",
        nl: "Links",
      },
      value: "left",
    },
    {
      label: {
        en: "Right",
        nl: "Rechts",
      },
      value: "right",
    },
  ],
};

export { TextPosition };
