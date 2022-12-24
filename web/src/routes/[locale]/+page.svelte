<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<section>
  <div class="container px-8 mx-auto my-16">
    {#each data.home.block as block}
      <h1 class="mb-4 text-5xl">{block.text}</h1>
    {/each}
  </div>
</section>
