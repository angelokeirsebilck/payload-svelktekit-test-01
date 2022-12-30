import { CollectionConfig } from "payload/types";
import { pageBuilder } from "../blocks/PageBuilder";
import { homeBeforeChange } from "../hooks/homeBeforeOperation";

const Home: CollectionConfig = {
  slug: "home",
  labels: {
    singular: "Home",
    plural: "Home",
  },
  admin: {
    group: "Pages",
    defaultColumns: ["pageTitle"],
    useAsTitle: "pageTitle",
    preview: (doc, { locale }) => {
      return `${process.env.PAYLOAD_PUBLIC_WEB_URL}/preview/home?id=${doc.id}&locale=${locale}`;
    },
  },
  versions: {
    maxPerDoc: 15,
    retainDeleted: true,
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
  hooks: {
    beforeOperation: [homeBeforeChange],
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
  timestamps: true,
};

export default Home;
