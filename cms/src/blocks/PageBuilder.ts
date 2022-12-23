import { Field } from "payload/types";
import { TextBlock } from "./index";

const pageBuilder: Field = {
  label: "Page Builder",
  name: "block",
  type: "blocks",
  minRows: 1,
  maxRows: 20,
  blocks: [TextBlock],
  localized: true,
};

export { pageBuilder };
