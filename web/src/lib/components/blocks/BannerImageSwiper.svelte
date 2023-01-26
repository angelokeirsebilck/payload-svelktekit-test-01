<script lang="ts">
  import type { BannerImageSwiperBlock } from "$lib/types/block-types";
  import { Pagination } from "swiper";
  import Container from "../base/Container.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/pagination";
  import ImageKit from "../base/ImageKit.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { afterUpdate } from "svelte";

  export let content: BannerImageSwiperBlock;
  export let index: number;
  let swiperContainer: any;
  let pagination: any;
  let title: any;
  let swiperEl: any = null;
  const setSwiper = (e: any) => {
    const [swiper] = e.detail;
    swiperEl = swiper;
  };

  afterUpdate(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 75%",
          toggleActions: "play pause resume reverse",
          // markers: true,
        },
      });

      tl.to(pagination, {
        opacity: 1,
      }).fromTo(
        title,
        {
          opacity: 0,
          y: 20,
        },
        { opacity: 1, y: 0 },
        "-=0.5"
      );

      return () => {};
    });

    if (swiperEl) {
      setTimeout(() => {
        swiperEl.pagination.destroy();
        swiperEl.pagination.init();
        swiperEl.pagination.render();
        swiperEl.pagination.update();
      }, 500);
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });
</script>

<div class="h-auto my-8 lg:my-0 lg:h-[calc(100vh_-_122px)] flex items-center">
  <Container noMargin={true} classes="w-full relative aspect-[1920/800]">
    <h1
      bind:this={title}
      class="lg:absolute text-3xl lg:text-5xl mb-6 lg:mb-0 font-light  prose  prose-strong:text-primary-default !leading-tight prose-strong:font-normal prose-p:text-5xl bg-white/80 z-20 lg:p-8 top-16 left-24 max-w-3xl xl:max-w-5xl"
    >
      {@html content.title}
    </h1>
    <div class="" bind:this={swiperContainer}>
      <Swiper
        class=""
        modules={[Pagination]}
        pagination={{ clickable: true, el: `.paginationEl${content.id}` }}
        spaceBetween={0}
        slidesPerView={1}
        height="auto"
        on:swiper={setSwiper}
      >
        {#each content.items as slide, slideIndex}
          <SwiperSlide>
            <ImageKit
              transformations={[
                ["2560", "ar-1920-800"],
                ["1920", "ar-1920-800"],
                ["1280", "ar-1920-1000"],
                ["768", "ar-1920-1000"],
                ["640", "ar-1920-1350"],
              ]}
              alt={slide.image.alt}
              src="{slide.image.prefix}/{slide.image.filename}"
              sizes=" 100vw"
              height={slide.image.height?.toString()}
              width={slide.image.width?.toString()}
              loading={slideIndex == 0 && index == 0 ? "eager" : "lazy"}
              classes="aspect-[1920/1350] md:aspect-[1920/1000] xl:aspect-[1920/800] object-cover"
            />
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>

    <div
      bind:this={pagination}
      class="paginationEl{content.id} flex justify-center mt-4 opacity-0"
    />
  </Container>
</div>
