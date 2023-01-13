import { Field } from "payload/types";

const TextVerAlign: Field = {
  label: {
    en: "Text Vertical Alignment",
    nl: "Text Positie Verticaal",
  },
  admin: {
    width: "50%",
  },
  name: "textVerAlign",
  type: "radio",
  required: true,
  defaultValue: "self-center",
  options: [
    {
      label: {
        en: "Top",
        nl: "Bovenaan",
      },
      value: "self-start",
    },
    {
      label: {
        en: "Center",
        nl: "Center",
      },
      value: "self-center",
    },
    {
      label: {
        en: "Bottom",
        nl: "Onderaan",
      },
      value: "self-end",
    },
  ],
};

export { TextVerAlign };
