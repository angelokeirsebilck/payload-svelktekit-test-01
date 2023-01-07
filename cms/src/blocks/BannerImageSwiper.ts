import { Block } from "payload/types";
import { ImageField } from "../fields/Image";
import { OnlyBoldRichText } from "../fields/OnlyBoldRichText";

const BannerImageSwiper: Block = {
  slug: "bannerImageSwiperBlock",
  fields: [
    {
      type: "text",
      name: "title",
      maxLength: 200,
      required: true,
      localized: true,
    },
    OnlyBoldRichText,
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
