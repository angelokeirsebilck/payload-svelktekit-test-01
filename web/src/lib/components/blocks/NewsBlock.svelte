<script lang="ts">
  import type { NewsBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import Background from "../base/Background.svelte";
  import Button from "../fields/ui/Button.svelte";
  export let content: NewsBlock;
  import { page } from "$app/stores";
  import type { NewsBlockData } from "$lib/types/block-types";

  let newsPosts: NewsBlockData[];

  $: newsPosts = $page?.data?.data?.newsBlockData.filter(
    (block: NewsBlockData) => block.blockId == content.id
  );
</script>

<Background bgColor={content.settings.bgColor}
  ><Container>
    <div class="default-grid">
      <div class="col-span-full md:col-span-4">
        <h2 class="text-5xl font-medium">{content.title}</h2>
        {#if content.link}
          <div class="mt-4 md:mt-12">
            <Button
              intent={content.link.appearance}
              link={content.link}
              type={content.link.type}
            />
          </div>
        {/if}
      </div>
      <div class="col-span-full md:col-span-8">
        {#if newsPosts && newsPosts.length > 0}
          {#each newsPosts[0].newsPosts as post}
            <p>{post.pageTitle}</p>
          {/each}
        {/if}
      </div>
    </div>
  </Container></Background
>
