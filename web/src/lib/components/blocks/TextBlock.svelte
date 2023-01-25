<script lang="ts">
  import type { TextBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import RichText from "../fields/richtext/RichText.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { afterUpdate } from "svelte";
  import { staggerAnimationFromTo } from "$lib/utils/staggerAnimationFromTo";

  export let content: TextBlock;

  let text: any;
  afterUpdate(async () => {
    gsap.registerPlugin(ScrollTrigger);
    staggerAnimationFromTo(text);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });
</script>

<Background bgColor={content.bgColor}>
  <Container margin={content.bgColor == "white"}>
    <div class="prose-sm md:prose" bind:this={text}>
      <RichText textNodes={content.text} />
    </div>
  </Container>
</Background>
