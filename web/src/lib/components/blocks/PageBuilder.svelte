<script lang="ts">
  import type { Blocks } from "$lib/types/block-types";
  import TextBlock from "./TextBlock.svelte";
  import MediaBlock from "./MediaBlock.svelte";
  import TextMediaBlock from "./TextMediaBlock.svelte";
  import FormBlock from "./FormBlock.svelte";
  import BannerImageSwiper from "./BannerImageSwiper.svelte";
  import NewsBlock from "./NewsBlock.svelte";

  export let blocks: Blocks = [];
</script>

{#each blocks as block, index}
  {#if block.blockType == "textBlock"}
    <TextBlock content={block} />
  {:else if block.blockType == "imageBlock"}
    <MediaBlock content={block} />
  {:else if block.blockType == "textImageBlock"}
    <TextMediaBlock {index} content={block} />
  {:else if block.blockType == "formBlock"}
    <FormBlock content={block} />
  {:else if block.blockType == "newsBlock"}
    <NewsBlock content={block} />
  {:else if block.blockType == "bannerImageSwiperBlock"}
    <BannerImageSwiper content={block} />
  {:else}
    nieks
  {/if}
{/each}
