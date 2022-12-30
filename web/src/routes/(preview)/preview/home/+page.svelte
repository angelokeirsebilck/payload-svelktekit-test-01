<script lang="ts">
  import { invalidate } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  setInterval(() => {
    invalidate("preview:home");
  }, 2000);
</script>

<div class="container px-8 mx-auto my-16">
  <h1 class="mb-4 text-5xl">{data.home.pageTitle}</h1>
</div>
<section>
  <div class="container px-8 mx-auto my-16">
    {#each data.home.block as block}
      <h1 class="mb-4 text-5xl">{block.text}</h1>
    {/each}
  </div>
</section>
