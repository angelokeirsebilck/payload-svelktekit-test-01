<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { LinkType, Link } from "$lib/types/block-types";
  import { page } from "$app/stores";

  const button = cva("btn group", {
    variants: {
      intent: {
        primary: "btn--primary",
        secondary: "btn--secondary",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  });

  type ButtonProps = VariantProps<typeof button>;

  export let intent: ButtonProps["intent"];
  export let type: LinkType;
  export let link: Link;
</script>

{#if type == "custom"}
  <a
    href={link.url}
    class={button({ intent })}
    target={link.newTab ? "_blank" : null}
    rel={link.newTab ? "nofollow" : null}
  >
    <span> {link.label}</span>
  </a>
{:else}
  <a
    rel={link.newTab ? "nofollow" : null}
    target={link.newTab ? "_blank" : null}
    href="/{$page.data.locale}/{link.reference.value.uri}"
    class={button({ intent })}
    ><span class=""> {link.label}</span>
  </a>
{/if}
