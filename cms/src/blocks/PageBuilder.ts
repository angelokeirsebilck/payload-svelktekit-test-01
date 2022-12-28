import { Field } from "payload/types";
import { MediaBlock } from "./Media";
import { TextBlock } from "./Text";
import { TextMediaBlock } from "./TextMedia";

const pageBuilder: Field = {
  label: "Page Builder",
  name: "block",
  type: "blocks",
  blocks: [TextBlock, TextMediaBlock, MediaBlock],
};

export { pageBuilder };
