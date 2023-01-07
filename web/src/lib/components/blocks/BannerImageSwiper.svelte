<script lang="ts">
  import type { BannerImageSwiperBlock } from "$lib/types/block-types";
  import type { Image } from "$lib/types/payload-types";
  import { Pagination } from "swiper";
  import Container from "../base/Container.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/pagination";
  import ImageKit from "../base/ImageKit.svelte";
  import { onMount } from "svelte";
  export let content: BannerImageSwiperBlock;

  $: images = [] as Image[];

  onMount(() => {
    images = content.items.map((item: any) => {
      return item.image;
    });
  });
</script>

<div class="h-auto my-12 lg:my-0 lg:h-[calc(100vh_-_122px)] flex items-center">
  <Container noMargin={true} classes="w-full relative aspect-[1920/800]">
    <div
      class="lg:absolute text-3xl lg:text-5xl mb-6 lg:mb-0 font-light prose prose-strong:text-primary-default leading-tight prose-strong:font-medium prose-p:text-5xl bg-white/70 z-20 lg:p-6 top-16 left-24 max-w-3xl"
    >
      {@html content.title}
    </div>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true, el: `.paginationEl${content.id}` }}
      spaceBetween={0}
      slidesPerView={1}
      height="auto"
    >
      {#each images as slide}
        <SwiperSlide>
          <ImageKit
            transformations={[
              ["2560", "ar-1920-800"],
              ["1920", "ar-1920-800"],
              ["1024", "ar-1920-800"],
              ["768", "ar-1920-800"],
              ["640", "ar-1920-800"],
            ]}
            alt={slide.alt}
            src="{slide.prefix}/{slide.filename}"
            sizes=" 100vw"
            height={slide.height?.toString()}
            width={slide.width?.toString()}
            loading="eager"
          />
        </SwiperSlide>
      {/each}
    </Swiper>
    <div class="paginationEl{content.id} flex justify-center mt-4" />
  </Container>
</div>
