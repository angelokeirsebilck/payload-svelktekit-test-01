import { UploadField } from "payload/types";

const FileField: UploadField = {
  name: "file", // required
  type: "upload", // required
  relationTo: "file", // required
  required: true,
};

export { FileField };
