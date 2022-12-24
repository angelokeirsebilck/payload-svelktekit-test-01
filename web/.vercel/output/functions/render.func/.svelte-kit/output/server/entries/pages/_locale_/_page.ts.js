import { e as env } from "../../../chunks/env-public.js";
const load = ({ fetch, params }) => {
  const getHomeData = async () => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=${params.locale}`
    );
    const data = await res.json();
    return data;
  };
  return {
    home: getHomeData()
  };
};
export {
  load
};
