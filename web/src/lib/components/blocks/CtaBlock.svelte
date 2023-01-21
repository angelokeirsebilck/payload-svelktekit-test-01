<script lang="ts">
  import type { CtaBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import Button from "../fields/ui/Button.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { afterUpdate } from "svelte";

  export let content: CtaBlock;
  let square: any;
  let circle: any;
  let section: any;

  afterUpdate(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(square, {
      yPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: section,

        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(circle, {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: 1,
        // markers: true,
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  });

  // onDestroy(() => {
  //   ScrollTrigger.killAll();
  // });
</script>

<Background bgColor={content.bgColor}>
  <Container margin={content.bgColor == "white"}>
    <div class="relative" bind:this={section}>
      <div
        class="absolute right-12 -top-32 z-10 bg-secondary-default/20 w-56 h-56 rounded-full"
        bind:this={circle}
      />
      <div
        class="default-grid relative z-20 {content.bgColor == 'white'
          ? 'bg-primary-bg'
          : 'bg-white'}"
      >
        <div class="hidden lg:block col-span-3 col-start-2 self-end">
          <div
            class="bg-primary-default/20 w-56 h-56 square1"
            bind:this={square}
          />
        </div>
        <div
          class="col-span-full md:col-span-8 md:col-start-5 py-16 px-10 md:px-0 md:pr-10"
        >
          <h2 class="text-3xl  md:text-4xl">{content.ctaTitle}</h2>
          {#if content.ctaText}
            <div class="text-xl md:text-2xl">{content.ctaText}</div>
          {/if}
          {#if content.link}
            <div class="mt-4 md:mt-12">
              <Button
                link={content.link}
                intent={content.link.appearance}
                type={content.link.type}
                style={"normal"}
                size={"medium"}
              />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </Container>
</Background>
