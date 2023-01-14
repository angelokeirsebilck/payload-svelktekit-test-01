import payload from "payload";
import { CollectionBeforeChangeHook } from "payload/types";
import { formatSlug } from "../utlitites/formatSlug";

const newsPagesBeforeChange: CollectionBeforeChangeHook = async ({
  data,
  req,
}) => {
  const newsOverviewPage = await payload.find({
    collection: "pages",
    locale: req.locale,
    where: {
      pagesType: {
        equals: "newsOverview",
      },
    },
  });

  if (data.slug && data.slug !== "") {
    data.slug = formatSlug(data.slug);
  } else {
    data.slug = formatSlug(data.pageTitle);
  }
  if (newsOverviewPage) {
    data.uri = `${newsOverviewPage.docs[0].uri}/${data.slug}`;
  } else {
    data.uri = `${data.slug}`;
  }

  return data;
};

export { newsPagesBeforeChange };
