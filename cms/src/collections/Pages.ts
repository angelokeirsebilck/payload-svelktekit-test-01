import { CollectionConfig } from "payload/types";
import { pageBuilder } from "../blocks/PageBuilder";
import { pagesBeforeChange } from "../hooks/pagesBeforeSave";
import resaveNewsPosts from "../hooks/resaveNewsPostsAfterChange";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: {
      nl: "Standaard",
      en: "Default",
    },
    plural: {
      nl: "Standaard",
      en: "Default",
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
    afterChange: [resaveNewsPosts],
  },
  fields: [
    {
      name: "pagesType",
      type: "radio",
      required: true,
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "News Overview",
          value: "newsOverview",
        },
      ],
      defaultValue: "default", // The first value in options.
      admin: {
        layout: "horizontal",
        position: "sidebar",
      },
    },
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
    pageBuilder,
  ],
  timestamps: true,
};

export default Pages;
