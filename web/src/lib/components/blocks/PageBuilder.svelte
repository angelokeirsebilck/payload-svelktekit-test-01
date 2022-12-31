<script lang="ts">
  import type { Blocks } from "$lib/types/block-types";
  import TextBlock from "./TextBlock.svelte";
  import MediaBlock from "./MediaBlock.svelte";

  export let blocks: Blocks = [];
</script>

{#each blocks as block}
  {#if block.blockType == "textBlock"}
    <TextBlock content={block} />
  {:else if block.blockType == "mediaBlock"}
    <MediaBlock content={block} />
  {:else}
    nieks
  {/if}
{/each}
