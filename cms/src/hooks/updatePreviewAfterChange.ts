import { CollectionAfterChangeHook } from "payload/types";

const updatePreviewAfterChange: CollectionAfterChangeHook = ({ doc }) => {
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

export default updatePreviewAfterChange;
