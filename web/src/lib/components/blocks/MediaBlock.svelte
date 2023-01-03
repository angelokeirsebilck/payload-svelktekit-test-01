<script lang="ts">
  import type { ImageBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import ImageKit from "../base/ImageKit.svelte";

  export let content: ImageBlock;
</script>

<Container>
  <div class="md:w-1/2 mx-auto">
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
