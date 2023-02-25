<script lang="ts">
  import { Text } from "slate";
  import H1 from "./H1.svelte";
  import H2 from "./H2.svelte";
  import H3 from "./H3.svelte";
  import H4 from "./H4.svelte";
  import H5 from "./H5.svelte";
  import H6 from "./H6.svelte";
  import Li from "./LI.svelte";
  import OL from "./OL.svelte";
  import P from "./P.svelte";
  import Ul from "./UL.svelte";

  export let textNodes: { [k: string]: unknown }[];

  const nodeTypes = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    ol: OL,
    li: Li,
    ul: Ul,
    p: P,
  };

  console.log(textNodes);
</script>

{#each textNodes as node}
  {#if Text.isText(node)}
    {#if node.bold}
      <strong>{node.text}</strong>
    {:else if node.underline}
      <span class="underline">{node.text}</span>
    {:else if node.code}
      <code>{node.text}</code>
    {:else if node.italic}
      <em>{node.text}</em>
    {:else}
      <span>{node.text}</span>
    {/if}
  {:else if node.type}
    <svelte:component this={nodeTypes[node.type]}>
      <svelte:self textNodes={node.children} />
    </svelte:component>
  {:else}
    <p><svelte:self textNodes={node.children} /></p>
  {/if}
{/each}
