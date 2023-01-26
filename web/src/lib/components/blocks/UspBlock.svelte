<script lang="ts">
  import type { UspBlock } from "$lib/types/block-types";
  import Background from "../base/Background.svelte";
  import Container from "../base/Container.svelte";
  import Responsive from "../icons/Responsive.svelte";
  import Rocket from "../icons/Rocket.svelte";
  import { afterUpdate } from "svelte";
  import Seo from "../icons/Seo.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  export let content: UspBlock;
  let parent: any;
  afterUpdate(async () => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent,
        start: "top 75%",
        // markers: true,
        toggleActions: "play pause resume reverse",
      },
    });

    tl.from(".usp", {
      x: -10,
      stagger: 0.2,
      opacity: 0,
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  });

  const getContainerStyle = (icon: string): string => {
    switch (icon) {
      case "responsive":
        return "bg-primary-default/20";
      case "seo":
        return "bg-secondary-default/20 rounded-full";
      case "rocket":
        return "bg-primary-default/20 rounded-full";
      default:
        return "";
    }
  };

  const getSvgIcon = (icon: string) => {
    switch (icon) {
      case "responsive":
        return Responsive;
      case "seo":
        return Seo;
      case "rocket":
        return Rocket;
      default:
        return "";
    }
  };
</script>

<Background bgColor={content.bgColor}>
  <Container margin={content.bgColor == "white"}>
    <div class="grid md:grid-cols-3 gap-y-16" bind:this={parent}>
      {#each content.uspList as usp, index (usp.id)}
        <div class="md:col-span-1 flex flex-col items-center usp">
          <div
            class="flex  justify-center items-center max-w-[8rem] md:max-w-[10rem] p-8 md:p-10 {getContainerStyle(
              usp.icon
            )}"
          >
            <svelte:component this={getSvgIcon(usp.icon)} />
          </div>
          <div class="mt-6 text-2xl font-medium mb-6">{usp.uspTitle}</div>
          <div class="mx-8 text-lg text-center">{usp.uspText}</div>
        </div>
      {/each}
    </div>
  </Container>
</Background>
