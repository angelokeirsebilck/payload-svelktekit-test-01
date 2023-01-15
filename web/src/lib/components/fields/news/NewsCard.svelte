<script lang="ts">
  import type { News } from "$lib/types/payload-types";
  import { page } from "$app/stores";
  import ImageKit from "$lib/components/base/ImageKit.svelte";
  export let newsItem: News;
</script>

<a
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
      src="{newsItem.overviewImage.prefix}/{newsItem.overviewImage.filename}"
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
