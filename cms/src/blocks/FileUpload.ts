import { Block } from "payload/types";
import { FileField } from "../fields/File";

const FileUpload: Block = {
  slug: "fileUpload",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "label",
      type: "text",
      required: true,
    },
    // FileField,
  ],
};

export { FileUpload };
