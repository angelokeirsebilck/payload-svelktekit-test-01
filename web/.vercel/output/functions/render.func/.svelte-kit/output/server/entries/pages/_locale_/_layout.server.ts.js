import { e as env } from "../../../chunks/env-public.js";
const load = ({ params }) => {
  const getNav = async () => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${params.locale}`
    );
    const data = await res.json();
    return data;
  };
  return {
    nav: getNav(),
    locale: params.locale
  };
};
export {
  load
};
