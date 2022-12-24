import { c as create_ssr_component, e as escape, f as each } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"container px-8 mx-auto my-16"}"><h1 class="${"mb-4 text-5xl"}">${escape(data.page.pageTitle)}</h1></div>

${each(data.page.block, (item) => {
    return `<section><div class="${"container px-8 mx-auto my-16"}">${escape(item.text)}</div>
  </section>`;
  })}`;
});
export {
  Page as default
};
