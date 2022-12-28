import { Block } from "payload/types";

const MediaBlock: Block = {
  slug: "mediaBlock",
  fields: [
    {
      name: "media", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
  ],
};

export { MediaBlock };
