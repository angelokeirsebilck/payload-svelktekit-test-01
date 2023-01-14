import payload from "payload";
import { CollectionBeforeChangeHook } from "payload/types";
import { formatSlug } from "../utlitites/formatSlug";

const pagesBeforeChange: CollectionBeforeChangeHook = async ({
  data,
  req,
  operation,
}) => {
  if (operation == "create" && data.pagesType == "newsOverview") {
    const newsOverview = await payload.find({
      collection: "pages",
      where: {
        pagesType: {
          equals: "newsOverview",
        },
      },
    });

    if (newsOverview) {
      throw Error("You can only create one news overview page.");
    }
  }

  if (data.slug && data.slug !== "") {
    data.slug = formatSlug(data.slug);
  } else {
    data.slug = formatSlug(data.pageTitle);
  }

  data.uri = data.slug;

  if (data.parent) {
    const parent = await payload.findByID({
      collection: "pages",
      id: data.parent,
      locale: req.locale,
    });

    if (parent) {
      data.uri = `${parent.uri}/${data.uri}`;
    }
  }

  return data;
};

export { pagesBeforeChange };
