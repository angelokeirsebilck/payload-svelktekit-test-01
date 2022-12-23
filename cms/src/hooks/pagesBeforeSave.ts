import payload from "payload";
import { CollectionBeforeChangeHook } from "payload/types";
import { formatSlug } from "../utlitites/formatSlug";

const pagesBeforeChange: CollectionBeforeChangeHook = async ({ data, req }) => {
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

  return { ...data };
};

export { pagesBeforeChange };
