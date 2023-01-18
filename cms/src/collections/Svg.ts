import { CollectionConfig } from "payload/types";

const Svg: CollectionConfig = {
  slug: "svg",
  access: {
    read: () => true,
  },
  admin: {
    group: "Assets",
  },
  fields: [],
  upload: {
    disableLocalStorage: true,
    staticURL: "/image/svg",
    staticDir: "image/svg",
    mimeTypes: ["image/svg+xml"],
  },
};

export default Svg;
