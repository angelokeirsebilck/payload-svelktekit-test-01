import { Field } from "payload/types";

const BackgroundColor: Field = {
  label: {
    en: "Background Color",
    nl: "Achtergrondkleur",
  },
  name: "bgColor",
  type: "radio",
  required: true,
  admin: {
    width: "50%",
  },
  defaultValue: "white",
  options: [
    {
      label: {
        en: "White",
        nl: "Wit",
      },
      value: "white",
    },
    {
      label: {
        en: "Light",
        nl: "Licht kleur",
      },
      value: "light",
    },
  ],
};

export { BackgroundColor };
