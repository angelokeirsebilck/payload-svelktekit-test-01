import { GlobalConfig } from "payload/types";
import { pageBuilder } from "../blocks/PageBuilder";

const HomeGlobal: GlobalConfig = {
  slug: "home",
  preview: (doc, { locale }) => {
    return `${process.env.PAYLOAD_PUBLIC_WEB_URL}/preview/home?id=${doc.id}&locale=${locale}`;
  },
  versions: {
    max: 15,
    drafts: true,
  },
  access: {
    read: ({ req }) => {
      if (process.env.PAYLOAD_PUBLIC_DRAFTS_AUTH == "false") return true;

      if (req.user) return true;
      return {
        or: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      };
    },
  },
  fields: [
    {
      name: "pageTitle",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    pageBuilder,
  ],
};

export default HomeGlobal;
