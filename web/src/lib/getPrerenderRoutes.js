// import { env } from "$env/dynamic/public";

const getPrerenderRoutes = async () => {
  const routes = ["/nl", "/en"];

  const resNl = await fetch(`http://localhost:3006/api/pages?locale=nl`);
  const dataNl = await resNl.json();

  dataNl.docs.forEach((page) => {
    routes.push(page.uri);
  });

  const resEn = await fetch(`http://localhost:3006/api/pages?locale=en`);
  const dataEn = await resEn.json();

  dataEn.docs.forEach((page) => {
    routes.push(page.uri);
  });
  console.log(routes);
  return routes;
};

export { getPrerenderRoutes };
