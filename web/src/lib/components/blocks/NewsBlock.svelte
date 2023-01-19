<script lang="ts">
  import type { NewsBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import Background from "../base/Background.svelte";
  import Button from "../fields/ui/Button.svelte";
  export let content: NewsBlock;
  import { page } from "$app/stores";
  import type { NewsBlockData } from "$lib/types/block-types";
  import NewsCard from "../fields/news/NewsCard.svelte";

  let newsPosts: NewsBlockData[];

  $: newsPosts = $page?.data?.data?.newsBlockData.filter(
    (block: NewsBlockData) => block.blockId == content.id
  );
</script>

<Background bgColor={content.settings.bgColor}
  ><Container margin={content.settings.bgColor == "white"}>
    <div class="flex flex-wrap justify-between items-end gap-x-8 mb-12">
      <h2 class="text-3xl md:text-4xl font-medium mb-0">{content.title}</h2>
      {#if content.link}
        <div class="hidden lg:block">
          <Button
            intent={content.link.appearance}
            link={content.link}
            type={content.link.type}
            style={"normal"}
            size={"medium"}
          />
        </div>
      {/if}
    </div>
    <div class="default-grid">
      {#if newsPosts && newsPosts.length > 0}
        {#each newsPosts[0].newsPosts as newsItem}
          <NewsCard {newsItem} />
        {/each}
      {/if}
    </div>
    <div class="block lg:hidden mt-12">
      <Button
        intent={content.link.appearance}
        link={content.link}
        type={content.link.type}
        style={"normal"}
        size={"medium"}
      />
    </div>
  </Container></Background
>
