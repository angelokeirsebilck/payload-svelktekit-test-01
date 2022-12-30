<script lang="ts">
  import RichText from "../fields/richtext/RichText.svelte";

  export let textNodes: { [k: string]: unknown }[];
</script>

<div class="my-24">
  <div class="prose">
    <RichText {textNodes} />
  </div>
</div>
