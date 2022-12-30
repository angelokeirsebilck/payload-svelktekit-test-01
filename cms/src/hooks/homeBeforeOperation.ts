import payload from "payload";
import { CollectionBeforeOperationHook } from "payload/types";

const homeBeforeChange: CollectionBeforeOperationHook = async ({
  operation,
  args,
}) => {
  if (operation == "create") {
    const homeQuery = await payload.find({
      collection: "home",
    });

    if (homeQuery.totalDocs == 1) {
      return null;
    }
  }
};

export { homeBeforeChange };
