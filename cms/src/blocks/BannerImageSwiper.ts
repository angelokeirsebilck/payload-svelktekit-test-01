import { Block } from "payload/types";
import { ImageField } from "../fields/Image";

const BannerImageSwiper: Block = {
  slug: "bannerImageSwiperBlock",
  fields: [
    {
      type: "text",
      name: "title",
      maxLength: 200,
      required: true,
      localized: true,
      admin: {
        description: ({ value }) =>
          `Use <strong> text </strong> to place text in primary color. Maximum 200 characters. ${
            typeof value === "string" ? 200 - value.length : "200"
          } characters left.`,
      },
    },
    {
      name: "items",
      label: {
        nl: "Afbeeldingen",
        en: "Images",
      },
      labels: {
        singular: {
          nl: "Afbeelding",
          en: "Image",
        },
        plural: {
          nl: "Afbeeldingen",
          en: "images",
        },
      },
      type: "array",
      required: true,
      fields: [ImageField],
    },
  ],
};

export { BannerImageSwiper };
