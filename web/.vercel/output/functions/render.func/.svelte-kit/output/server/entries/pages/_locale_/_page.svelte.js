import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section><div class="${"container px-8 mx-auto my-16"}">${each(data.home.block, (block) => {
    return `<h1 class="${"mb-4 text-5xl"}">${escape(block.text)}</h1>`;
  })}</div></section>`;
});
export {
  Page as default
};
