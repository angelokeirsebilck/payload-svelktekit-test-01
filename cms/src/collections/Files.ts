import { CollectionConfig } from "payload/types";

const File: CollectionConfig = {
  slug: "file",
  access: {
    read: () => true,
  },
  admin: {
    group: "Assets",
  },
  fields: [],
  upload: {
    disableLocalStorage: true,
    staticURL: "/file",
    staticDir: "file",
    mimeTypes: [
      "application/pdf",
      "text/plain",
      ".doc",
      ".docx",
      "application/msword",
      "application/rtf",
    ],
  },
};

export default File;
