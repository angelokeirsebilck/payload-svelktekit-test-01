<script lang="ts">
  import type { MediaBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import ImageKit from "../base/ImageKit.svelte";

  export let content: MediaBlock;
</script>

<Container>
  <div class="md:w-1/2 mx-auto">
    <ImageKit
      transformations={[["736"], ["600"], ["384"]]}
      alt={content.media.alt}
      src="{content.media.prefix}/{content.media.filename}"
      sizes="(max-width: 768px) 100vw, 50vw"
      height={content.media.height}
      width={content.media.width}
    />
  </div>
</Container>
