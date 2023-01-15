<script lang="ts">
  import type { NewsOverviewBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import NewsCard from "../fields/news/NewsCard.svelte";
  import { page } from "$app/stores";
  import Tag from "../fields/ui/Tag.svelte";
  export let content: NewsOverviewBlock;
  import { trans } from "$lib/translations/translations";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import ImageKit from "../base/ImageKit.svelte";

  let selectedCat = "all";

  const formatName = (val: string): string =>
    val
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .toLowerCase();

  //@ts-ignore
  $: allString = trans[$page.data.locale]["all"];
  $: noItemsFoundString = trans[$page.data.locale]["noItemsFound"];
  console.log($page.data.newsItems);
  $: filteredNewsItems =
    selectedCat == "all"
      ? $page.data.newsItems
      : $page.data.newsItems.filter(
          (item) => formatName(item.newsCat.name) == selectedCat
        );

  const changeSelection = (e) => {
    selectedCat = e.target.id;
  };

  const [send, receive] = crossfade({
    duration: (d) => d * 50,

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 500,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
</script>

<Background bgColor={content.bgColor}>
  <Container margin={content.bgColor == "white"}>
    <div class="ul mb-10">
      <ul class="flex flex-wrap gap-4">
        <li
          on:keydown|stopPropagation={changeSelection}
          on:click|stopPropagation={changeSelection}
          class="cursor-pointer group"
          class:active={selectedCat == "all"}
        >
          <Tag id="all" label={allString} />
        </li>
        {#each $page.data.newsCategories as cat}
          <li
            on:keydown|stopPropagation={changeSelection}
            on:click|stopPropagation={changeSelection}
            class="cursor-pointer group"
            class:active={selectedCat == formatName(cat.name)}
          >
            <Tag id={formatName(cat.name)} label={cat.name} />
          </li>
        {/each}
      </ul>
    </div>

    {#if filteredNewsItems.length > 0}
      <div class="default-grid">
        {#each filteredNewsItems as newsItem (newsItem.id)}
          <a
            in:receive={{ key: newsItem.id }}
            out:send={{ key: newsItem.id }}
            animate:flip={{ duration: 500 }}
            href={`/${$page.data.locale}/${newsItem.uri}`}
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
                alt={newsItem.overviewImage.alt}
                src="{newsItem.overviewImage.prefix}/{newsItem.overviewImage
                  .filename}"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 286px, (max-width: 1280px) 373px, 462px"
                height={newsItem.overviewImage.height}
                width={newsItem.overviewImage.width}
                classes="w-full aspect-[546/303] object-cover"
              />

              <div class="p-4 flex flex-col h-full">
                <div class="mb-0 uppercase text-sm tracking-[4px]">
                  {newsItem.newsCat?.name}
                </div>
                <h3 class="text-2xl font-medium mb-8 mt-0">
                  {newsItem.pageTitle}
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
      </div>
    {:else}
      <div class="text-3xl">{noItemsFoundString}</div>
    {/if}
  </Container>
</Background>
