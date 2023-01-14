import payload from "payload";
import { CollectionBeforeOperationHook } from "payload/types";

const pagesBeforeOperation: CollectionBeforeOperationHook = async ({
  args,
  operation,
}) => {
  if (operation == "create") {
    const newsOverview = await payload.find({
      collection: "pages",
      where: {
        pagesType: {
          equals: "newsOverview",
        },
      },
    });
    // console.log(newsOverview);
    if (newsOverview) {
      throw Error("You can only create one overview page.");
    }
  }

  return args;
};

export { pagesBeforeOperation };
