import { locales, defaultLocale } from "$lib/config/siteConfig";

const getLocaleFromPathname = (pathname: string): string => {
  let locale = defaultLocale;
  let pathnameSplit = pathname.split("/");

  if (locales.includes(pathnameSplit[1])) {
    locale = pathnameSplit[1];
  }

  return locale;
};

export { getLocaleFromPathname };
