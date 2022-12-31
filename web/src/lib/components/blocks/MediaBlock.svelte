<script lang="ts">
  import type { MediaBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import TwicImg from "$lib/components/base/TwicImg.svelte";
  import { env } from "$env/dynamic/public";
  export let content: MediaBlock;
</script>

<Container>
  <TwicImg
    src="{env.PUBLIC_S3_URL}/{content.media.prefix}/{content.media.filename}"
    alt={content.media.alt}
    classProp="max-w-4xl"
  />
</Container>
