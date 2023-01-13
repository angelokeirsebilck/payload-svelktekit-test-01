import { CollectionConfig } from "payload/types";
import { pageBuilder } from "../blocks/PageBuilder";

import { pagesBeforeChange } from "../hooks/pagesBeforeSave";

const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: {
      nl: "Nieuwsbericht",
      en: "Newspost",
    },
    plural: {
      nl: "Nieuwsberichten",
      en: "Newsposts",
    },
  },
  admin: {
    group: "Pages",
    defaultColumns: ["pageTitle"],
    useAsTitle: "pageTitle",
    preview: (doc, { locale }) => {
      if (doc?.uri) {
        return `${process.env.PAYLOAD_PUBLIC_WEB_URL}/preview/pages?id=${doc.id}&locale=${locale}`;
      }
      return null;
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
    beforeChange: [pagesBeforeChange],
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      localized: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "uri",
      label: "Uri",
      type: "text",
      index: true,
      unique: true,
      localized: true,
      access: {
        update: () => false,
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "pageTitle",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "newsCat",
      label: {
        en: "News Category",
        nl: "Nieuws Categorie",
      },
      type: "relationship",
      relationTo: "newsCategory",
      required: true,
    },
    {
      name: "overviewImage", // required
      //   admin: {
      //     description: ({ t }) => t("description:overviewImage"),
      //   },
      label: {
        nl: "Overzicht Afbeelding",
        en: "Overview Image",
      },
      type: "upload", // required
      relationTo: "image", // required
      required: true,
    },
    pageBuilder,
  ],
  timestamps: true,
};

export default News;
