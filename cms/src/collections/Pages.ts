import { CollectionConfig } from "payload/types";
import { pageBuilder } from "../blocks";

import { pagesBeforeChange } from "../hooks/pagesBeforeSave";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    defaultColumns: ["pageTitle"],
    useAsTitle: "pageTitle",
  },
  access: {
    read: () => true,
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
    pageBuilder,
  ],
  timestamps: false,
};

export default Pages;
