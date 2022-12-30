<script lang="ts">
  import { invalidate } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  setInterval(() => {
    invalidate("preview:uri");
  }, 2000);
</script>

<div class="container px-8 mx-auto my-16">
  <h1 class="mb-4 text-5xl">{data.pageData.page.pageTitle}</h1>
</div>
{#each data.pageData.page.block as item}
  <section>
    <div class="container px-8 mx-auto my-16">
      {item.text}
    </div>
  </section>
{/each}
