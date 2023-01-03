import { Field } from "payload/types";
import { ImageBlock } from "./Image";
import { TextBlock } from "./Text";
import { TextImageBlock } from "./TextImage";

const pageBuilder: Field = {
  label: "Page Builder",
  name: "block",
  type: "blocks",
  blocks: [TextBlock, TextImageBlock, ImageBlock],
};

export { pageBuilder };
