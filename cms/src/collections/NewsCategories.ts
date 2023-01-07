import { CollectionConfig } from "payload/types";

const NewsCategories: CollectionConfig = {
  slug: "newsCategory",
  labels: {
    singular: {
      en: "News Category",
      nl: "Nieuws Categorie",
    },
    plural: {
      en: "News Categories",
      nl: "Nieuws Categorieën",
    },
  },
  admin: {
    group: "Categories",
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
  timestamps: false,
};

export default NewsCategories;
