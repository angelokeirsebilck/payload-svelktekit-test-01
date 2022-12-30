<script lang="ts">
  import TextBlock from "./TextBlock.svelte";
  import type { Home } from "$lib/types/payload-types";
  import MediaBlock from "./MediaBlock.svelte";

  export let blocks: Home["block"] = [];
</script>

{#each blocks as block}
  {#if block.blockType == "textBlock"}
    <TextBlock textNodes={block.text} />
  {:else if block.blockType == "mediaBlock"}
    <MediaBlock />
  {:else}
    nieks
  {/if}
{/each}
