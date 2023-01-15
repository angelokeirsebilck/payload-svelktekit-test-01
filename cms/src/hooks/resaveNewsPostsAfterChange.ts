import { CollectionAfterChangeHook } from "payload/types";

const resaveNewsPosts: CollectionAfterChangeHook = ({
  req,
  operation,
  doc,
}) => {
  const { payload } = req;
  const resaveNewsPostsAsync = async () => {
    const newsPosts = await payload.find({
      collection: "news",
      locale: req.locale,
    });

    try {
      newsPosts.docs.forEach((newsPost: any) => {
        const updateAsDraft = newsPost._status !== "published";

        payload.update({
          id: newsPost.id,
          locale: req.locale,
          collection: "news",
          draft: updateAsDraft,
          data: {
            ...newsPost,
            uri: `${doc.uri}/${newsPost.slug}`,
            newsCat: newsPost.newsCat.id,
            overviewImage: newsPost.overviewImage.id,
          },
          depth: 0,
        });
      });
    } catch (err) {
      payload.logger.error(
        `Error trying to update news posts with new news overview data.`
      );
      payload.logger.error(err);
    }
  };
  if (operation == "update" && doc.pagesType == "newsOverview") {
    // Non-blocking
    resaveNewsPostsAsync();
  }

  return undefined;
};

export default resaveNewsPosts;
