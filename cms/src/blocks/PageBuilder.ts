import { Field } from "payload/types";
import { BannerImageSwiper } from "./BannerImageSwiper";
import { FormBlock } from "./Form";
import { ImageBlock } from "./Image";
import { TextBlock } from "./Text";
import { TextImageBlock } from "./TextImage";

const pageBuilder: Field = {
  label: "Page Builder",
  name: "block",
  type: "blocks",
  blocks: [BannerImageSwiper, TextBlock, TextImageBlock, ImageBlock, FormBlock],
};

export { pageBuilder };
