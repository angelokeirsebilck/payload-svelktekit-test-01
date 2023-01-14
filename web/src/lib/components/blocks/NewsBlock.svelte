<script lang="ts">
  import type { NewsBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import Background from "../base/Background.svelte";
  import Button from "../fields/ui/Button.svelte";
  export let content: NewsBlock;
  import { page } from "$app/stores";
  import type { NewsBlockData } from "$lib/types/block-types";
  import ImageKit from "../base/ImageKit.svelte";

  let newsPosts: NewsBlockData[];

  $: newsPosts = $page?.data?.data?.newsBlockData.filter(
    (block: NewsBlockData) => block.blockId == content.id
  );
</script>

<Background bgColor={content.settings.bgColor}
  ><Container margin={content.settings.bgColor == "white"}>
    <div class="flex flex-wrap justify-between items-end gap-x-8 mb-12">
      <h2 class="text-4xl font-medium">{content.title}</h2>
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
        {#each newsPosts[0].newsPosts as post}
          <a
            href={`/${$page.data.locale}/${post.uri}`}
            class="col-span-full md:col-span-4"
          >
            <div
              class="flex flex-col group overflow-hidden border-primary-default border-4 h-full transition-all duration-300  hover:border-secondary-default relative"
            >
              <div
                class="absolute transition-all duration-300 trasform md:group-hover:translate-x-2 md:group-hover:translate-y-2 aspect-square rounded-full w-48 -bottom-24 -right-24 bg-secondary-default/20"
              />
              <ImageKit
                transformations={[
                  ["286", "ar-546-303"],
                  ["373", "ar-546-303"],
                  ["462", "ar-546-303"],
                  ["680", "ar-546-303"],
                ]}
                alt={post.overviewImage.alt}
                src="{post.overviewImage.prefix}/{post.overviewImage.filename}"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 286px, (max-width: 1280px) 373px, 462px"
                height={post.overviewImage.height}
                width={post.overviewImage.width}
                classes="w-full aspect-[546/303] object-cover"
              />

              <div class="p-4 flex flex-col h-full">
                <div class="mb-0 uppercase text-sm tracking-[4px]">
                  {post.newsCat?.name}
                </div>
                <h3 class="text-2xl font-medium mb-8 mt-0">
                  {post.pageTitle}
                </h3>

                <div
                  class="btn btn--primary lowercase btn--small btn--outline mt-auto md:group-hover:bg-primary-default md:group-hover:text-white"
                >
                  Lees meer
                </div>
              </div>
            </div>
          </a>
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
