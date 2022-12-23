import type { FieldHook } from "payload/types";
import payload from "payload";

const generateUri =
  (): FieldHook =>
  ({
    value,
    data,
    siblingData,
    originalDoc, //
    operation,
    req,
  }): string => {
    const lastBreadcrumb = data.breadcrumbs[data.breadcrumbs.length - 1];
    if (lastBreadcrumb) return lastBreadcrumb.url;
    return "nope"; // should return a string as typed above, undefined, or null
  };

export { generateUri };
