import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../../chunks/index.js";
const logo = "/_app/immutable/assets/logo-test-83da4118.svg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col min-h-screen"}"><header class="${"py-10 border-b-blue-100 border-b"}"><div class="${"container px-8 mx-auto"}"><div class="${"flex justify-between"}"><a href="${"/" + escape(data.locale, true)}"><img${add_attribute("src", logo, 0)} alt="${"Logoipsum Logo"}"></a>
        <nav><ul class="${"flex gap-x-8"}">${each(data.nav.items, (navItem) => {
    return `<li><a href="${"/" + escape(data.locale, true) + "/" + escape(navItem.page.uri, true)}" class="${"text-lg font-medium"}">${escape(navItem.page.pageTitle)}</a>
              </li>`;
  })}</ul></nav></div></div></header>
  <main>${slots.default ? slots.default({}) : ``}</main>

  <footer class="${"mt-auto py-4 bg-blue-50"}"><div class="${"container px-8 mx-auto"}">Footer</div></footer></div>`;
});
export {
  Layout as default
};
