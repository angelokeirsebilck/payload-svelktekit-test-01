import { locales, defaultLocale } from "$lib/config/siteConfig";

const getCurrentLocale = (localeToCheck: string): string => {
  let locale = localeToCheck;
  if (!locales.includes(localeToCheck)) {
    locale = defaultLocale;
  }

  return locale;
};

export { getCurrentLocale };
