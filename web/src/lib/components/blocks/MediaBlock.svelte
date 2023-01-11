<script lang="ts">
  import type { ImageBlock } from "$lib/types/block-types";
  import type { Options } from "svelte-inview";
  import { inview } from "svelte-inview";
  import Container from "../base/Container.svelte";
  import ImageKit from "../base/ImageKit.svelte";

  let isInView: boolean;
  const options: Options = {
    threshold: 0.7,
  };

  export let content: ImageBlock;
</script>

<Container>
  <div
    class="md:w-1/2 mx-auto transition-all duration-[1000ms] {isInView
      ? 'opacity-100 -translate-y-6'
      : 'opacity-0 translate-y-0'}"
    use:inview={options}
    on:enter={(event) => {
      const { inView } = event.detail;
      isInView = inView;
    }}
  >
    <ImageKit
      transformations={[["736"], ["600"], ["384"]]}
      alt={content.image.alt}
      src="{content.image.prefix}/{content.image.filename}"
      sizes="(max-width: 768px) 100vw, 50vw"
      height={content.image.height}
      width={content.image.width}
    />
  </div>
</Container>
