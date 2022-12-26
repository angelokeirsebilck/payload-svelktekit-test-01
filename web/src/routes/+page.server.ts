import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (() => {
  throw redirect(301, "/nl");
}) satisfies PageServerLoad;
