<script lang="ts">
  import type { Blocks } from "$lib/types/block-types";
  import TextBlock from "./TextBlock.svelte";
  import MediaBlock from "./MediaBlock.svelte";
  import TextMediaBlock from "./TextMediaBlock.svelte";
  import FormBlock from "./FormBlock.svelte";
  import BannerImageSwiper from "./BannerImageSwiper.svelte";
  import NewsBlock from "./NewsBlock.svelte";
  import NewsOverviewBlock from "./NewsOverviewBlock.svelte";
  import ContactBlock from "./ContactBlock.svelte";
  import UspBlock from "./UspBlock.svelte";
  import CtaBlock from "./CtaBlock.svelte";

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
  {:else if block.blockType == "contactBlock"}
    <ContactBlock content={block} />
  {:else if block.blockType == "newsBlock"}
    <NewsBlock content={block} />
  {:else if block.blockType == "uspBlock"}
    <UspBlock content={block} />
  {:else if block.blockType == "ctaBlock"}
    <CtaBlock content={block} />
  {:else if block.blockType == "newsOverviewBlock"}
    <NewsOverviewBlock content={block} />
  {:else if block.blockType == "bannerImageSwiperBlock"}
    <BannerImageSwiper {index} content={block} />
  {:else}
    nieks
  {/if}
{/each}
