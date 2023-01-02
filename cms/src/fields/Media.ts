import { Field } from "payload/types";

const MediaField: Field = {
  name: "media", // required
  type: "upload", // required
  relationTo: "media", // required
  required: true,
};

export { MediaField };
