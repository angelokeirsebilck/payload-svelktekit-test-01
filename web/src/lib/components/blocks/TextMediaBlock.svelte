<script lang="ts">
  import type { TextImageBlock } from "$lib/types/block-types";
  import type { Options } from "svelte-inview";
  import { inview } from "svelte-inview";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import ImageKit from "../base/ImageKit.svelte";
  import RichText from "../fields/richtext/RichText.svelte";

  export let content: TextImageBlock;
  export let index: number;

  let isInView: boolean;
  const options: Options = {
    threshold: 0.6,
  };
</script>

<Background bgColor={content.settings.bgColor}>
  <div
    class=""
    use:inview={options}
    on:enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
    }}
  >
    <Container margin={content.settings.bgColor == "white"}>
      <div class="grid-cols-12 grid gap-8">
        <div
          class="col-span-12 md:row-start-1 flex md:col-span-5 {content.settings
            .textPos == 'right'
            ? 'order-1 md:order-2 md:col-start-8'
            : 'order-1'}"
        >
          <div class="prose {content.settings.textVerAlign}">
            <RichText textNodes={content.text} />
          </div>
        </div>
        <div
          class="col-span-12 md:row-start-1 md:col-span-5 relative mt-12 md:mt-0 {content
            .settings.textPos == 'right'
            ? 'order-2 md:order-1'
            : 'order-2 md:col-start-8'}"
        >
          <div
            class="absolute bg-secondary-default  w-80 aspect-square -top-12 -right-12 z-10"
          />

          <div class="relative overflow-hidden">
            <div
              class="absolute top-0 z-10 right-0 origin-right transition-all w-full ease-in-out bg-primary-default h-full duration-500 "
            />
            <div
              class="absolute bg-secondary-default w-40 aspect-square rounded-full delay-700 transition-all duration-1000 transform -bottom-20 -left-20 z-50 {isInView
                ? 'translate-x-0'
                : '-translate-x-full'}"
            />
            <div
              class=" transition-all transform origin-right right-0 relative z-20 ease-out bg-primary-200 duration-[1500ms] {isInView
                ? 'translate-x-0'
                : 'translate-x-full'}"
            >
              <ImageKit
                transformations={[["736"], ["600"], ["384"]]}
                alt={content.image.alt}
                src="{content.image.prefix}/{content.image.filename}"
                sizes="(max-width: 768px) 100vw, 50vw"
                height={content.image.height}
                width={content.image.width}
                loading={index == 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</Background>
