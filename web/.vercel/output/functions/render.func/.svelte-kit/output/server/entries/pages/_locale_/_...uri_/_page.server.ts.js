import { e as env } from "../../../../chunks/env-public.js";
import qs from "qs";
const load = async ({ params, fetch }) => {
  const getPage = async () => {
    let query = {
      uri: {
        equals: params.uri
      }
    };
    let stringifiedQuery = qs.stringify({
      where: query
    });
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=${params.locale}&${stringifiedQuery}`
    );
    const data = await res.json();
    return data.docs[0];
  };
  return {
    page: getPage()
  };
};
export {
  load
};
