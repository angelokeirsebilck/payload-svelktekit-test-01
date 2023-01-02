<script lang="ts">
  import type { TextBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import RichText from "../fields/richtext/RichText.svelte";

  export let content: TextBlock;
</script>

<Background bgColor={content.bgColor}>
  <Container margin={content.bgColor == "white"}>
    <div class="prose">
      <RichText textNodes={content.text} />
    </div>
  </Container>
</Background>
