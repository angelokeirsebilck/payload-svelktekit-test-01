import { Field } from "payload/types";

const SvgField: Field = {
  name: "svg", // required
  label: {
    nl: "SVG Afbeelding",
    en: "SVG Image",
  },
  type: "upload", // required
  relationTo: "svg", // required
  required: true,
};

export { SvgField };
