import { Field } from "payload/types";

const ImageField: Field = {
  name: "image", // required
  label: {
    nl: "Afbeelding",
    en: "Image",
  },
  type: "upload", // required
  relationTo: "image", // required
  required: true,
};

export { ImageField };
