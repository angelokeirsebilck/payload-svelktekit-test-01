import { GlobalAfterChangeHook } from "payload/types";

const updatePreviewGlobalAfterChange: GlobalAfterChangeHook = async ({
  doc, // full document data
}) => {
  if (doc._status !== "published") {
    try {
      fetch(`${process.env.SERVER_URL}/updatePreview`, {
        method: "POST",
      });
    } catch (e) {
      console.error(e);
    }
    return console.log("Not published, skipping revalidation");
  }
};

export default updatePreviewGlobalAfterChange;
