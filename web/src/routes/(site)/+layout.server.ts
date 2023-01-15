import type { LayoutServerLoad } from "./$types";
import type { Nav, CompanyInfo } from "$lib/types/payload-types";
import { env } from "$env/dynamic/public";
import { getLocaleFromPathname } from "$lib/utils/getLocaleFromPathname";

export const load = (({ url }) => {
  let locale = getLocaleFromPathname(url.pathname);

  const getNav = async (): Promise<Nav> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=${locale}`
    );
    const data = await res.json();
    return data;
  };

  const getSocials = async (): Promise<Nav> => {
    const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/globals/socials`);
    const data = await res.json();
    return data;
  };

  const getCompanyInfo = async (): Promise<CompanyInfo> => {
    const res = await fetch(
      `${env.PUBLIC_CMS_API_ENDPOINT}/globals/companyInfo`
    );
    const data = await res.json();
    return data;
  };
  return {
    nav: getNav(),
    socials: getSocials(),
    companyInfo: getCompanyInfo(),
    locale,
    pathname: url.pathname,
  };
}) satisfies LayoutServerLoad;
