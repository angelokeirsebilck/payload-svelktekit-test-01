<script lang="ts">
  import type { TextImageBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import ImageKit from "../base/ImageKit.svelte";
  import RichText from "../fields/richtext/RichText.svelte";

  export let content: TextImageBlock;
  export let index: number;
</script>

<Background bgColor={content.settings.bgColor}>
  <Container margin={content.settings.bgColor == "white"}>
    <div class="grid-cols-12 grid gap-8">
      <div
        class="col-span-12 md:row-start-1 md:col-span-5 {content.settings
          .textPos == 'right'
          ? 'order-1 md:order-2 md:col-start-8'
          : 'order-1'}"
      >
        <div class="prose">
          <RichText textNodes={content.text} />
        </div>
      </div>
      <div
        class="col-span-12 md:row-start-1 md:col-span-6 {content.settings
          .textPos == 'right'
          ? 'order-2 md:order-1'
          : 'order-2 md:col-start-7'}"
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
  </Container>
</Background>
