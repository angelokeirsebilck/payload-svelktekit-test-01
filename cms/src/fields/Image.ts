import { Field } from "payload/types";

const ImageField: Field = {
  name: "image", // required
  type: "upload", // required
  relationTo: "image", // required
  required: true,
};

export { ImageField };
