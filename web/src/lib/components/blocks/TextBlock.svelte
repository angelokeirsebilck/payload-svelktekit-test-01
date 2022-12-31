<script lang="ts">
  import type { TextBlock } from "$lib/types/block-types";
  import Container from "../base/Container.svelte";
  import RichText from "../fields/richtext/RichText.svelte";

  export let content: TextBlock;
</script>

<Container>
  <div class="prose">
    <RichText textNodes={content.text} />
  </div>
</Container>
