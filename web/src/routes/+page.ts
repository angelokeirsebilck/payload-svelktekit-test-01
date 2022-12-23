import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (({ fetch }) => {
  throw redirect(301, "/nl");
  // const getHomeData = async (): Promise<Home> => {
  //   const res = await fetch(
  //     `${env.PUBLIC_CMS_API_ENDPOINT}/globals/home?locale=nl`
  //   );
  //   const data = await res.json();
  //   return data;
  // };
  // const getPages = async (): Promise<Page> => {
  //   const res = await fetch(`${env.PUBLIC_CMS_API_ENDPOINT}/pages?locale=nl`);
  //   const data = await res.json();
  //   return data;
  // };
  // const getNav = async (): Promise<Nav> => {
  //   const res = await fetch(
  //     `${env.PUBLIC_CMS_API_ENDPOINT}/globals/nav?locale=nl`
  //   );
  //   const data = await res.json();
  //   return data;
  // };
  // return {
  //   home: getHomeData(),
  //   // pages: getPages(),
  //   nav: getNav(),
  // };
}) satisfies PageLoad;
