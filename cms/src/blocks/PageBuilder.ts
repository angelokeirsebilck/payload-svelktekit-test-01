import { Field } from "payload/types";
import { BannerImageSwiper } from "./BannerImageSwiper";
import { ContactBlock } from "./ContactBlock";
import { CtaBlock } from "./CTA";
import { FormBlock } from "./Form";
import { ImageBlock } from "./Image";
import { NewsBlock } from "./News";
import { NewsOverviewBlock } from "./NewsOverview";
import { TextBlock } from "./Text";
import { TextImageBlock } from "./TextImage";
import { UspBlock } from "./USP";

const pageBuilder: Field = {
  label: "Page Builder",
  name: "block",
  type: "blocks",
  blocks: [
    BannerImageSwiper,
    TextBlock,
    TextImageBlock,
    ImageBlock,
    NewsBlock,
    UspBlock,
    NewsOverviewBlock,
    FormBlock,
    CtaBlock,
    ContactBlock,
  ],
};

export { pageBuilder };
