import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "image",
  access: {
    read: () => true,
  },
  admin: {
    group: "Assets",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
    staticURL: "/image",
    staticDir: "image",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
};

export default Media;
