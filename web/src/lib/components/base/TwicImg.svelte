<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let alt: string;
  export let classProp: string;
  export let ratio: string;
  //
  let TwicImg;

  onMount(async () => {
    const module = await import("@twicpics/components/svelte3");
    TwicImg = module.TwicImg;
  });
</script>

<svelte:component this={TwicImg} {src} {alt} class={classProp} {ratio} />
